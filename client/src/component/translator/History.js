import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [translationHistory, setTranslationHistory] = useState([]);

  useEffect(() => {
    savedTranslation();
  }, []);

  const savedTranslation = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/getTranslation",
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

  return (
    <div className="xl:mx-20">
      {translationHistory.map((entry, index) => (
        <div
          key={index}
          className="shadow-lg rounded-lg p-4 my-5 flex flex-row justify-between"
        >
          <div>
            <div className="font-bold text-green-500 text-[18px]">
              {entry.para_before}
            </div>
            <p className="text-sm">{entry.para_after}</p>
          </div>
          <p className="text-sm">{entry.time}</p>
        </div>
      ))}
    </div>
  );
};

export default History;
