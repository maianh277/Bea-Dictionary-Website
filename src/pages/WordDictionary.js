import React from "react";
import Word from "./../component/word/Word";
import Meaning from "./../component/word/Meaning";
import SynoAnno from "./../component/word/SynoAnno";
import Image from "./../component/word/Image";
import CommentBox from "./../component/comment/CommentBox";
import Comment from "./../component/comment/Comment";
import LoadMore from "./../component/comment/LoadMore";
const WordDictionary = () => {
    return (
        <div className="bg-white mx-20 p-10 shadow-xl py-40">
            <Word></Word>
            <Meaning></Meaning>
            <SynoAnno></SynoAnno>
            <Image></Image>
            <CommentBox></CommentBox>
            <Comment></Comment>
            <LoadMore></LoadMore>
        </div>
    );
};

export default WordDictionary;
