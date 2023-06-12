import React from "react";
import Bealogo from "../assets/Bea.png";

const Footer = () => {
  return (
    <footer className="bg-baseDarkMint">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex gap-[200px] lg:gap-[150px] md:gap-[100px] sm:gap-[50px]">
          <div className="mb-6 ml-10 sm:ml-5">
            <div href="#" className="items-center grid grid-rows-2 grid-flow-col " >
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
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Services
              </h2>
              <ul className="text-baseBlue font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Word
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Translation
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Grammar
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-baseBlue font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-10 w-[500px] lg:ml-3 md:ml-3 sm:ml-0" >
              <ul>
                <li>
                  <i className="fa-brands fa-facebook fa-2xl sm:fa-2x mr-5 md:mr-3 text-white"></i>
                  <i className="fa-brands fa-instagram fa-2xl mr-5 md:mr-3 text-white"></i>
                  <i className="fa-brands fa-github fa-2xl mr-5 md:mr-3 text-white"></i>
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
