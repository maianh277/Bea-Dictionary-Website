import { Route, Routes } from "react-router-dom";
import Translator from "../pages/Translator";
import WordLists from "../pages/WordLists";
import EditProfile from "../pages/Setting/EditProfile";
import ThemeSetting from "../pages/Setting/ThemeSetting";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import WordDictionary from "../pages/WordDictionary";
import Grammar from "../pages/Grammar";
import Community from "../pages/Community";
import React from "react";
const MyRoutes = () => {
    return (
        <div>
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
                <Route path="/" element={<Home />} />
                <Route path="/grammar" element={<Grammar />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </div>
    );
};

export default MyRoutes;
