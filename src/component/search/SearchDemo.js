import React, { useState, useEffect } from "react";
import axios from "axios";
import Word from "../word/Word";

const SearchDemo = () => {
    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([]);

    useEffect(() => {
        if (word) {
            axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then((res) => {
                    setDefinitions(res.data[0].meanings);
                })
                .catch((err) => console.log(err));
        }
    }, [word]);

    const handleChange = (e) => {
        setWord(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWord(e.target.word.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search Here:</label>
                <input name="word" onChange={handleChange} value={word}></input>
                <button type="submit">Search</button>
            </form>
            {word && <Word word={word} definitions={definitions} />}
        </div>
    );
};

export default SearchDemo;
