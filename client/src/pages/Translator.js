import React, { useEffect, useState } from "react";
import InputBox from "../component/translator/InputBox";
import AnswerBox from "../component/translator/AnswerBox";
import History from "../component/translator/History";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleTranslation = async () => {
    try {
      const response = await axios.post("http://localhost:8080/translate", {
        para: inputText,
      });

      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setShowHistory(true);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    handleTranslation();
  };

  return (
    <div className="bg-white min-h-screen mx-20 p-10 pt-24 shadow-xl">
      <div className="flex">
        <div className="flex-auto">
          <h1 className="mx-20 -mb-3 text-[35px] text-green-600 font-bold">
            Translator
          </h1>
          <div className="flex">
            <InputBox setInputText={setInputText} handleSubmit={handleSubmit} />
            <AnswerBox translatedText={translatedText} />
          </div>
          {isLoading ? null : (
            <History
              inputText={inputText}
              translatedText={translatedText}
              setInputText={setInputText}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;
