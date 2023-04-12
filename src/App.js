import "./App.css";
import "./font/Manrope-VariableFont_wght.ttf";

import HeaderBefore from "./component/header/HeaderBefore";
import Footer from "./component/Footer";
import LoginForm from "./component/LoginForm";

function App() {
    return (
        <div>
            <HeaderBefore></HeaderBefore>
            <LoginForm></LoginForm>
            <Footer></Footer>
        </div>
    );
}

export default App;
