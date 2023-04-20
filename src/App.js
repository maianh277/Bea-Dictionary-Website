import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
import Footer from "./layout/Footer";
import WordLists from "./pages/WordLists";
function App() {
    return (
        <div className="">
            <HeaderBefore></HeaderBefore>
            <WordLists></WordLists>
            <Footer></Footer>
        </div>
    );
}

export default App;
