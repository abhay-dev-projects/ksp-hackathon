import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import { config } from "dotenv";
import { generateAuthToken, verifyAuthToken, generateRefreshToken, verifyRefreshToken } from "../../utils/token.js"

const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(401).json({ message: 'Missing refresh token' });
  }
  try {
    const decoded = verifyRefreshToken(token);
    const userId = decoded.userId;
    const role = decoded.role;
    const accessToken = generateAuthToken(userId, role);

    res.cookie('refreshToken', token, {
      httpOnly: true,
      secure: true,
    });
    return res.json({ accessToken: accessToken });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Refresh token expired' });
    }
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export default refreshToken;