
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import userRouter from "./routes/userRouter.js";


//console.log(process.env.NODE_ENV); // NODE_EVN 환경변수

// middleware
app.use(express.json());
app.use("/", userRouter);

app.listen(3000)