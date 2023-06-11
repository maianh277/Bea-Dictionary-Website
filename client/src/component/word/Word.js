import React, { useState, useEffect } from "react";
import Meaning from "./Meaning";
import WordLists from "../../pages/WordLists";
import axios from "axios";

const Word = (props) => {
  const [savedWord, setSavedWord] = useState([]);
  const { word, meanings, phonetics, partOfSpeech } = props;
  const [isSaved, setIsSaved] = useState(false);
  const [wordNotFound, setWordNotFound] = useState(false);

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setIsSaved(savedWords.includes(word));
  }, [word]);

  const handleClick = async () => {
    if (wordNotFound || meanings.length === 0) {
      return;
    }

    setIsSaved(!isSaved);
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    let updatedSavedWords = [];
    if (isSaved) {
      updatedSavedWords = savedWords.filter((w) => w !== word);
      localStorage.setItem("savedWords", JSON.stringify(updatedSavedWords));
    } else {
      updatedSavedWords = [...savedWords, word];
      localStorage.setItem("savedWords", JSON.stringify(updatedSavedWords));
    }
    try {
      const response = await axios.post("http://localhost:8080/wordlists", {
        id: localStorage.getItem("id"),
        save_words: localStorage.getItem("savedWords"),
      });
      if (response.status === 200) {
        console.log("Save words updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setWordNotFound(false); // Reset wordNotFound when a new word is received
  }, [word]);

  if (wordNotFound || meanings.length === 0) {
    return (
      <div className="text-center text-xl font-bold">
        This word is not found.
      </div>
    );
  }

  return (
    <div className="mx-20">
      <div>
        <div className="flex gap-3">
          <h1 className="text-[35px] text-green-600 font-bold capitalize">
            {word}
          </h1>
          <div>
            {localStorage.getItem("id") ? (
              <i
                className={`far fa-heart fa-lg mt-6 transition-all ease-in-out ${
                  isSaved ? "text-red-500" : ""
                }`}
                onClick={handleClick}
              ></i>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex gap-3">
          {phonetics &&
            phonetics.map((item, index) => <p key={index}>{item.text}</p>)}
        </div>
      </div>
      <Meaning meanings={meanings} partOfSpeech={partOfSpeech} />
    </div>
  );
};

export default Word;
