import React, { useEffect, useState } from "react";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
import MyProfile from "./component/profile/MyProfile";
import Footer from "./layout/Footer";

function App() {
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        fetch("/api")
            .then((response) => response.json())
            .then((data) => {
                setBackendData(data);
            });
    }, []);
    return (
        <div className="bg-white-100">
            <HeaderBefore></HeaderBefore>
            <Footer></Footer>
            <MyProfile></MyProfile>
        </div>
    );
}
export default App;
