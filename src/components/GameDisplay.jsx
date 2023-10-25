import React from "react";
import { useState, useEffect, useRef } from "react";

function GameDisplay() {
  const [word, setWord] = useState("STARTING...");
  let alphabets = ["A", "B", "C", "D", "E", "H"];
  const preValue = useRef([]);
  let myTimeout;
  let DisplayedWordsArray = preValue.current;

  const addInArray = (value) => {
    if (DisplayedWordsArray.length < 16) {
      setWord(value);
      DisplayedWordsArray.push(value);
    } else {
      setWord("GAME OVER");
      return;
    }
  };

  function timeCount() {
    let randomIndex = Math.floor(Math.random() * 6);
    let alphabet = alphabets[randomIndex];
    if (alphabet === word) {
      console.log("same again");
      let newAlphabet = alphabets[Math.floor(Math.random() * 6)];
      if (newAlphabet === word) {
        let anotherNewAlphabet = alphabets[Math.floor(Math.random() * 6)];
        addInArray(anotherNewAlphabet);
      } else {
        addInArray(newAlphabet);
      }
    } else {
      addInArray(alphabet);
    }
    setTimeout(timeCount, 2750);
  }

  const startMatch = () => {
    myTimeout = setTimeout(timeCount, 2750);
  };

  const stopMatch = () => {
    clearTimeout(myTimeout);
  };

  console.log(DisplayedWordsArray);

  return (
    <div className="w-full h-screen border bg-green-300 border-red-900 p-2 flex-col justify-center items-center">
      <div className="w-7/12 h-[300px] border border-red-900 flex justify-center items-center ">
        {word}
      </div>
      <div className=" flex justify-evenly h-20 w-30 ">
        <button onClick={startMatch} className="m-2 p-2 border border-blue-900">
          start
        </button>
        <button onClick={stopMatch} className="m-2 p-2 border border-blue-900">
          Matched
        </button>
      </div>
    </div>
  );
}

export default GameDisplay;
