import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectionToDb } from "./config/dbConnection";
import { UserRouter } from "./routes/userRotues";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", UserRouter);

connectionToDb(process.env.MONGODB_URI).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log("server running on port");
  });
});
