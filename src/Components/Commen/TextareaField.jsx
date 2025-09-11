import React from "react";

const TextareaField = ({ label, id, register, error, placeholder, rows = 3 }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register(id)}
        placeholder={placeholder}
        rows={rows}
        className="w-full p-3 text-sm border rounded-lg shadow-sm 
                   bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 
                   text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition resize-none"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default TextareaField;
