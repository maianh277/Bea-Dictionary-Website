import { useState, useEffect } from "react";
import axios from "axios";
import Word from "../../component/word/Word";

const SearchDemo = () => {
  const [searchedWord, setSearchedWord] = useState("");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState([]);

  useEffect(() => {
    if (word) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => {
          if (res.data.length === 0) {
            setMeanings([]);
            setPhonetics([]);
            setPartOfSpeech([]);
          } else {
            setMeanings(res.data[0].meanings);
            setPhonetics(res.data[0].phonetics);
            setPartOfSpeech(res.data[0].partOfSpeech);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [word]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(searchedWord);
  };

  return (
    <div>
      <form className="flex my-2">
        <label className="mx-2"></label>
        <input
          name="word"
          onChange={(e) => setSearchedWord(e.target.value)}
          value={searchedWord}
          className="px-3 py-2 rounded-lg border border-blue-200 w-full"
        />
        <button
          type="submit"
          className="mx-2 px-3 py-2 bg-blue-400 text-white rounded-lg"
          onClick={handleSubmit}
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
        />
      )}
    </div>
  );
};

export default SearchDemo;
