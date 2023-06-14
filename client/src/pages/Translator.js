import React, { useEffect, useState } from "react";
import InputBox from "../component/translator/InputBox";
import AnswerBox from "../component/translator/AnswerBox";
import History from "../component/translator/History";
import { history } from "../api/translation";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  // const [translationHistory, setTranslationHistory] = useState([]);
  const handleTranslation = async () => {
    try {
      const response = await axios.post("http://localhost:8080/translate", {
        para: inputText,
      });

      const translation = response.data.translation;

      setTranslatedText(translation);
      return translation;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const translation = await handleTranslation();

    setTranslatedText(translation);
    // const newTranslation = {
    //   inputText,
    //   translatedText: translation,
    // };
    await history({
      inputText,
      translatedText: translation,
      // newTranslation,
    });
    // fix
    // setTranslationHistory([newTranslation, ...translationHistory]);
  };

  return (
    <div className="bg-white min-h-screen mx-20 p-10 pt-24 shadow-xl">
      <div className="flex">
        <div className="flex-auto">
          <h1 className="text-[2.25rem] -mb-4 font-bold text-center text-green-500">
            Translator
          </h1>
          <div className="flex sm:flex-col flex-row">
            <div className="w-full">
              <InputBox
                setInputText={setInputText}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="w-full">
              <AnswerBox
                setTranslatedText={setTranslatedText}
                translatedText={translatedText}
              />
            </div>
          </div>
          <History />
        </div>
      </div>
    </div>
  );
};

export default Translator;
