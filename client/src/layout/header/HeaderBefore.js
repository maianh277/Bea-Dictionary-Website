import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Search from "../../component/search/Search";
import getDetailUser from "../../api/user";
import logo from "../../assets/Header/Logo_BeaDictionary.png";
const HeaderBefore = () => {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const showSearchBar = () => {
    setSearch(!search);
  };

  getDetailUser({
    setUser,
    user,
  });

  async function handleLogout(e) {
    e.preventDefault();
    setUser({});
    localStorage.removeItem("auth");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/login");
  }

  const [navBar, setNavBar] = useState(false);
  const changeNavbarWidth = () => {
    if (window.scrollY >= 60) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarWidth);

  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen = (open) => !open;
  };

  return (
    <div>
      <nav
        className={`${
          navBar ? "" : "py-3"
        } bg-baseBlue text-white fixed transparent top-0 w-full flex flex-row justify-between p-1 z-50 transition-all duration-500 ease-in-out items-center`}
      >
        <Link to="/">
          <span className="flex gap-2 cursor-pointer m-1 mx-1 font-bold items-center">
            <div className="h-[45px] ps-[45px]">
              <img
                className="h-full w-full  align-middle text-[20px]"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="text-[25px] self-center whitespace-nowrap font-normal text-white font-Lilita">
              Bea Dictionary
            </div>
          </span>
        </Link>
        <ul className="  flex-row gap-3 justify-end m-1 align-middle sm:hidden flex items-center ">
          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-1 md:my-0">
            <i className="fa-solid leading-none fa-lg  fa-magnifying-glass md:hidden sm:hidden "></i>
            <div className="w-[4rem]">
              <Link to="/dictionary">Dictionary</Link>
            </div>
          </li>
          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-1 md:my-0">
            <i className="fa-solid leading-none fa-lg fa-language md:hidden sm:hidden"></i>{" "}
            <div className="w-[4rem]">
              <Link to="/translation">Translation</Link>
            </div>
          </li>

          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-1 md:my-0">
            <i className="fa-solid leading-none fa-lg fa-globe md:hidden sm:hidden"></i>
            <div className="w-[4rem]">
              <Link to="/community">Community</Link>
            </div>
          </li>
          {!localStorage.getItem("id") ? (
            <></>
          ) : (
            <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-1 md:my-0">
              <i className="fa-solid leading-none fa-lg fa-bookmark "></i>
              <div className="w-[5rem]">
                <Link to="/wordlists">Word Lists</Link>
              </div>
            </li>
          )}
        </ul>

        <ul className="flex flex-row gap-4 mr-3 items-center">
          <li>
            <i
              className="fa-solid fa-magnifying-glass fa-lg hover:text-hoverDarkBlue mt-4 ease-in-out transition-all"
              onClick={showSearchBar}
            ></i>
          </li>
          {!localStorage.getItem("id") ? (
            <>
              <ul className="flex gap-4">
                <li className="hover:text-hoverDarkBlue hover:font-bold mt-3 rounded-xl ease-in-out transition-all md:hidden sm:hidden">
                  <div className="w-[2.5rem] items-center z-[-1] ">
                    <Link to="/login">Login</Link>
                  </div>
                </li>
                <li className="p-2 my-1 text-center text-black hover:text-white hover:font-bold hover:bg-hoverDarkBlue bg-white rounded-lg ease-in-out transition-all">
                  <div className="w-[4rem]">
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <>
              <div>
                <Link to="/profile">
                  <div className="font-bold">
                    {localStorage.getItem("id") ? (
                      <div>
                        <h1 className="font-semibold">Welcome,</h1>
                        {user.fullname}
                      </div>
                    ) : (
                      ""
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
          <li>
            <div className=" w-[2.5rem] ml-1 text-sm text-gray-100 rounded-lg  hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-200 items-center gap-x-5 md:hidden lg:hidden xl:hidden 2xl:hidden relative z-10 select-none ">
              {open ? (
                <IoClose
                  className="text-[40px] font-[600] cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <IoMenu
                  className="text-[40px] font-[600] cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              )}
              {open && (
                <div className="bg-baseBlue fixed shadow-2xl gap-x-5  flex-col border-r top-[60px] w-[200px] py-3 rounded-[12px] right-0 text-[20px]">
                  <ul className="">
                    <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-6 md:my-0">
                      <i className="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
                      <div className="w-[4rem]">
                        <Link onClick={handleMenu} to="/dictionary">
                          Dictionary
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-6 md:my-0">
                      <i className="fa-solid leading-none fa-lg fa-language"></i>{" "}
                      <div className="w-[4rem]">
                        <Link onClick={handleMenu} to="/translation">
                          Translation
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-6 md:my-0">
                      <i className="fa-solid fa-book fa-lg mt-2.5"></i>{" "}
                      <div className="w-[4rem]">
                        <Link onClick={handleMenu} to="/grammar">
                          Grammar
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all mx-4 my-6 md:my-0">
                      <i className="fa-solid leading-none fa-lg fa-globe"></i>
                      <div className="w-[4rem]">
                        <Link onClick={handleMenu} to="/community">
                          Community
                        </Link>
                      </div>
                    </li>
                    <li className="hover:text-hoverDarkBlue hover:font-bold flex gap-3  ease-in-out transition-all mx-4 my-6 md:my-0">
                      <div className="w-[2.5rem] items-center z-[-1] ">
                        <Link to="/login">Login</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <div className="ease-in-out delay-150">
        {search ? <Search></Search> : <></>}
      </div>
    </div>
  );
};

export default HeaderBefore;
