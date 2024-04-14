import express from "express";

const router = express.Router();

router.get('/', (req, res) => res.json({ message: "Hello from the police routes " }))

const policeRouter = router;
export default policeRouter;