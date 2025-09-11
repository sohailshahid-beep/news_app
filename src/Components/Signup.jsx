import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import InputField from "./Commen/InputField";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .max(4, "Password can be maximum 4 characters"),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((u) => u.email === data.email);

    if (!user) {
      existingUsers.push(data);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("User added successfully");
      navigate("/login");
      reset();
    } else {
      alert("User already exists");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-12 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-10">
          Signup Form
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white mb-20 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.01]"
      >
        <InputField
          label="Name"
          id="name"
          register={register}
          error={errors.name}
          placeholder="your name"
        />

        <InputField
          label="Email"
          id="email"
          register={register}
          error={errors.email}
          placeholder="name@domain.com"
        />

        <InputField
          label="Password"
          id="password"
          register={register}
          error={errors.password}
          placeholder="xxxx"
        />

        <button
          type="submit"
          className="w-full mb-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200"
        >
          Signup
        </button>

        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
      <Footer></Footer>
    </>
  );
};

export default Signup;
