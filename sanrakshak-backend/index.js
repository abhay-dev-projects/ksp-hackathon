import { config } from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./Db/connect.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";
import generalRouter from "./routes/generalRoutes.js";
import policeRouter from "./routes/policeRoutes.js";
import superRouter from "./routes/superRoutes.js";

const app = express();
app.use(bodyParser.json({ limit: '35mb' }));

// adding middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/general', generalRouter);
app.use('/api/police', policeRouter);
app.use('/api/super', superRouter);

console.log(process.env.Frontend_URL)

config({
  path: ".env"
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is listening to ${PORT} port`);
})

const databaseConnection = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.get("/", (req, res) => {
      res.send("Hi Welcome Kavach Backend")
    })
  } catch (error) {
    console.log(error);
  }
}
databaseConnection();