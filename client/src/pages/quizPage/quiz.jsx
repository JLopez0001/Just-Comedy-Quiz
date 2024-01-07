import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizQuestions from "../../components/quizQuestions";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'; 
import { setTopComedians } from '../../features/topComedianSlice'


const QuizPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});


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
    };

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

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>FIND YOUR FLAVOR OF COMEDY</h1>
                {questions.map(question => {
                    return (
                        <QuizQuestions
                            key={question.id}
                            question={question.text}
                            answers={question.answers}
                            questionID={question.id}
                            type={question.type}
                            onAnswerChange={handleAnswerChange}
                        />
                    )
                })}
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                >
                    SEE MY RESULTS
                </Button>
            </form>
        </div>
    );
}

export default QuizPage;