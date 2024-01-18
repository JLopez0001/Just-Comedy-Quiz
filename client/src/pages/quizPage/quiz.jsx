import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizQuestions from "../../components/quizQuestions";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'; 
import { setTopComedians } from '../../features/topComedianSlice'
import { Paper } from "@mui/material";

const QuizPage = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [isAnswerSelected, setIsAnswerSelected] = useState(false);


    useEffect(() => {
        const fetchQuestionsData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/questions/comedian-quiz");
                setQuestions(response.data.questions);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestionsData();
    }, []);


    const handleAnswerChange = (questionID, answerChoices) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [questionID]: answerChoices }));
        setIsAnswerSelected(answerChoices.length > 0);
    };

    const handleNextQuestion = () => {
        if (isAnswerSelected) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswerSelected(false);
        } else {
            alert("Please select at least one answer.");
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log('Submitting answers:', answers); // Debugging line

        try {
            const response = await axios.post("http://localhost:3001/questions/comedian-quiz", answers); 
            console.log('Response from server:', response.data.topComedians);
            dispatch(setTopComedians(response.data.topComedians))
            navigate('/comedians/results');
           
        } catch (error) {
            console.error(error);
        }
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="secondary-background-image">
            <Typography 
                className="title" 
                variant="h2"
                sx={{m:'40px auto'}}
            >
                FIND YOUR FLAVOR OF COMEDY
             </Typography>
             
            {currentQuestion && (
                <div className="quiz-component">
                   <Paper 
                    elevation={24} 
                    square={false} 
                    sx={{
                        width: currentQuestion.answers.length > 4 ? '650px' : '450px', 
                        margin: '90px auto',
                        boxShadow: '0px 0px 30px 8px rgba(0, 0, 0, 0.9)'
                    }}> 

                        <QuizQuestions
                            key={currentQuestion.id}
                            question={currentQuestion.text}
                            answers={currentQuestion.answers}
                            questionID={currentQuestion.id}
                            type={currentQuestion.type}
                            currentQuestion={currentQuestionIndex}
                            totalQuestions={questions.length}
                            onAnswerChange={handleAnswerChange}
                        />

                    <div className="next-button">
                        {/* {currentQuestionIndex < questions.length - 1 ? ( */}
                            <Button variant="contained" disabled={!isAnswerSelected} size="large"  onClick={handleNextQuestion} sx={{bgcolor:"#fd2eb3",'&:hover': {bgcolor: '#ff57c4'}}}>
                                Next
                            </Button>
                        {/* ) : ( */}
                            <Button variant="contained"  onClick={onSubmit}>
                                Submit
                            </Button>
                        {/* )} */}
                    </div>
                    </Paper>
                </div>
            )}
        </div>
    );
}

export default QuizPage;