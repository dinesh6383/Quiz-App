import React, { useContext, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { userChoice } from "../../Context";
import Data from "../../Data";
import { useNavigate } from "react-router-dom";

const Quiz1 = () => {
  const { level, category, quest, questCount, setQuestCount, score, setScore } =
    useContext(userChoice);
  let [options, setOptions] = useState([]);
  const [disable, setDisable] = useState(false);
  const [userChoices, setUserChoices] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    quest.length > 1 &&
      setOptions(
        [
          quest[questCount].correct_answer,
          ...quest[questCount].incorrect_answers,
        ].sort(() => Math.random() - 0.5)
      );
  }, [quest[questCount]]);

  let quizTopic = Data.map((dat) => {
    if (dat.value === category) {
      return dat.category;
    }
  });

  function handleNext() {
    if (disable) {
      if (questCount < 9) {
        setQuestCount(questCount + 1);
        setDisable(false);
        setUserChoices("");
        setError(false);
      }
    } else {
      setError(true);
    }
  }

  function handleCheck(data) {
    if (!disable) {
      setUserChoices(data);
      setDisable(true);
      console.log(data);
      if (data === quest[questCount].correct_answer) {
        setScore(score + 1);
      }
    }
  }

  function handleSelectAns(data) {
    if (
      userChoices === data &&
      userChoices === quest[questCount].correct_answer
    ) {
      return "select";
    } else if (
      userChoices === data &&
      userChoices !== quest[questCount].correct_answer
    ) {
      return "wrong";
    } else if (data === quest[questCount].correct_answer) {
      return "select";
    }
  }
  function handleSubmit() {
    if (disable) {
      navigate("/result");
    } else {
      setError(true);
    }
  }

  return (
    <div id="quiz-page">
      <div className="question-podium">
        <div className="user-details">
          <div className="cat-lev">
            <p>
              <span>Category :</span> {quizTopic && quizTopic}
            </p>
            <p>
              <span>Level :</span> {level && level}
            </p>
          </div>
          <div className="ques-count">
            <div>
              <p>{questCount + 1}/10</p>
            </div>
            <div className="ranger">
              <div style={{ width: `${(questCount + 1) * 10}%` }}></div>
            </div>
          </div>
          <div className="score-board">
            <p>
              <span>Score</span> : {score}
            </p>
          </div>
        </div>
        <div>
          <div className="question">
            <div>
              <p>{quest.length > 1 && quest[questCount].question}</p>
            </div>
          </div>
          <div className="options">
            <div className="opt">
              <p
                className="error-msg"
                style={{ display: error ? "block" : "none" }}
              >
                Please select an option !
              </p>
              {options &&
                options.map((data) => {
                  return (
                    <div
                      onClick={() => handleCheck(data)}
                      key={data}
                      id={data}
                      className={`${disable && handleSelectAns(data)}`}
                    >
                      {data}
                    </div>
                  );
                })}
            </div>
            {questCount + 1 === 10 ? (
              <div className="next-btn">
                <Button
                  onClick={handleSubmit}
                  variant="outlined"
                  style={{ border: "2px solid black", color: "black" }}
                >
                  See Results
                </Button>
              </div>
            ) : (
              <div className="next-btn">
                <Button
                  onClick={handleNext}
                  variant="outlined"
                  style={{
                    border: "2px solid black",
                    color: "black",
                  }}
                >
                  NEXT
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz1;
