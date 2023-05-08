import React from "react";
import { useState } from "react";

const BackToTopButton = () => {
    const [scrollUp, setScrollUp] = useState(false);
    const BackToTop = () => {
        if (window.scrollY > 200) setScrollUp(true);
        else setScrollUp(false);
        console.log(window.scrollY);
    };
    window.addEventListener("scroll", BackToTop);
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div
            className={`${
                scrollUp
                    ? "fixed bg-blue-300 p-3 text-center text-white rounded-full w-[3rem] h-[3rem] right-[62px] bottom-[75px] shadow-sm transition-opacity duration-500 ease-in-out opacity-100"
                    : "opacity-0"
            }`}
            onClick={handleBackToTop}
        >
            <i class="fa-solid fa-arrow-up fa-xl"></i>
        </div>
    );
};

export default BackToTopButton;
