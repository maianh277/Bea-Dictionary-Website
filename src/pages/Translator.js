import React from "react";
import InputBox from "./../component/translator/InputBox";
import History from "./../component/translator/History";
import AnswerBox from "../component/translator/AnswerBox";
const Translator = () => {
    return (
        <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
            <div className="flex">
                <div className="flex-auto">
                    <h1 className="mx-20 -mb-3 text-[35px] text-green-600 font-bold">
                        Translator
                    </h1>
                    <div className="flex">
                        <InputBox></InputBox>
                        <AnswerBox></AnswerBox>
                    </div>
                    {/* <hr className="mx-20 mb-2"></hr> */}
                    <h3 className="mx-20 -mb-5 text-lg text-green-400 italic font-semibold">
                        History
                    </h3>
                    <History></History>
                </div>
            </div>
        </div>
    );
};

export default Translator;
