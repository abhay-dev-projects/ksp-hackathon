import express from "express";

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the super police routes " }))

const superRouter = router;
export default superRouter;