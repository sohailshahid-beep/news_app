import React, { useEffect, useState } from "react";
import { useNewsStore } from "../UseNewsContext/news";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddNews from "./AddNews";

const apiKey = "84e09464ce6c4b0ebd4a2c295bbf902b";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;



const Dashboard = () => {



  const [mydata, setmydata] = useState([]);


  const { addNews, updateNews, removeNews, newses } = useNewsStore();



  useEffect(() => {


  const fetchData = async () => {


    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Network response was not ok");
        return;
      }

      const data = await response.json();
      setmydata(data.articles);

 
      data.articles.forEach((article, index) => {

        addNews({
          id: index,
          author: article.author || "Untitled",
          content: article.content || "Untitled",
          description: article.description || "No description",
          publishedAt: article.publishedAt || "Unknown",
          title: article.title || "Untitled",
          url: article.url || "#",
          urlToImage: article.urlToImage || "",
        });
      });


    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  fetchData();

}, []);







  const handleEdit = (news) => {
   console.log("Edit News ")
  };


  const handleDelete = (id) => {


    if (window.confirm("Are you sure you want to delete this news?")) {
      removeNews(id);
    }



  };

  return (

    <>

    <div className="grid grid-cols-4 gap-6 mt-25">


      {newses.map((a, index) => (

        <div
          key={index}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >

          {a.urlToImage && <img src={a.urlToImage} className="mb-4 rounded" />}

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {a.author}
          </h5>

            <br></br>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {a.title}
            </p>


            <br></br>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {a.content}

          </p>


        <br></br>

           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {a.description}

          </p>

        <br></br>

         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {new Date(a.publishedAt).toLocaleDateString()} 
                </p>



        <br></br>

          <div className="flex items-center justify-between">

            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>

            <div className="flex gap-4 text-xl cursor-pointer">
        
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => handleEdit(a)}
                className="text-green-500 hover:text-green-700"
              />

       
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(a.id)}
                className="text-red-500 hover:text-red-700"
              />


            </div>
          </div>
        </div>


      ))}

    </div>



     <AddNews></AddNews>





    </>
  );
};

export default Dashboard;
