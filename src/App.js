import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";

import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";
import CommentBox from "./component/comment/CommentBox";
import Comment from "./component/comment/Comment";
import LoadMore from "./component/comment/LoadMore";
import Word from "./component/word/Word";
import Meaning from "./component/word/Meaning";
import SynoAnno from "./component/word/SynoAnno";
import Image from "./component/word/Image";
function App() {
    return (
        <div className="">
            <HeaderBefore></HeaderBefore>
            <Word></Word>
            <Meaning></Meaning>
            <SynoAnno></SynoAnno>
            <Image></Image>
            <CommentBox></CommentBox>
            <Comment></Comment>
            <LoadMore></LoadMore>
            <Footer></Footer>
        </div>
    );
}

export default App;
