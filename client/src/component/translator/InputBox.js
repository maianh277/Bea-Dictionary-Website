import React from "react";

const InputBox = ({ setInputText, handleSubmit }) => {
  return (
    <div className="mx-20 my-5">
      <div>
        <div className="relative">
          <span>From: </span>
          <span className="font-bold">English</span>
          <textarea
            type="text"
            className="py-2 pl-8 pr-12 bg-gray-100 w-full h-[200px]"
            placeholder="Enter text..."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></textarea>

          <button
            className="absolute right-0 top-[30%] rounded-l-full w-10 h-20 bg-green-200 transition duration-150 ease-out hover:ease-in hover:bg-green-500 hover:scale-150 hover:shadow-md hover:-translate-x-2.5"
            type="submit"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-arrow-right -right-1 bottom-0 text-white relative"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
