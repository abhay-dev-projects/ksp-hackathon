import User from "../models/user.js";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config({
  path: ".env"
});

const verifyToken = async (req, res, next) => {
  const cookies = req.headers.cookie;
  var token = req.query.token;
  console.log("this is token value", token);
  if (!token) {
    return res.status(404).json({ message: "No token found in the accessToken cookie" });
  }

  jwt.verify(String(token), process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    console.log("user id from jwt decode", decoded.id, decoded);
    req.id = decoded.userId;
    req.role = decoded.role;
    next();
  });
};


export {
  verifyToken
};

