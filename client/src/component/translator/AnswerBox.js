import React from "react";

const AnswerBox = (props) => {
    const { translatedText } = props;
    return (
        <div className="mx-20 my-5 w-1/2">
            <div>
                <div className="flex jusstify-between">
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
                    <form>
                        <div className="relative">
                            <textarea
                                type="text"
                                className="py-2 pl-8 pr-12 w-full border border-gray-300 h-[200px]"
                                placeholder="Enter text..."
                                value={translatedText}
                            ></textarea>
                        </div>
                    </form>
                    <i className="fa-solid fa-copy"></i>{" "}
                    <i className="fa-regular fa-star ml-2"></i>
                </div>
            </div>
        </div>
    );
};

export default AnswerBox;
