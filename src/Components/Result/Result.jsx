import { Button } from "@mui/material";
import React, { useContext } from "react";
import { userChoice } from "../../Context";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const {
    name,
    score,
    setScore,
    setCategory,
    setLevel,
    setName,
    setQuest,
    setQuestCount,
  } = useContext(userChoice);
  const navigate = useNavigate();

  function handleHome() {
    setCategory("");
    setName("");
    setLevel("");
    setQuestCount(0);
    setScore(0);
    setQuest([]);
    navigate("/");
  }

  return (
    <div id="result-page">
      <div className="result-podium">
        <h1>{name.toUpperCase()}</h1>
        <p>You have scored</p>
        <p>
          <span>{score}</span>
        </p>
        <Button
          onClick={handleHome}
          variant="outlined"
          style={{
            border: "2px solid black",
            color: "black",
          }}
        >
          HOME
        </Button>
      </div>
    </div>
  );
};

export default Result;
