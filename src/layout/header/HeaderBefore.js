import React, { useState } from "react";
import Search from "../../component/search/Search";
const HeaderBefore = () => {
    const [search, setSearch] = useState(false);
    const showSearchBar = () => {
        setSearch(!search);
    };
    return (
        <div>
            <div className="header">
                <nav className=" flex flex-row justify-between bg-clip-padding bg-[#5FB41C] p-1">
                    <div className="w-1/6 h-/4 bg-green-100">LOGO IS HERE</div>
                    <ul className="flex flex-row gap-12 justify-end m-3 text-white align-middle ">
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                            <h3>Dictionary</h3>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-language"></i>{" "}
                            <h3>Translate</h3>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg  fa-book-blank"></i>
                            <h3>Grammar</h3>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-globe"></i>
                            <h3>Community</h3>
                        </li>
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i class="fa-solid leading-none fa-lg fa-bookmark"></i>
                            <h3>Word Lists</h3>
                        </li>
                    </ul>
                    {/* Search */}
                    <i
                        class="fa-solid fa-magnifying-glass fa-lg text-white hover:text-[#FFE600] mt-6"
                        onClick={showSearchBar}
                    ></i>
                    {/* Setting */}
                    <i class="fa-solid fa-gear fa-lg text-white hover:text-[#FFE600] mt-6"></i>{" "}
                    {/* Login - Signup */}
                    <ul className="flex flex-row gap-4 p-1">
                        <li className="hover:font-semibold p-2 rounded-xl text-white ">
                            <h3>Login</h3>
                        </li>
                        <li className="hover:font-semibold p-2 hover:bg-[#FFE600] bg-white rounded-xl text-[#5FB41C]">
                            <h3>Sign up</h3>
                        </li>
                    </ul>
                </nav>
                <div className="ease-in-out delay-150">
                    {search ? <Search></Search> : <></>}
                </div>
            </div>
        </div>
    );
};

export default HeaderBefore;
