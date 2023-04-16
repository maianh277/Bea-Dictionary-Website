import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";

import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";
import InputBox from "./component/translator/InputBox";
import History from "./component/translator/History";

function App() {
    return (
        <div className="">
            <HeaderBefore></HeaderBefore>
            <div className="flex justify-around ">
                <InputBox></InputBox>
                <InputBox></InputBox>
            </div>

            <History></History>
            <Footer></Footer>
        </div>
    );
}

export default App;
