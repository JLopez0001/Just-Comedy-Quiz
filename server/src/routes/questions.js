import express from "express";
import questions from "../assets/questions.json" assert { type: "json" };
import scoreComedians from "../services/quizServices.js";

const router = express.Router();


//get all questions from questions.json
router.get("/comedian-quiz", (req, res) => {
    res.status(200).json(questions);
});


//post user answers to quiz and get top comedians
router.post("/comedian-quiz", async (req, res) => {
    try {
        const userAnswers = req.body;
        const topComedians = await scoreComedians(userAnswers);
        res.status(200).json({topComedians});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing quiz');
    }
});




export { router as questionRouter}