import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../component/search/Search";
import getDetailUser from "../../api/user";
const HeaderBefore = () => {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const showSearchBar = () => {
    setSearch(!search);
  };
  useEffect(() => {
    getDetailUser({
      setUser,
    });
  }, []);
  async function handleLogout(e) {
    e.preventDefault();
    setUser({});
    localStorage.removeItem("auth");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("savedWords");
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

  return (
    <div>
      <nav
        className={`${
          navBar ? "" : "py-3"
        } bg-baseBlue text-white fixed transparent top-0 w-full flex flex-row justify-between p-1 z-50 transition-all duration-500 ease-in-out`}
      >
        <Link to="/" className="w-1/6 h-/4 bg-green-100">
          LOGO IS HERE
        </Link>
        <ul className="flex flex-row gap-12 justify-end m-3 align-middle">
          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all">
            <i className="fa-solid leading-none fa-lg  fa-magnifying-glass"></i>
            <div className="w-[4rem]">
              <Link to="/dictionary">Dictionary</Link>
            </div>
          </li>
          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all">
            <i className="fa-solid leading-none fa-lg fa-language"></i>{" "}
            <div className="w-[4rem]">
              <Link to="/translation">Translation</Link>
            </div>
          </li>
          {/* <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all">
            <i className="fa-solid fa-book fa-lg mt-2.5"></i>{" "}
            <div className="w-[4rem]">
              <Link to="/grammar">Grammar</Link>
            </div>
          </li> */}
          <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold -ml-3 ease-in-out transition-all">
            <i className="fa-solid leading-none fa-lg fa-globe"></i>
            <div className="w-[4rem]">
              <Link to="/community">Community</Link>
            </div>
          </li>
          {!localStorage.getItem("id") ? (
            <></>
          ) : (
            <li className="flex gap-3 hover:text-hoverDarkBlue hover:font-semibold ease-in-out transition-all">
              <i className="fa-solid leading-none fa-lg fa-bookmark"></i>
              <div className="w-[5rem]">
                <Link to="/wordlists">Word Lists</Link>
              </div>
            </li>
          )}
        </ul>

        <ul className="flex flex-row gap-4 mr-3">
          <li>
            <i
              className="fa-solid fa-magnifying-glass fa-lg hover:text-hoverDarkBlue mt-6 ease-in-out transition-all"
              onClick={showSearchBar}
            ></i>
          </li>
          {!localStorage.getItem("id") ? (
            //TODO: chỉnh để ko phải refresh
            <>
              <ul className="flex gap-4">
                <li className="hover:text-hoverDarkBlue hover:font-bold mt-3 rounded-xl ease-in-out transition-all">
                  <div className="w-[2.5rem]">
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
                  <h1>Welcome,</h1>
                  <div className="font-bold">
                    {user.fullname ? `${user.fullname}` : ""}
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
