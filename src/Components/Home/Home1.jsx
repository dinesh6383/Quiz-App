import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../Data";
import { MenuItem, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { userChoice } from "../../Context";

const Home1 = () => {
  const lvl = ["Easy", "Medium", "Hard"];
  const { name, setName, level, setLevel, category, setCategory, fetchApi } =
    useContext(userChoice);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit() {
    if (name && level && category) {
      setError(false);
      fetchApi();
      navigate("/quiz");
    } else {
      setError(true);
    }
  }

  return (
    <div id="home-page">
      <div className="form-box">
        <div className="form">
          <h1>WELCOME TO MY QUIZ APP.</h1>
          <p style={{ display: error ? "block" : "none" }}>
            All fields are mandatory !
          </p>
          <TextField
            autoComplete="off"
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "60%", height: "30px" }}
          ></TextField>
          <TextField
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            style={{ width: "60%", height: "30px" }}
          >
            {Data.map((data) => {
              return (
                <MenuItem key={data.category} value={data.value}>
                  {data.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            label="Select Level"
            variant="outlined"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            style={{
              width: "60%",
              height: "30px",
            }}
          >
            {lvl.map((data) => {
              return (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </TextField>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            style={{
              width: "60%",
              height: "40px",
              backgroundColor: "#dc894e",
              color: "black",
              fontSize: "17px",
            }}
          >
            Start the Quiz..
          </Button>
        </div>
      </div>
      <div className="image-box">
        <div className="hero-img">
          <img src={"/images/quizz-img.png"}></img>
        </div>
      </div>
    </div>
  );
};

export default Home1;
