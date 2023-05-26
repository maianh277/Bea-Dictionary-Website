import React, { useState } from "react";
import Meaning from "./Meaning";
import WordLists from "../../pages/WordLists";

const Word = (props) => {
  const [savedWord, setSavedWord] = useState([]);

  const { word, meanings, phonetics, partOfSpeech } = props;
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    const savedWords = JSON.parse(localStorage.getItem("savedWords")) || [];

    if (isSaved) {
      const updatedSavedWords = savedWords.filter((w) => w !== word);
      localStorage.setItem("savedWords", JSON.stringify(updatedSavedWords));
    } else {
      const updatedSavedWords = [...savedWords, word];
      localStorage.setItem("savedWords", JSON.stringify(updatedSavedWords));
    }
  };
  console.log(savedWord);

  return (
    <div className="mx-20">
      <div>
        <div className="flex gap-3">
          <h1 className="text-[35px] text-green-600 font-bold capitalize">
            {word}
          </h1>
          <div>
            {" "}
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
          <i className="fa-solid fa-volume-high mt-1"></i>
        </div>
      </div>
      <Meaning meanings={meanings} partOfSpeech={partOfSpeech} />
      <WordLists savedWord={savedWord} />
    </div>
  );
};

export default Word;
