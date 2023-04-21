import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";
import WordLists from "./pages/WordLists";
import Translator from "./../src/pages/Translator";
import EditProfile from "./../src/pages/Setting/EditProfile";
import ThemeSetting from "./../src/pages/Setting/ThemeSetting";
import WordDictionary from "./../src/pages/WordDictionary";
function App() {
    return (
        <div className="bg-gray-100">
            <HeaderBefore></HeaderBefore>
            <div></div>
            <Footer></Footer>
        </div>
    );
}

export default App;
