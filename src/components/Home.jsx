import React, { useState } from "react";
import MyForm from "./MyForm";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const userName = (value) => {
    setName(value);
  };
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen  font-sans bg-green-300  p-2 text-center flex flex-col justify-evenly items-center">
      <div className="w-10/12 border border-dashed border-blue-900 p-3 leading-7">
        <h1 className="text-2xl mb-4">About N-back task game</h1>
        <p>
          In this game, you will see a sequence of letters appear for 15 times.
          Each time a letter will be shown for few seconds. You need to decide
          if you saw the same letter 2 trials ago. If you saw the same letter 2
          trials ago, click on the stop button. If correct, you will be shown
          'Correct', if not, 'Incorrect'. The game ends after 2 failed attempts
          to match.
        </p>
      </div>
      <div className="w-11/12 h-2/6 p-2  flex flex-col justify-evenly items-center ">
        <MyForm userName={userName} />
      </div>
    </div>
  );
}

export default Home;
