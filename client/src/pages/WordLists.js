import React, { useEffect, useState } from "react";
import axios from "axios";
import Beanote from "../assets/note.png";

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

  const handleDeleteWord = async (word) => {
    const updatedSavedWords = savedWords.filter((w) => w !== word);
    setSavedWords(updatedSavedWords);
    localStorage.setItem("savedWords", JSON.stringify(updatedSavedWords));

    try {
      const response = await axios.post("http://localhost:8080/wordlists", {
        id: localStorage.getItem("id"),
        save_words: JSON.stringify(updatedSavedWords),
      });
      if (response.status === 200) {
        console.log("Word deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen mx-20 md:mx-15 sm:mx-10 p-10 pt-24 shadow-xl">
      <h1 className="text-[2.25rem] font-bold text-center text-teal-500">
        Your Wordlists
      </h1>
      {savedWords.length > 0 ? (
        savedWords.map((word, index) => (
          <div
            className="mx-20 md:mx-15 sm:mx-10 shadow-xl px-10 py-5 rounded-lg relative mt-6"
            key={index}
          >
            <div className="flex justify-between items-center gap-3">
              <h1 className="capitalize font-bold mt-3 text-xl">{word}</h1>
              <i
                className="fas fa-minus text-gray-400 hover:text-red-500 cursor-pointer"
                onClick={() => handleDeleteWord(word)}
              ></i>
            </div>
            <div className="absolute text-white font-bold bg-yellow-300 px-4 py-1 rounded-full -top-3">
              Liked
            </div>
          </div>
        ))
      ) : (
        <div className="flex item-center justify-center ">
          <img className=" items-center" src={Beanote} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default WordLists;
