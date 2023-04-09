import React from "react";

const HeaderBefore = () => {
    return (
        <div className="header">
            <nav className=" flex flex-row justify-around bg-clip-padding bg-[#5FB41C] p-2">
                {/* {[
                    ["Dictionary", "/dictionary"],
                    ["Translate", "/translate"],
                    ["Grammar", "/grammar"],
                    ["Community", "/community"],
                ].map(([title, url]) => (
                    <a href={url} className="hover:text-[#FFE600]">
                        {title}
                    </a>
                ))} */}
                <div className="logo">
                    <img src="" alt=""></img>
                </div>
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

                {/* Search Bar */}
                <form className="flex flex-row">
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                        Search
                    </label>
                    <div class="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <i class="fa-solid fa-magnifying-glass fa-lg text-[#FFE600]"></i>
                        </div>
                        <input
                            type="search"
                            className="block w-[300px] h-[90%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            required
                        ></input>
                    </div>
                </form>
                {/* Notification + Setting */}
                <button
                    type="button"
                    class="p-1 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 -m-10"
                >
                    <span class="sr-only">View notifications</span>
                    <i class=" mr-5 fa-solid fa-lg leading-none fa-bell  hover:text-[#FFE600]"></i>
                    <i class="fa-solid fa-lg leading-none fa-gear  hover:text-[#FFE600]"></i>{" "}
                </button>

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
        </div>
    );
};

export default HeaderBefore;
