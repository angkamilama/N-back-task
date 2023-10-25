import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function MyForm() {
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
    console.log(data);
    navigate("GamePage");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input type="text" id="name" {...register("name")} />
        {errors.name?.message}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
