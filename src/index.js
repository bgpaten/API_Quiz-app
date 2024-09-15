import express from "express";
const app = express();
import { createQuiz, getAllQuiz } from "./quiz.js";
import cors from 'cors';

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World");
});

app.post("/quiz", createQuiz);
app.get("/quiz", getAllQuiz);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});


// 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