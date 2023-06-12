import React from "react";
import SearchDemo from "../component/search/SearchDemo";
const WordDictionary = (props) => {
    return (
        <div className="bg-white mx-20 md:mx-15 sm:mx-10 p-10 h-30 shadow-xl py-28 min-h-screen">
            {" "}
            <SearchDemo />
        </div>
    );
};

export default WordDictionary;
