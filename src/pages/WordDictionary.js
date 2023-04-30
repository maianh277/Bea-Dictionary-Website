import React from "react";
import { useState } from "react";
import Word from "./../component/word/Word";
import Meaning from "./../component/word/Meaning";
import SynoAnno from "./../component/word/SynoAnno";
import Image from "./../component/word/Image";
import CommentBox from "./../component/comment/CommentBox";
import Comment from "./../component/comment/Comment";
import LoadMore from "./../component/comment/LoadMore";
import Search from "../component/search/Search";
import SearchDemo from "../component/search/SearchDemo";
const WordDictionary = (props) => {
    // const [definitions, setDefinitions] = useState([]);
    return (
        <div className="bg-white mx-20 p-10 h-30 shadow-xl py-28">
            {" "}
            <SearchDemo />
            {/* <Image></Image> */}
            {/* <CommentBox></CommentBox> */}
            {/* <LoadMore></LoadMore> */}
        </div>
    );
};

export default WordDictionary;
