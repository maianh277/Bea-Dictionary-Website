import "./App.css";
import React, { useEffect, useState } from "react";
import "./font/Manrope-VariableFont_wght.ttf";
import HeaderBefore from "./layout/header/HeaderBefore";
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
        </div>
    );
}
export default App;
