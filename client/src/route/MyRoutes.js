import { Route, Routes } from "react-router-dom";
import Translator from "../pages/Translator";
import WordLists from "../pages/WordLists";
import EditProfile from "../pages/Setting/EditProfile";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import WordDictionary from "../pages/WordDictionary";
import Policy from "../component/Policy";
import Us from "../component/AboutUs/Us"
import Community from "../pages/Community";
import React from "react";
import MyProfile from "../component/profile/MyProfile";
import Terms from "../component/Terms"

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
        <Route path="/community" element={<Community />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/aboutus" element={<Us />} />
        <Route path="/Terms&Conditions" element={<Terms />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
