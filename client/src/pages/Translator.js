import React, { useEffect, useState } from "react";
import InputBox from "../component/translator/InputBox";
import AnswerBox from "../component/translator/AnswerBox";
import axios from "axios";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslation = async () => {
    try {
      const response = await axios.post("http://localhost:8080/translate", {
        para: inputText,
      });

      setTranslatedText(response.data.translation);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleTranslation();
  }, [inputText]);

  return (
    <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
      <div className="flex">
        <div className="flex-auto">
          <h1 className="mx-20 -mb-3 text-[35px] text-green-600 font-bold">
            Translator
          </h1>
          <div className="flex">
            <InputBox setInputText={setInputText} />
            <AnswerBox translatedText={translatedText} />
          </div>
          {/* <h3 className="mx-20 -mb-5 text-lg text-green-400 italic font-semibold">
            History
          </h3> */}
          {/* <History /> */}
        </div>
      </div>
    </div>
  );
};

export default Translator;
