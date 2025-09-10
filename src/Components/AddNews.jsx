import React from "react";
import { useNewsStore } from "../UseNewsContext/news";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  author: yup.string().required("Author is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  content: yup.string().required("Content is required"),
  publishedAt: yup.date().required("Publish date is required"),
});

const AddNews = () => {
  const { addNews, newses } = useNewsStore();
  const navigate =useNavigate();

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
      url: newId,
      urlToImage: data.urlToImage || "",
    };

    addNews(newsData);
    navigate("/dashboard")
    
    reset();
  };

  return (
    <>
    <div className="max-w-2xl mx-auto mt-10 mb-20 px-4">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Add News
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
          <div>
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
              className="w-full p-3 text-sm border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <p className="text-red-500 text-sm mt-1">{errors.author?.message}</p>
          </div>


          <div>
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
              className="w-full p-3 text-sm border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
          </div>

     
          <div>
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
              rows={3}
              className="w-full p-3 text-sm border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.description?.message}
            </p>
          </div>

   
          <div>
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
              rows={5}
              className="w-full p-3 text-sm border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.content?.message}
            </p>
          </div>

       
          <div>
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
              className="w-full p-3 text-sm border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.publishedAt?.message}
            </p>
          </div>

       
          <button
            type="submit"
            className="w-full py-3 px-5 text-white font-medium rounded-lg text-sm bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 shadow-md"
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AddNews;
