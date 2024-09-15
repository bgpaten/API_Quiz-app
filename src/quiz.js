import { db } from "./firebase.js";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";

// create quiz
export const createQuiz = async (req, res) => {
  try {
    // Fungsi untuk menyimpan data yang dikirim user
    const { question, option1, option2, option3, option4, ans } = req.body;

    // untuk validasi
    if (!question || !option1 || !option2 || !option3 || !option4 || !ans) {
      return res.status(400).json({ error: "All field are required" });
    }

    // untuk menyimpan data ke firebase
    const newQuiz = { question, option1, option2, option3, option4, ans };

    // definisikan database di firebasenya
    const quizRef = collection(db, "quiz");

    // menambahkan data kedalam database
    const docRef = await addDoc(quizRef, { ...newQuiz, id: "" });

    // update data
    const docId = doc(db, "quiz", docRef.id);
    await updateDoc(docId, { id: docRef.id });

    // return
    res.status(201).json({
      message: "Quiz created Sucessfully!",
      id: docRef.id,
      ...newQuiz,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all quizzes
export const getAllQuiz = async (req, res) => {
  try {
    const quizRef = collection(db, "quiz");
    const quizSnapshot = await getDocs(quizRef);
    const quizzes = [];

    quizSnapshot.forEach((doc) => {
      const data = doc.data();
      quizzes.push({
        id: doc.id,
        question: data.question,
        option1: data.option1,
        option2: data.option2,
        option3: data.option3,
        option4: data.option4,
        ans: data.ans,
      });
    });

    res.status(200).json({
      message: "Quizzes retrieved successfully!",
      quizzes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
