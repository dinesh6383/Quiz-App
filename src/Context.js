import React, { useState, createContext } from "react";
import axios from "axios";

export const userChoice = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  let [quest, setQuest] = useState([]);
  const [questCount, setQuestCount] = useState(0);
  const [score, setScore] = useState(0);
  const fetchApi = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level.toLowerCase()}&type=multiple`
    );
    setQuest(data.results);
    console.log(data);
  };

  return (
    <userChoice.Provider
      value={{
        name,
        setName,
        level,
        setLevel,
        category,
        setCategory,
        fetchApi,
        quest,
        setQuest,
        questCount,
        setQuestCount,
        score,
        setScore,
      }}
    >
      {children}
    </userChoice.Provider>
  );
};

export default Context;
