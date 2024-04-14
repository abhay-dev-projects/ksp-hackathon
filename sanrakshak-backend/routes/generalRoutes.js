import express from "express";

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the gerneral police routes " }))

const generalRouter = router;
export default generalRouter;