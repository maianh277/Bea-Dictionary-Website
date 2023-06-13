import React, { useEffect, useState } from "react";
import axios from "axios";

const History = ({ translationHistory }) => {
  const [saveTranslation, setSaveTranslation] = useState([]);

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/getTranslation",
          {
            id: localStorage.getItem("id"),
          }
        );

        if (response.status === 200) {
          setSaveTranslation(response.data.save_translation);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTranslation();
  }, []);

  return (
    <div className="xl:mx-20">
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

      {saveTranslation && saveTranslation.length > 0
        ? saveTranslation.map((entry, index) => (
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
