import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Search from "../../component/search/Search";
import jwt from "jwt-decode";
// import Cookies from "js-cookie";
import axios from "axios";
const HeaderBefore = () => {
    const [search, setSearch] = useState(false);
    const [auth, setAuth] = useState(true);
    const [decodedToken, setDecodedToken] = useState(null);
    const navigate = useNavigate();
    const [cookies] = useCookies(["token"]);

    const showSearchBar = () => {
        setSearch(!search);
    };
    // axios.get("http://localhost:8080/login").then((res) => {
    //     try {
    //         if (cookies.token) {
    //             const decoded = jwt(cookies.token);
    //             setDecodedToken(decoded);
    //         }
    //     } catch (res) {
    //         console.log(res);
    //     }
    // });
    useEffect(() => {
        if (cookies.token) {
            const decoded = jwt(cookies.token);
            setDecodedToken(decoded);
        }
    }, [cookies.token]);
    async function handleLogout(e) {
        e.preventDefault();
        try {
            await fetch("http://localhost:8080/logout", {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            setAuth(false);
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }

    const [navBar, setNavBar] = useState(false);
    const changeNavbarWidth = () => {
        if (window.scrollY >= 60) setNavBar(true);
        else setNavBar(false);
    };
    window.addEventListener("scroll", changeNavbarWidth);

    return (
        <div>
            <nav
                className={`${
                    navBar ? "" : "py-3"
                } bg-green-500 text-white fixed transparent top-0 w-full flex flex-row justify-between p-1 z-50 transition-all duration-500 ease-in-out`}
            >
                <Link to="/" className="w-1/6 h-/4 bg-green-100">
                    LOGO IS HERE
                </Link>
                <ul className="flex flex-row gap-12 justify-end m-3 align-middle">
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i className="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                        <div className="w-[4rem]">
                            <Link to="/dictionary">Dictionary</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i className="fa-solid leading-none fa-lg fa-language"></i>{" "}
                        <div className="w-[4rem]">
                            <Link to="/translation">Translation</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                        <i className="fa-solid fa-book fa-lg mt-2.5"></i>{" "}
                        <div className="w-[4rem]">
                            <Link to="/grammar">Grammar</Link>
                        </div>
                    </li>
                    <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold -ml-3">
                        <i className="fa-solid leading-none fa-lg fa-globe"></i>
                        <div className="w-[4rem]">
                            <Link to="/community">Community</Link>
                        </div>
                    </li>
                    {!auth ? (
                        <></>
                    ) : (
                        <li className="flex gap-3 hover:text-[#FFE600] hover:font-semibold">
                            <i className="fa-solid leading-none fa-lg fa-bookmark"></i>
                            <div className="w-[5rem]">
                                <Link to="/wordlists">Word Lists</Link>
                            </div>
                        </li>
                    )}
                </ul>

                {/* Login - Signup */}
                <ul className="flex flex-row gap-4 mr-3">
                    <li>
                        <i
                            class="fa-solid fa-magnifying-glass fa-lg hover:text-[#FFE600] mt-6"
                            onClick={showSearchBar}
                        ></i>
                    </li>

                    {!auth ? (
                        <>
                            <ul className="flex gap-4">
                                <li className="hover:font-semibold mt-3 rounded-xl ">
                                    <div className="w-[2.5rem]">
                                        <Link to="/login">Login</Link>
                                    </div>
                                </li>
                                <li className="hover:font-semibold p-2 my-1 text-center hover:bg-[#FFE600] bg-[#FFE600] rounded-xl">
                                    <div className="w-full">
                                        <Link to="/register">Sign Up</Link>
                                    </div>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <div>
                                <Link to="/profile">
                                    <div>
                                        Welcome{" "}
                                        {decodedToken ? decodedToken.email : ""}
                                        {console.log(
                                            "decoded Token >>>>",
                                            decodedToken
                                        )}
                                    </div>
                                </Link>
                            </div>
                            <li className="hover:font-semibold mt-3 ">
                                <div onClick={handleLogout}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <div className="ease-in-out delay-150">
                {search ? <Search></Search> : <></>}
            </div>
        </div>
    );
};

export default HeaderBefore;
