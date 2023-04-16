import React from "react";

const InputBox = () => {
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
                    <i className="fa-solid fa-arrow-right-arrow-left mt-5 mr-2"></i>
                </div>
                <hr className="bg-green-600"></hr>
                <div>
                    <div class="relative">
                        <textarea
                            type="text"
                            class="py-2 pl-8 pr-12 bg-gray-100 w-full h-[200px]"
                            placeholder="Enter text..."
                        ></textarea>
                        <button class="absolute right-0 top-[30%] rounded-l-full w-10 h-20 bg-green-200 transition duration-150 ease-out hover:ease-in hover:bg-green-500 hover:scale-150 hover:shadow-md hover:-translate-x-2.5">
                            <i class="fa-solid fa-arrow-right -right-1 bottom-0 text-white relative  "></i>
                        </button>
                    </div>

                    <i class="fa-solid fa-volume-high"></i>
                </div>
            </div>
        </div>
    );
};

export default InputBox;
