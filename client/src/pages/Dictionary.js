import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

const Dictionary = () => {
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
    <div className="bg-white  min-h-screen p-10 shadow-xl py-40 ">
      <div className="">
        <h1 className="mx-20 md:mx-[80px] sm:mx-[30px] -mb-3 text-[35px] text-teal-600 font-bold">
          Dictionary
        </h1>
        <form className="w-3/4 m-auto" onSubmit={handleSubmit}>
          <label
            for="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-black"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Search..."
              required
              onChange={handleChange}
              value={word}
            ></input>
            <Link to={`/word/${word}`}>
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-b from-teal-200 to-green-500"
              >
                Search
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dictionary;
