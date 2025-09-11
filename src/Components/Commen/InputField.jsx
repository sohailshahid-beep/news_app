import React from "react";

const InputField = ({ label, id, register, error, type = "text", placeholder }) => {
  return (

    
    <div>
      <label
        htmlFor={id}
        className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        placeholder={placeholder}
        className="w-full p-3 mb-5 text-sm border rounded-lg shadow-sm 
                   bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition"
      />
      {error && <p className="text-red-500 mb-5 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
