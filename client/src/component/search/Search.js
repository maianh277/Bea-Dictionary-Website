import React from "react";
import { useState, useEffect } from "react";
import Meaning from "../word/Meaning";
import Word from "../word/Word";
import { Route, Routes, Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState(false);
  const changeSearchPosition = () => {
    if (window.scrollY >= 60) setSearch(true);
    else setSearch(false);
  };
  window.addEventListener("scroll", changeSearchPosition);

  return (
    <div
      className={`${
        search ? "top-14" : "top-16"
      } bg-teal-100  p-6 flex flex-row justify-around fixed w-full transition-all duration-500 ease-in-out z-50`}
    >
      {/* Select language */}
      <form action="#" className="m-2">
        <select
          name="languages"
          id="lang"
          className="bg-teal-500 text-white rounded-lg p-2 "
        >
          <option value="en-en" className="bg-white text-[#5FB41C]">
            English-English
          </option>
          <option value="en-vn" className="bg-white text-[#5FB41C]">
            English-Vietnamese
          </option>
        </select>
      </form>
      {/* Search section */}
      <form className="w-full">
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
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Search..."
            required
            // onChange={handleChange}
            // value={word}
          ></input>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Search
          </button>
        </div>
      </form>
      {/* <Meaning definitions={definitions} /> */}
      {/* <Word word={word} /> */}
    </div>
  );
};

export default Search;
