import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Translator from "../../pages/Translator";
import WordLists from "../../pages/WordLists";
import EditProfile from "../../pages/Setting/EditProfile";
import ThemeSetting from "../../pages/Setting/ThemeSetting";
import SignUp from "../../pages/SignUp";

import LogIn from "../../pages/LogIn";
const PagePath = () => {
    return (
        <div>
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

export default PagePath;
