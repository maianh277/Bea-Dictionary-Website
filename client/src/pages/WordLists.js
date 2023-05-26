// WordLists.js

import React from "react";

const WordLists = () => {
  const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];

  return (
    <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
      {savedWords.map((word, index) => (
        <div
          className="mx-20 shadow-xl px-10 py-5 rounded-lg relative mt-6"
          key={index}
        >
          <div className="flex gap-3">
            <div className="flex flex-row gap-3"></div>
            <h1 className="capitalize font-bold mt-3">{word}</h1>
          </div>
          <div className="absolute text-white font-bold bg-yellow-300 px-4 py-1 rounded-full -top-3">
            Liked
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordLists;
