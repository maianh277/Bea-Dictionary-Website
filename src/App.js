import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";

import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";

import Select from "./component/setting/Select";
import Upload from "./component/setting/Upload";
function App() {
    return (
        <div className="">
            <HeaderBefore></HeaderBefore>
            <Upload></Upload>

            <Footer></Footer>
        </div>
    );
}

export default App;
