import React from "react";

const Menu = () => {
    return (
        <div className="w-max">
            <h1 className="font-bold text-[#BABABA] mb-2">SETTING</h1>
            <div className="flex flex-row gap-3 text-[#469F00] font-semibold ml-2 mb-2 text-base">
                <i class="fa-regular fa-user m-1"></i>
                <a href="/setting">Edit Profile</a>
            </div>
            <div className="flex flex-row gap-3 text-[#469F00] font-semibold ml-2 text-base">
                <i class="fa-solid fa-brush m-1"></i>
                <a href="/themesetting">Theme</a>
            </div>
        </div>
    );
};

export default Menu;
