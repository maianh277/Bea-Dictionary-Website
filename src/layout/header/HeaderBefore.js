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

const HeaderBefore = () => {
    const [search, setSearch] = useState(false);
    const showSearchBar = () => {
        setSearch(!search);
    };
    return (
        <div>
            <div className="header ">
                <nav className=" flex flex-row justify-between bg-clip-padding bg-[#5FB41C] p-1">
                    <Link to="/home" className="w-1/6 h-/4 bg-green-100">
                        LOGO IS HERE
                    </Link>
                    <ul className="flex flex-row gap-12 justify-end m-3 text-white align-middle ">
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                            <Link to="/dictionary">Dictionary</Link>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-language"></i>{" "}
                            <Link to="/translation">Translation</Link>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid fa-book fa-lg mt-2.5"></i>{" "}
                            <Link to="/grammar">Grammar</Link>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-globe"></i>
                            <Link to="community">Community</Link>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-bookmark"></i>
                            <Link to="/wordlists">Word Lists</Link>
                        </li>
                    </ul>
                    {/* Search */}

                    {/* Setting */}

                    {/* Login - Signup */}
                    <ul className="flex flex-row gap-4 mr-3">
                        <li>
                            <i
                                class="fa-solid fa-magnifying-glass fa-lg text-white hover:text-[#FFE600] mt-6"
                                onClick={showSearchBar}
                            ></i>
                        </li>
                        <li>
                            <Link to="/setting">
                                <i class="fa-solid fa-gear fa-lg text-white hover:text-[#FFE600] mt-6"></i>{" "}
                            </Link>
                        </li>
                        <li className="hover:font-semibold mt-3 rounded-xl text-white ">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="hover:font-semibold p-2 my-1 hover:bg-[#FFE600] bg-white rounded-xl text-[#5FB41C]">
                            <Link to="/signup">Sign up</Link>
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
                <Route
                    path="/setting/themesetting"
                    element={<ThemeSetting />}
                />
                <Route path="/login" element={<LogIn />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/grammar" element={<Grammar />} />
                <Route
                    path="/dictionary/enthusiasm"
                    element={<WordDictionary />}
                />
            </Routes>
        </div>
    );
};

export default HeaderBefore;
