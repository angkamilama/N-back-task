import React, { useEffect, useState, useRef } from "react";
import { set } from "react-hook-form";
import { useLocation } from "react-router-dom";

function GameDisplay() {
  const [word, setWord] = useState("Click start & wait 2 secs...");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(false);
  const DisplayedWord = useRef([]);
  const arrayWord = DisplayedWord.current;
  const Alphabets = ["A", "B", "C", "D", "E", "F"];
  const successCount = useRef(0);
  const failureCount = useRef(0);
  const { state } = useLocation();

  useEffect(() => {
    const id = setTimeout(createWord, 2500);
    return () => {
      clearTimeout(id);
    };
  }, [word, running]);

  const createWord = () => {
    if (running) {
      if (arrayWord.length < 15 && failureCount.current < 2) {
        const index = Math.floor(Math.random() * 6);
        const randomWord = Alphabets[index];
        if (randomWord !== word || word === "") {
          setWord((word) => randomWord);
          arrayWord.push(randomWord);
        } else if (randomWord === word) {
          const secondRandomWord = Alphabets[Math.floor(Math.random() * 6)];
          if (secondRandomWord !== word) {
            setWord((word) => secondRandomWord);
            arrayWord.push(secondRandomWord);
          } else {
            const thirdRandomWord = Alphabets[Math.floor(Math.random() * 6)];
            setWord((word) => thirdRandomWord);
            arrayWord.push(thirdRandomWord);
          }
        }
      } else {
        setRunning((running) => false);
        setResult((result) => true);
      }
    }
  };

  const handleStop = () => {
    if (arrayWord.length >= 3 && failureCount.current < 2) {
      const slicedArray = arrayWord.slice(
        arrayWord.length - 3,
        arrayWord.length
      );
      if (slicedArray[0] === slicedArray[2]) {
        successCount.current++;
        setWord((word) => "Correct");
      } else {
        failureCount.current++;
        setWord((word) => "Incorrect");
      }
    } else {
      setWord("Not enough letters to compare");
    }
  };

  return (
    <div className="w-full h-screen border bg-green-300 border-green-900   p-2 flex flex-col justify-evenly items-center">
      <div className="w-9/12 md:w-6/12 h-[300px] text-center text-slate-200 bg-gray-600 rounded-xl flex justify-center items-center">
        {result ? (
          <div className="h-full flex flex-col justify-evenly items-center">
            <p>
              Thank you! <span className="uppercase">{state.key.name}</span>
            </p>
            <p>
              Total attempts :{" "}
              <span className="font-semibold text-lg">
                {successCount.current + failureCount.current}
              </span>
            </p>
            <p>
              Your successful attempts :{" "}
              <span className="text-green-500  font-semibold text-lg">
                {successCount.current}
              </span>
            </p>
            <p>
              Your unsuccessful attempts :{" "}
              <span className="text-red-500 font-semibold text-lg">
                {failureCount.current}
              </span>
            </p>
          </div>
        ) : (
          <p className="text-2xl md:text-4xl p-5">{word}</p>
        )}
      </div>
      <div>
        <div
          onClick={() => {
            if (!running) {
              setRunning((running) => true);
              createWord();
            } else {
              setRunning((running) => false);
              handleStop();
            }
          }}
        >
          {running ? (
            <button className="px-4 py-2 m-2 border border-blue-500 rounded-lg bg-red-700 text-slate-200 shadow-lg outline-0 hover:border hover:border-white-600 font-medium  md:text-3xl">
              Stop
            </button>
          ) : (
            <button className="px-4 py-2 m-2 border border-blue-500 rounded-lg bg-blue-500 text-slate-200 shadow-lg outline-0 active:bg-slate-300  active:text-blue-600 hover:border hover:border-blue-600  md:text-3xl font-medium">
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDisplay;
