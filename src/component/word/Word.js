import React from "react";

const Word = (props) => {
    const definitions = props.definitions;
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
                    {props.phonetics &&
                        props.phonetics.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    <i className="fa-solid fa-volume-high mt-1"></i>
                </div>
            </div>
        </div>
    );
};

export default Word;
