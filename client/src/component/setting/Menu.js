import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div className="w-max">
            <h1 className="font-bold text-[#BABABA] mb-2">SETTING</h1>
            <div className="flex flex-row gap-3 text-[#469F00] font-semibold ml-2 mb-2 text-base">
                <i className="fa-regular fa-user m-1"></i>
                <Link to="/setting">Edit Profile</Link>
            </div>
            <div className="flex flex-row gap-3 text-[#469F00] font-semibold ml-2 text-base">
                <i className="fa-solid fa-brush m-1"></i>
                <Link to="/setting/themesetting">Theme</Link>
            </div>
        </div>
    );
};

export default Menu;
