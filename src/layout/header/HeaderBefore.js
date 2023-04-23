import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
// Import page
import Search from "../../component/search/Search";
import Translator from "../../pages/Translator";
import WordLists from "../../pages/WordLists";
import EditProfile from "../../pages/Setting/EditProfile";
import ThemeSetting from "../../pages/Setting/ThemeSetting";
import SignUp from "../../pages/SignUp";
import LogIn from "../../pages/LogIn";
import Home from "../../pages/Home";
import WordDictionary from "../../pages/WordDictionary";
import Grammar from "../../pages/Grammar";
import Dictionary from "../../pages/Dictionary";
import { useEffect } from "react";

const HeaderBefore = () => {
    const [search, setSearch] = useState(false);
    const showSearchBar = () => {
        setSearch(!search);
    };
    const [navBar, setNavBar] = useState(false);
    const changeNavbarWidth = () => {
        if (window.scrollY >= 60) setNavBar(true);
        else setNavBar(false);
    };
    window.addEventListener("scroll", changeNavbarWidth);
    return (
        <div className="">
            <nav
                className={`${
                    navBar ? "" : "py-3"
                } bg-[#5FB41C] text-white fixed transparent top-0 w-full flex flex-row justify-between  p-1 z-50  transition-all duration-500 ease-in-out`}
            >
                <Link to="/home" className="w-1/6 h-/4 bg-green-100">
                    LOGO IS HERE
                </Link>
                <ul className="flex flex-row gap-12 justify-end m-3 align-middle">
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i class="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                        <div className="w-[4rem]">
                            <Link to="/dictionary">Dictionary</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i class="fa-solid leading-none fa-lg fa-language"></i>{" "}
                        <div className="w-[4rem]">
                            <Link to="/translation">Translation</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i class="fa-solid fa-book fa-lg mt-2.5"></i>{" "}
                        <div className="w-[4rem]">
                            <Link to="/grammar">Grammar</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold -ml-3">
                        <i class="fa-solid leading-none fa-lg fa-globe"></i>
                        <div className="w-[4rem]">
                            <Link to="community">Community</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i class="fa-solid leading-none fa-lg fa-bookmark"></i>
                        <div className="w-[5rem]">
                            <Link to="/wordlists">Word Lists</Link>
                        </div>
                    </li>
                </ul>
                {/* Search */}

                {/* Setting */}

                {/* Login - Signup */}
                <ul className="flex flex-row gap-4 mr-3">
                    <li>
                        <i
                            class="fa-solid fa-magnifying-glass fa-lg hover:text-[#FFE600] mt-6"
                            onClick={showSearchBar}
                        ></i>
                    </li>
                    <li>
                        <Link to="/setting">
                            <i class="fa-solid fa-gear fa-lg hover:text-[#FFE600] mt-6"></i>{" "}
                        </Link>
                    </li>
                    <li className="hover:font-semibold mt-3 rounded-xl ">
                        <div className="w-[2.5rem]">
                            <Link to="/login">Login</Link>
                        </div>
                    </li>
                    <li className="hover:font-semibold p-2 my-1 text-center hover:bg-[#FFE600] bg-white rounded-xl text-[#5FB41C]">
                        <div className="w-[4rem]">
                            <Link to="/signup">Sign up</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="ease-in-out delay-150">
                {search ? <Search></Search> : <></>}
            </div>
            <Routes>
                <Route path="/translation" element={<Translator />} />
                <Route path="/wordlists" element={<WordLists />} />
                <Route path="/setting" element={<EditProfile />} />
                <Route
                    path="/setting/themesetting"
                    element={<ThemeSetting />}
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/dictionary" element={<WordDictionary />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/grammar" element={<Grammar />} />
            </Routes>
        </div>
    );
};

export default HeaderBefore;
