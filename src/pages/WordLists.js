import React from "react";
import Menu from "./../component/wordList/Menu";
import Word from "./../component/wordList/Word";
const WordLists = () => {
    return (
        <div className="flex mt-5">
            <Menu></Menu>
            <Word></Word>
        </div>
    );
};

export default WordLists;
