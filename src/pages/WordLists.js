import React from "react";
import Menu from "./../component/wordList/Menu";
import Word from "./../component/wordList/Word";
const WordLists = () => {
    return (
        <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
            <div className="flex">
                <Menu></Menu>
                <Word></Word>
            </div>
        </div>
    );
};

export default WordLists;
