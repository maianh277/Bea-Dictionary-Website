import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [translationHistory, setTranslationHistory] = useState([]);
  const [savedTranslations, setSavedTranslations] = useState([]);

  useEffect(() => {
    fetchTranslationHistory();
    fetchSavedTranslations();
  }, []);

  const fetchTranslationHistory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/get-translation",
        {
          id: localStorage.getItem("id"),
        }
      );

      if (response.status === 200) {
        setTranslationHistory(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSavedTranslations = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/getTranslation",
        {
          id: localStorage.getItem("id"),
        }
      );

      if (response.status === 200) {
        setSavedTranslations(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="xl:mx-20">
      {translationHistory.map((entry, index) => (
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
      ))}

      {savedTranslations.map((entry, index) => (
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
      ))}
    </div>
  );
};

export default History;
