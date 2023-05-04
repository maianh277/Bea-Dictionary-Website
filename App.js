import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
import MyProfile from "./component/profile/MyProfile";
import Footer from "./layout/Footer";

function App() {
    return (
        <div className="bg-white-100">
            <HeaderBefore></HeaderBefore>
            <Footer></Footer>
            <MyProfile></MyProfile>
        </div>
    );
}
export default App;
