import React from "react";
import Bealogo from "../assets/Bea.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-baseDarkMint bottom-0 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-around gap-[200px] lg:gap-[150px] md:gap-[100px] sm:gap-[50px]">
          <div className="mb-6 ml-10 sm:ml-5">
            <div
              href="#"
              className="items-center grid grid-rows-2 grid-flow-col "
            >
              <div className=" self-center text-2xl font-semibold  dark:text-white text-[25px] sm:text-[20px] whitespace-nowrap text-white font-Lilita">
                Bea Dictionary
              </div>
              <div>
                <img
                  className="h-[100px] w-[100px] sm:h-[70px] sm:w-[70px] align-middle text-[20px]"
                  src={Bealogo}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-4 gap-8 md:gap-4 sm:gap-4 sm:grid-cols-3 ">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Overview
                </h2>
                <ul className="text-baseBlue font-medium">
                  <li className="mb-4 ">
                    <Link to="/aboutus">
                      <a href="#" className="hover:underline">
                        About us
                      </a>
                    </Link>
                  </li>
                  {/* <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Services
                </h2>
                <ul className="text-baseBlue font-medium">
                  <li className="mb-4">
                    <Link to="/dictionary">
                      <a className="hover:underline">Dictionary</a>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/translation">
                      <a className="hover:underline">Translation</a>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/community">
                      <a className="hover:underline">Community</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-baseBlue font-medium">
                  <li className="mb-4">
                    <Link to="/Policy">
                      <a className="hover:underline">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Terms&Conditions">
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="ml-10 w-full xl:ml-3 lg:ml-3 md:ml-3 sm:ml-0">
                <ul className="flex items-center">
                  <li className="mr-3">
                    <i className="fa-brands fa-facebook fa-2xl sm:fa-2x text-white"></i>
                  </li>
                  {/* <li className="mr-3">
      <i className="fa-brands fa-instagram fa-lg sm:fa-2x text-white"></i>
    </li> */}
                  <li>
                    <a href="https://github.com/maianh277/Bea-Dictionary-Website">
                      <i className="fa-brands fa-github fa-2xl sm:fa-2x text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
