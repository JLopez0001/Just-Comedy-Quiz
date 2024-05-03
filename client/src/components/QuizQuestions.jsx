import { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Typography,
  Grid,
} from "@mui/material";

const QuizQuestions = ({
  question,
  answers,
  questionID,
  type,
  onAnswerChange,
  currentQuestion,
  totalQuestions,
}) => {
  const [answerChoices, setAnswerChoices] = useState([]);

  const handleAnswerChange = (event, answer) => {
    let newAnswers;
    if (type === "single-choice") {
      newAnswers = [answer];
    } else {
      if (event.target.checked) {
        // Add the answer if it's checked
        newAnswers = [...answerChoices, answer];
      } else {
        // Remove the answer if it's unchecked
        newAnswers = answerChoices.filter((a) => a !== answer);
      }
    }
    setAnswerChoices(newAnswers);
    onAnswerChange(questionID, newAnswers);
  };

  return (
    <div>
      <div className="question-wrapper">
        <Typography
          variant="body1"
          className="question-number"
          sx={{ fontWeight: "light" }}
        >
          Question {currentQuestion + 1} /{totalQuestions}
        </Typography>

        <Typography variant="h5" className="question-text" sx={{}}>
          {question}
        </Typography>

        {type === "multiple-choice" ? (
          <Typography variant="body1" sx={{ fontWeight: "light" }}>
            (Select all that apply)
          </Typography>
        ) : null}
      </div>
      <FormControl required component="fieldset">
        <RadioGroup
          aria-label={`answerChoices_${questionID}`}
          value={type === "single-choice" ? answerChoices[0] : ""}
          row={false}
        >
          <Grid container spacing={3} sx={{ p: 2 }}>
            {answers.map((answer, index) => (
              <Grid item xs={12} sm={answers.length > 4 ? 6 : 12} key={index}>
                <FormControlLabel
                  id="answer"
                  className={`answerboo answer-choice ${
                    answerChoices.includes(answer) ? "selected-answer" : ""
                  }`}
                  value={answer}
                  control={
                    type === "single-choice" ? (
                      <Radio sx={{ "&.Mui-checked": { color: "#ff57c4" } }} />
                    ) : (
                      <Checkbox
                        checked={answerChoices.includes(answer)}
                        sx={{ "&.Mui-checked": { color: "#ff57c4" } }}
                      />
                    )
                  }
                  label={
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" },
                      }}
                    >
                      {answer}
                    </Typography>
                  }
                  onChange={(e) => handleAnswerChange(e, answer)}
                  sx={{ m: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default QuizQuestions;
