import jwt from "jsonwebtoken";

const generateAuthToken = (userId, role) => {
  const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, { expiresIn: '12h' });
  return token;
};

const verifyAuthToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

const generateRefreshToken = (userId, role) => {
  const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
  const refreshToken = jwt.sign({ userId, role }, refreshTokenSecret, { expiresIn: '7d' });
  return refreshToken;
};

const verifyRefreshToken = (refreshToken) => {
  const refreshTokenSecret = process.env.JWT_REFRESH_SECRET;
  try {
    const decoded = jwt.verify(refreshToken, refreshTokenSecret);
    return decoded;
  } catch (error) {
    return error;
  }
};

export {
  generateAuthToken,
  verifyAuthToken,
  generateRefreshToken,
  verifyRefreshToken
};