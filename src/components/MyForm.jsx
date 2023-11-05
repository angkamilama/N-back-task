import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function MyForm({ userName }) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("please enter your name"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFunction = (data) => {
    userName(data);
    navigate("GamePage", { state: { key: data } });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div className="p-2 w-full min-h-[80px] flex justify-evenly items-center">
          <label>Name</label>
          <input
            className="p-1 ml-3 border border-blue-700 rounded-xl outline-0 text-center"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="mb-3 text-red-900">{errors.name?.message}</div>
        <button className="px-4 py-2 m-2 border border-blue-500 rounded-lg bg-blue-500 text-slate-200 shadow-lg outline-0 hover:bg-slate-200 hover:text-blue-500 hover:border hover:border-blue-600 font-medium">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;
