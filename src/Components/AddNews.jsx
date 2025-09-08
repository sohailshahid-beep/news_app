import React from "react";
import { useNewsStore } from "../UseNewsContext/news";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  author: yup.string().required("Author is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  content: yup.string().required("Content is required"),
  publishedAt: yup.date().required("Publish date is required"),
});

const AddNews = () => {

  const { addNews, newses } = useNewsStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newId = newses.length > 0 ? newses[newses.length - 1].id + 1 : 0;

    const newsData = {
      id: newId,
      author: data.author,
      title: data.title,
      description: data.description,
      content: data.content,
      publishedAt: data.publishedAt,
    };

    addNews(newsData);
    console.log("Data added successfully");
    reset();
    
  };

  return (



    <div className="max-w-md mx-auto mt-10 mb-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Add News
      </h1>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
    
        <div className="mb-5">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            id="author"
            {...register("author")}
            placeholder="Author name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <p className="text-red-500 text-sm mt-1">{errors.author?.message}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            placeholder="Article title"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
        </div>

        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Short description"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>
        </div>

    
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea
            id="content"
            {...register("content")}
            placeholder="Full content of the article"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <p className="text-red-500 text-sm mt-1">{errors.content?.message}</p>
        </div>

 
        <div className="mb-5">
          <label
            htmlFor="publishedAt"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Published At
          </label>
          <input
            type="date"
            id="publishedAt"
            {...register("publishedAt")}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <p className="text-red-500 text-sm mt-1">{errors.publishedAt?.message}</p>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddNews;
