import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth",authRouter)

app.use((error,req,res,next)=>{
  const statusCode=error.statusCode || 500;
  const message=error.message || "internal server error"
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})