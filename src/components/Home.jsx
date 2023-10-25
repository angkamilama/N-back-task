import React from "react";
import { Outlet } from "react-router-dom";
import MyForm from "./MyForm";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen border bg-green-300  p-2 text-center flex justify-center items-center">
      <div className="w-7/12 h-[300px] border border-red-900 flex-col justify-evenly items-center ">
        <div className="border border-blue-300 w-full h-32 flex flex-col justify-evenly items-center mb-20">
          <h2>Welcome to N-back task</h2>
          <MyForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
