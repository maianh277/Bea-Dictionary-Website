import React, { useEffect, useState } from "react";
import axios from "axios";

const History = ({ setTranslationHistory, translationHistory }) => {
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
        const translationHistory = response.data;

        if (translationHistory.length > 0) {
          const sortedPosts = translationHistory.sort(
            (a, b) => new Date(b.time) - new Date(a.time)
          );

          setTranslationHistory(sortedPosts);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="xl:mx-20">
      {translationHistory &&
        translationHistory.map((trans, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-4 my-5 flex flex-row justify-between"
          >
            <div>
              <div className="font-bold text-green-500 text-[18px]">
                {trans.para_before}
              </div>
              <p className="text-sm">{trans.para_after}</p>
            </div>
            <p className="text-sm">{trans.time}</p>
          </div>
        ))}
    </div>
  );
};

export default History;
