import express, { type Application } from "express";
import dotenv from "dotenv";
import { UserRouter } from "./routes/User.routes.js";
import { connectionToDb } from "./config/dbConnection.js";
import cookieParser from "cookie-parser";
import { Product } from "./models/Product.model.js";
import { sampleproducts } from "./data/products.js";
import { User } from "./models/User.model.js";
import { ProductRouter } from "./routes/Product.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app: Application = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", UserRouter);
app.use("/api/products",ProductRouter)

app.get("/", (req, res) => {
  return res.json({ msg: "server is running successfully" });
});

connectionToDb(process.env.MONGODB_URI!).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log("server running on port", PORT);
  });
});

// const newuser = User.create({
//     name: "admin",
//     email: "admin@gmail.com",
//     password: "123456",
//   }).then((e) => {
//     Product.insertMany(
//       sampleproducts.map((user) => {
//         return { ...user, user: e._id };
//       }),
//     );
//   });
