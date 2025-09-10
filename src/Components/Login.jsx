import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./Footer"
const schema = yup.object().shape({
  email: yup.string().email("Email must be valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .max(4, "Password can be maximum 4 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.email === data.email);

    if (user) {
      if (user.password === data.password) {
        console.log("Login successful");
        localStorage.setItem("isLoggedIn", "true");
        reset();
        navigate("/dashboard");
      } else {
        console.log("Incorrect password");
        alert("Incorrect password");
        reset();
      }
    } else {
      console.log("User not found");
      alert("User not found");
      reset();
    }
  };

  return (
    <>
   
      <div className="flex items-center justify-center mt-12 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-10">Login Form</h1>
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="max-w-md mx-auto mb-20 p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.01]"
      >
     
        <div className="mb-5">
          <label htmlFor="email" className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input 
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@domain.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-5 text-sm font-medium text-gray-900 dark:text-white">
            Your Password
          </label>
          <input 
            type="password"
            id="password"
            {...register("password")}
            className="bg-gray-50 dark:bg-gray-700 border mb-5 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
            placeholder="xxxx"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

     
        <button 
          type="submit" 
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200"
        >
          Login
        </button>

    
        <p className="mt-6 text-center text-gray-700 dark:text-gray-300">
          Not having an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
        </p>
      </form>
      <Footer/>
    </>
  );
};

export default Login;
