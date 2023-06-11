import React from "react";

const History = ({ translationHistory }) => {
  return (
    <div className="mx-20">
      {translationHistory && translationHistory.length > 0
        ? translationHistory.map((entry, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-4 my-5 flex flex-row justify-between"
            >
              <div>
                <div className="font-bold text-green-500 text-[18px]">
                  {entry.inputText}
                </div>
                <p className="text-sm">{entry.translatedText}</p>
              </div>
              <p className="text-sm">{entry.date}</p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default History;
