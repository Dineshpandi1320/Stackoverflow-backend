import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//await connectDB();
mongoose.connect("mongodb+srv://dineshpandiyand07:OSYM25s1tIWFrFk9@stackoverflow.hnocwju.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("connected to DB successfully");
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is a simple API response!' });
});

app.use("/api/user", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answer", answerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
