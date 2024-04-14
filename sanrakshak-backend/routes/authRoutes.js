import express from "express";
import register from "../controllers/Auth/register.js";
import login from "../controllers/Auth/login.js";
import logout from "../controllers/Auth/logout.js";
import refreshToken from "../controllers/Auth/refreshToken.js";
import { getUserData } from "../controllers/UserController/getUserData.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the auth routes " }))

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/refresh-token', refreshToken);
router.get('/user', verifyToken, getUserData)

const authRouter = router;
export default authRouter;