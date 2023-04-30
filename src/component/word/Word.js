import React from "react";
import Meaning from "./Meaning";
import SynoAnno from "./SynoAnno";
const Word = (props) => {
    const meanings = props.meanings;
    const word = props.word;
    const phonetics = props.phonetics;
    const partOfSpeech = props.partOfSpeech;
    return (
        <div className="mx-20">
            <div>
                <div className="flex gap-3">
                    <h1 className="text-[35px] text-green-600 font-bold">
                        {props.word}
                    </h1>
                    <i className="far fa-heart fa-lg mt-6"></i>
                </div>
                <div className="flex gap-3">
                    {phonetics &&
                        phonetics.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    <i className="fa-solid fa-volume-high mt-1"></i>
                </div>
            </div>
            <Meaning meanings={meanings} partOfSpeech={partOfSpeech} />
        </div>
    );
};
export default Word;
