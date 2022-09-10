import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Result from "./Components/Result/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
