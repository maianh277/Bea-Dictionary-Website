import React, { useEffect, useState } from "react";
import axios from "axios";

const WordLists = () => {
  const [savedWords, setSavedWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:8080/getword", {
          id: localStorage.getItem("id"),
        });
        if (response.status === 200) {
          console.log(response.data);
          setSavedWords(response.data.saved_words || []);
          console.log("OK");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
      {savedWords.length > 0 ? (
        savedWords.map((word, index) => (
          <div
            className="mx-20 shadow-xl px-10 py-5 rounded-lg relative mt-6"
            key={index}
          >
            <div className="flex gap-3">
              <div className="flex flex-row gap-3"></div>
              <h1 className="capitalize font-bold mt-3 text-xl">{word}</h1>
            </div>
            <div className="absolute text-white font-bold bg-yellow-300 px-4 py-1 rounded-full -top-3">
              Liked
            </div>
          </div>
        ))
      ) : (
        <p>No saved words</p>
      )}
    </div>
  );
};

export default WordLists;
