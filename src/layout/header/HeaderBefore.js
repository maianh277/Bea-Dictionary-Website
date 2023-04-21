import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Search from "../../component/search/Search";
import Translator from "../../pages/Translator";
import WordLists from "../../pages/WordLists";
import EditProfile from "../../pages/Setting/EditProfile";
import ThemeSetting from "../../pages/Setting/ThemeSetting";
import SignUp from "../../pages/SignUp";

import LogIn from "../../pages/LogIn";
const HeaderBefore = () => {
    const [search, setSearch] = useState(false);
    const showSearchBar = () => {
        setSearch(!search);
    };
    return (
        <div>
            <div className="header ">
                <nav className=" flex flex-row justify-between bg-clip-padding bg-[#5FB41C] p-1">
                    <div className="w-1/6 h-/4 bg-green-100">LOGO IS HERE</div>
                    <ul className="flex flex-row gap-12 justify-end m-3 text-white align-middle ">
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                            <a href="/dictionary">Dictionary</a>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-language"></i>{" "}
                            <a href="/translation">Translation</a>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg  fa-book-blank"></i>
                            <a href="/grammar">Grammar</a>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-globe"></i>
                            <a href="community">Community</a>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-bookmark"></i>
                            <a href="/wordlists">Word Lists</a>
                        </li>
                    </ul>
                    {/* Search */}
                    <i
                        class="fa-solid fa-magnifying-glass fa-lg text-white hover:text-[#FFE600] mt-6"
                        onClick={showSearchBar}
                    ></i>
                    {/* Setting */}
                    <a href="/setting">
                        <i class="fa-solid fa-gear fa-lg text-white hover:text-[#FFE600] mt-6"></i>{" "}
                    </a>
                    {/* Login - Signup */}
                    <ul className="flex flex-row gap-4 p-1">
                        <li className="hover:font-semibold p-2 rounded-xl text-white ">
                            <a href="/login">Login</a>
                        </li>
                        <li className="hover:font-semibold p-2 hover:bg-[#FFE600] bg-white rounded-xl text-[#5FB41C]">
                            <a href="/signup">Sign up</a>
                        </li>
                    </ul>
                </nav>
                <div className="ease-in-out delay-150">
                    {search ? <Search></Search> : <></>}
                </div>
            </div>
            <Routes>
                <Route path="/translation" element={<Translator />} />
                <Route path="/wordlists" element={<WordLists />} />
                <Route path="/setting" element={<EditProfile />} />
                <Route path="/themesetting" element={<ThemeSetting />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default HeaderBefore;
