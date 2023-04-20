import React from "react";

const AnswerBox = () => {
    return (
        <div className="mx-20 my-5 w-1/2">
            <div>
                <div className="flex justify-between">
                    <form action="#" className="m-1 font-bold">
                        <select
                            name="languages"
                            id="lang"
                            className=" text-black rounded-lg p-2 "
                        >
                            <option
                                value="en"
                                className="bg-white text-[#5FB41C]"
                            >
                                English
                            </option>
                            <option
                                value="vn"
                                className="bg-white text-[#5FB41C]"
                            >
                                Vietnamese
                            </option>
                        </select>
                    </form>
                </div>
                <hr className="bg-green-600"></hr>
                <div>
                    <div class="relative">
                        <textarea
                            type="text"
                            class="py-2 pl-8 pr-12 w-full border border-gray-300 h-[200px]"
                            placeholder="Enter text..."
                        ></textarea>
                    </div>
                    <i class="fa-solid fa-copy"></i>{" "}
                    <i class="fa-regular fa-star ml-2"></i>
                </div>
            </div>
        </div>
    );
};

export default AnswerBox;
