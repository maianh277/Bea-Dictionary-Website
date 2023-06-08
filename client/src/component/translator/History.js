import React from "react";

const History = ({ inputText, translatedText }) => {
  const currentDate = new Date().toLocaleString();

  return (
    <div className="mx-20 shadow-lg rounded-lg p-4 my-5 flex flex-row justify-between ">
      <div className="">
        <div className="font-bold text-green-500 text-[18px]">{inputText}</div>
        <p className="text-sm">{translatedText}</p>
      </div>
      <p className="text-sm">{currentDate}</p>
    </div>
  );
};

export default History;
