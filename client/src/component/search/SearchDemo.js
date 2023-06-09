import { useState, useEffect } from "react";
import axios from "axios";
import Word from "../../component/word/Word";
import Beanotelist from "../../assets/notelist.png";

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
      {!searchedWord && (
        <h1 className="text-[2.25rem] font-bold text-center -mt-4 text-teal-500">
          Dictionary
        </h1>
      )}
      <form className="flex my-2 mt-3">
        <label className="mx-2"></label>
        <input
          name="word"
          onChange={(e) => setSearchedWord(e.target.value)}
          value={searchedWord}
          className="px-4 py-3 rounded-lg border border-teal-200 w-full"
          placeholder="Search here..."
        />
        <button
          type="submit"
          className="mx-2 px-3 py-2 bg-teal-400 text-white rounded-lg transition-all duration-200 hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600"
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
      {!searchedWord && (
        <div className="flex item-center justify-center ">
          <img className=" items-center" src={Beanotelist} alt="logo" />
        </div>
      )}
    </div>
  );
};

export default SearchDemo;
