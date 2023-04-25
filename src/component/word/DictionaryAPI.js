import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const DictionaryAPI = () => {
    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([]);

    useEffect(() => {
        if (word !== "") {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then((response) => response.json())
                .then((data) => data[0] && setDefinitions(data[0].meanings))
                .catch((error) => console.log(error));
        }
    }, [word]);
    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <Search />
        </div>
    );
};

export default DictionaryAPI;
