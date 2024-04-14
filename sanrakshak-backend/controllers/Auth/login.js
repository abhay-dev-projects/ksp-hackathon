import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import { config } from "dotenv";
import { generateAuthToken, verifyAuthToken, generateRefreshToken } from "../../utils/token.js"

config({
  path: ".env"
});

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser)

    if (!existingUser) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }

    const matchPassword = bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ success: false, message: 'Invalid email or password.' });
    }
    const token = generateAuthToken(existingUser?._id, existingUser?.role); // Replace with actual userId
    console.log("this is token payload ", token);

    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    var redirectParam = req.query.redirect;
    if (!existingUser.role || existingUser.role.trim() === "") {
      redirectParam = "/role";
    } else {
      redirectParam = `/${existingUser.role}`;
    }
    const redirectURL = redirectParam
    const user = existingUser
    return res.json({ success: true, redirectURL, user, token });

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Invalid email or password.' });
  }
}

export default login;