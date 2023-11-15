import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function GameDisplay() {
  const { state } = useLocation();
  const [letter, setLetter] = useState("Click start & wait...");
  const [index, setIndex] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [rightAnswer, setRightAnswer] = useState(0);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(false);
  const letters = "DNSDSADFDSASDA".split("");

  useEffect(() => {
    if (running) {
      const id = setTimeout(showLetter, 2000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [index, running]);

  const showLetter = () => {
    if (wrongAnswer < 2 && index < letters.length - 1) {
      setLetter((letter) => letters[index]);
      setIndex((index) => index + 1);
    } else {
      setResult((result) => true);
      setRunning((running) => false);
    }
  };

  const stopLetter = () => {
    setRunning((running) => false);
    if (letters[index - 1] === letters[index - 3]) {
      setLetter((letter) => "Congratulation! Same");
      setRightAnswer(rightAnswer + 1);
    } else {
      setLetter((letter) => "Sorry! Not Same");
      setWrongAnswer(wrongAnswer + 1);
    }
  };

  const showResult = () => {
    return (
      <div className="h-full flex flex-col justify-evenly items-center">
        <p>
          Thank you! <span className="uppercase">{state.key.name}</span>
        </p>
        <p>
          Total attempts :{" "}
          <span className="font-semibold text-lg">
            {rightAnswer + wrongAnswer}
          </span>
        </p>
        <p>
          Your successful attempts :{" "}
          <span className="text-green-500  font-semibold text-lg">
            {rightAnswer}
          </span>
        </p>
        <p>
          Your unsuccessful attempts :{" "}
          <span className="text-red-500 font-semibold text-lg">
            {wrongAnswer}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-screen border bg-green-300 border-green-900   p-2 flex flex-col justify-evenly items-center">
      <div className="w-9/12 md:w-6/12 h-[300px] text-center text-slate-200 bg-gray-600 rounded-xl flex justify-center items-center">
        {result ? (
          showResult()
        ) : (
          <p className="text-2xl md:text-4xl p-5">{letter}</p>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setRunning((running) => !running);
            if (running) {
              stopLetter();
            }
          }}
        >
          {running ? (
            <span className="px-4 py-2 m-2 border border-blue-500 rounded-lg bg-red-700 text-slate-200 shadow-lg outline-0 hover:border hover:border-white-600 font-medium  md:text-3xl">
              Stop
            </span>
          ) : (
            <span className="px-4 py-2 m-2 border border-blue-500 rounded-lg bg-blue-500 text-slate-200 shadow-lg outline-0 active:bg-slate-300  active:text-blue-600 hover:border hover:border-blue-600  md:text-3xl font-medium">
              Start
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default GameDisplay;
