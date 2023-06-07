import React, { useState } from "react";
import InputBox from "./../component/translator/InputBox";
import History from "./../component/translator/History";
import AnswerBox from "../component/translator/AnswerBox";
import axios from "axios";

const Translator = () => {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");

    const translateText = async () => {
        const options = {
            method: "GET",
            url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
            headers: {
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            },
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white  p-10 pt-24 shadow-xl">
            <div className="flex">
                <div className="flex-auto">
                    <h1 className="mx-20 -mb-3 text-[35px] text-green-600 font-bold">
                        Translator
                    </h1>
                    <div className="lg:flex xl:flex md:flex 2xl:flex">
                        <InputBox
                            inputText={inputText}
                            setInputText={setInputText} // pass setInputText as a prop
                            setTranslatedText={setTranslatedText}
                            translateText={translateText}
                        />
                        <AnswerBox translatedText={translatedText} />{" "}
                        {/* pass translatedText as a prop */}
                    </div>
                    {/* <hr className="mx-20 mb-2"></hr> */}
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
