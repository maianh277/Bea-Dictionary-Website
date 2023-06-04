import React, { useEffect, useState } from "react";
import InputBox from "./../component/translator/InputBox";
import History from "./../component/translator/History";
import AnswerBox from "../component/translator/AnswerBox";
import axios from "axios";

const Translator = () => {
  const baseURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  const key = process.env.REACT_APP_YANDEX_KEY;

  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const lang = "vi";
    axios
      .get(`${baseURL}?key=${key}&lang=${lang}&text=${inputText}`)
      .then((result) => {
        setTranslatedText(result.data.text[0]);
        result
          .json({
            translatedMessage: result.data.text[0],
            isLoading: false,
          })
          .catch((error) => console.log(error));
      });
  }, []);
  return (
    <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
      <div className="flex">
        <div className="flex-auto">
          <h1 className="mx-20 -mb-3 text-[35px] text-green-600 font-bold">
            Translator
          </h1>
          <div className="flex">
            <InputBox
              inputText={inputText}
              setTranslatedText={setTranslatedText}
            />
            <AnswerBox translatedText={translatedText} />{" "}
          </div>
          <h3 className="mx-20 -mb-5 text-lg text-green-400 italic font-semibold">
            History
          </h3>
          <History />
        </div>
      </div>
    </div>
  );
};

export default Translator;
