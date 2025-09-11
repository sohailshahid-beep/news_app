import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import image from "../image.jpg";

const NewsCard = ({ news, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!news) return null;

  return (
    <>
  
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer flex flex-col justify-between h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition relative"
      >
        <img
          src={news.urlToImage || image}
          alt={news.title || "News Image"}
          className="mb-4 rounded"
        />

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.author || "Unknown Author"}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news.title?.slice(0, 60) || "No Title"}
          {news.title?.length > 60 ? "..." : ""}
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news.publishedAt
            ? new Date(news.publishedAt).toLocaleDateString()
            : "Unknown Date"}
        </p>

        <div className="flex items-center justify-between mt-4">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Read more
          </a>

          <FontAwesomeIcon
            icon={faTrash}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(news.id);
            }}
            className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
          />
        </div>
      </div>

   
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      
        <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto">
              
            
              <div className="relative">
                <img
                  src={news.urlToImage || image}
                  alt={news.title || "News Image"}
                  className="mb-4 rounded w-full"
                />

            
                <button
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-3xl font-bold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
              </div>

              <Dialog.Title className="text-2xl font-bold mb-2 dark:text-white">
                {news.title || "No Title"}
              </Dialog.Title>

              <p className="mb-2 text-gray-700 dark:text-gray-300">
                <strong>Author:</strong> {news.author || "Unknown Author"}
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                <strong>Description:</strong> {news.description || "No Description"}
              </p>
              <p className="mb-2 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                <strong>Content:</strong> {news.content || "No Content"}
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                <strong>Published At:</strong>{" "}
                {news.publishedAt
                  ? new Date(news.publishedAt).toLocaleDateString()
                  : "Unknown Date"}
              </p>
            </Dialog.Panel>
          </div>
       
      </Dialog>
    </>
  );
};

export default NewsCard;
