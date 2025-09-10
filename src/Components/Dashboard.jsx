import React, { useEffect } from "react";
import { useNewsStore } from "../UseNewsContext/news";
import axios from "axios";
import AddNews from "./AddNews";
import { Link } from "react-router-dom";
import NewsCard from "./List_News";

import Footer from "./Footer"

const apiKey = "84e09464ce6c4b0ebd4a2c295bbf902b";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const Dashboard = () => {
  const { addBulkNews, removeNews, newses } = useNewsStore();

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data)

        const mappedData = data.articles.map(article => ({
          id: article.url,
          author: article.author || "Untitled",
          content: article.content || "Untitled",
          description: article.description || "No description",
          publishedAt: article.publishedAt || "Unknown",
          title: article.title || "Untitled",
          url: article.url || "#",
          urlToImage: article.urlToImage || "",
        }));


        addBulkNews(mappedData);
      } catch (error) {
        console.error("Axios error:", error.message);
      }
    };


    fetchData();
  }, []);



  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      removeNews(id);
    }
  };

  return (
    <>
    <div className="flex items-center justify-between mb-8 mt-20 mr-10 ml-10">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
      Today Headlines
    </h1>

    <Link
      to="/addnews"

      className="py-3 px-5 text-white font-medium rounded-lg text-sm bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300 shadow-md"
    >
      Add Article
    </Link>
  </div>

      
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-15 mb-15">
        {newses.map((news) => (
          <div className="flex justify-center" key={news.id}>
            <NewsCard news={news} handleDelete={handleDelete} />
          </div>
        ))}
      </div>
        <Footer/>
    </>
  );
};

export default Dashboard;
