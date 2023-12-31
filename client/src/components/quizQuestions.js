import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';


const QuizQuestions = ({question, answers, questionID, type, onAnswerChange}) => {

    const [answerChoices, setAnswerChoices] = useState([]);

    const handleSingleChoiceAnswer = (event) => {
        const answers = [event.target.value];
        setAnswerChoices(answers);
        onAnswerChange(questionID, answers);
    }  

    const handleMultipleChoiceAnswer = (event) => {
        let answers;
        if (event.target.checked) {
            answers = [...answerChoices, event.target.value];
        } else {
            answers = answerChoices.filter(answer => answer !== event.target.value);
        }
        setAnswerChoices(answers);
        onAnswerChange(questionID, answers);
    }


    return (
        <div>
            <div>
                <h2>{question}</h2>
                <FormControl >
                    {type === "single-choice" ? (
                        <div>
                            <RadioGroup
                                row
                                aria-label={`answerChoices_${questionID}`}
                                onChange={handleSingleChoiceAnswer}
                            >
                                {answers.map((answer, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={answer}
                                        control={<Radio />}
                                        label={answer}
                                    />
                                ))}
                            </RadioGroup>
                        </div>
                    ) : (
                        <div>
                            {answers.map((answer, index) => (
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox
                                            checked={answerChoices.includes(answer)}
                                            onChange={handleMultipleChoiceAnswer}
                                            value={answer}
                                        />
                                    }
                                    label={answer}
                                />
                            ))}
                        </div>
                    )}
                </FormControl>
            </div>
            
        </div>
    );
};

export default QuizQuestions;