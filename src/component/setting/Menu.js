import React from "react";

const Menu = () => {
    return (
        <div className="mt-3 mx-5 w-max">
            <h1 className="font-bold text-[#BABABA]">PROFILE</h1>
            <div className="flex flex-row gap-2 text-[#469F00] font-semibold ml-4 text-base">
                <i class="fa-regular fa-user m-1"></i>
                <h2>Edit Profile</h2>
            </div>
            <div className="flex flex-row gap-2 text-[#469F00] font-semibold ml-4 text-base">
                <i class="fa-solid fa-brush m-1"></i>
                <h2>Theme</h2>
            </div>
        </div>
    );
};

export default Menu;
