import React from "react";
import Meaning from "./Meaning";
const Word = (props) => {
  const { word, meanings, phonetics, partOfSpeech } = props;
  return (
    <div className="mx-20">
      <div>
        <div className="flex gap-3">
          <h1 className="text-[35px] text-green-600 font-bold capitalize">
            {word}
          </h1>
          <i className="far fa-heart fa-lg mt-6"></i>
        </div>
        <div className="flex gap-3">
          {phonetics &&
            phonetics.map((item) => <p key={item.text}>{item.text}</p>)}
          <i className="fa-solid fa-volume-high mt-1"></i>
        </div>
      </div>
      <Meaning meanings={meanings} partOfSpeech={partOfSpeech} />
    </div>
  );
};
export default Word;
