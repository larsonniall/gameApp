import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import config from"./config/index.js";
// ADD these
import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

// DB connection
mongoose.connect(config.mongoURI, { useMongoClient: true });

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ADD routes
app.use("/", userRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ":" + err.message });
  }
});

app.listen(config.port, () => {
  console.log(`🚀 at port ${config.port}`);
});
