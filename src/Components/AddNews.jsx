import React from "react";
import { useNewsStore } from "../UseNewsContext/news";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import InputField from "./Commen/InputField";
import TextareaField from "./Commen/TextareaField";

const schema = yup.object().shape({
  author: yup.string().required("Author is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  content: yup.string().required("Content is required"),
  publishedAt: yup.date().required("Publish date is required"),
});

const AddNews = () => {
  const { addNews, newses } = useNewsStore();
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
    navigate("/dashboard");
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 mb-20 px-4">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Add News
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Author"
            id="author"
            register={register}
            error={errors.author}
            placeholder="Author name"
          />

          <InputField
            label="Title"
            id="title"
            register={register}
            error={errors.title}
            placeholder="Article title"
          />

          <TextareaField
            label="Description"
            id="description"
            register={register}
            error={errors.description}
            placeholder="Short description"
            rows={3}
          />

          <TextareaField
            label="Content"
            id="content"
            register={register}
            error={errors.content}
            placeholder="Full content of the article"
            rows={5}
          />

          <InputField
            label="Published At"
            id="publishedAt"
            type="date"
            register={register}
            error={errors.publishedAt}
          />

          <button
            type="submit"
            className="w-full py-3 px-5 text-white font-medium rounded-lg text-sm bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 shadow-md"
          >
            Add Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
