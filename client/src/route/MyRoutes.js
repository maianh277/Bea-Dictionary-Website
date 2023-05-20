import { Route, Routes } from "react-router-dom";
import Translator from "../pages/Translator";
import WordLists from "../pages/WordLists";
import EditProfile from "../pages/Setting/EditProfile";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import WordDictionary from "../pages/WordDictionary";
import Grammar from "../pages/Grammar";
import Community from "../pages/Community";
import React from "react";
import MyProfile from "../component/profile/MyProfile";
const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/profile" element={<MyProfile />} />
                <Route path="/translation" element={<Translator />} />
                <Route path="/wordlists" element={<WordLists />} />
                <Route path="/setting" element={<EditProfile />} />
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
