import React from "react";

const Select = () => {
    return (
        <div className="mx-8 my-5 flex flex-row gap-5">
            <div className="relative">
                <div className="w-[250px] h-[200px] rounded-lg bg-gray-200 border border-teal-700"></div>
                <div className="w-[250px] h-[50px] rounded-b-lg bg-white absolute bottom-0 border border-teal-700 text-sm">
                    <input
                        type="radio"
                        className="bg-black border border-black w-5 h-5 rounded-full mx-3 my-3"
                    ></input>
                    System (White Theme)
                </div>
            </div>
            <div className="relative">
                <div className="w-[250px] h-[200px] rounded-lg bg-gray-800 border border-teal-700"></div>
                <div className="w-[250px] h-[50px] rounded-b-lg bg-white absolute bottom-0 border border-teal-700 text-sm">
                    <input
                        type="radio"
                        className="bg-black border border-black w-5 h-5 rounded-full mx-3 my-3"
                    ></input>
                    Dark System
                </div>
            </div>
        </div>
    );
};

export default Select;
