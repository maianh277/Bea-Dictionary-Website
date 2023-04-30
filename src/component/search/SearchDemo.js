import { useState, useEffect } from "react";
import axios from "axios";
import Word from "../../component/word/Word";
const SearchDemo = () => {
    const [word, setWord] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [phonetics, setPhonetics] = useState([]);
    const [partOfSpeech, setPartOfSpeech] = useState([]);
    const [definition, setDefinition] = useState([]);
    useEffect(() => {
        if (word) {
            axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then((res) => {
                    setMeanings(res.data[0].meanings);
                    setPhonetics(res.data[0].phonetics);
                    setPartOfSpeech(res.data[0].partOfSpeech);
                    setDefinition(res.data[0].definition);
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
            <form onSubmit={handleSubmit} className="flex my-2">
                <label className="mx-2"></label>
                <input
                    name="word"
                    onChange={handleChange}
                    value={word}
                    className="px-3 py-2 rounded-lg border border-blue-200 w-full"
                ></input>
                <button
                    type="submit"
                    className="mx-2 px-3 py-2 bg-blue-400 text-white rounded-lg"
                >
                    Search
                </button>
            </form>
            {word && (
                <Word
                    word={word}
                    meanings={meanings}
                    phonetics={phonetics}
                    partOfSpeech={partOfSpeech}
                    definition={definition}
                />
            )}
        </div>
    );
};
export default SearchDemo;
