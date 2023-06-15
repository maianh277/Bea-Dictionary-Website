import React from "react";

const InputBox = ({ setInputText, handleSubmit }) => {
  return (
    <div className="xl:ml-20 xl:mr-5 md:mx-10 my-5  m-0">
      <div>
        <div className="relative">
          <span>From: </span>
          <span className="font-bold">English</span>
          <textarea
            type="text"
            className="py-2 pl-8 pr-12 bg-gray-100 w-full h-[200px] rounded-xl"
            placeholder="Enter text..."
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            autocomplete="off"
          ></textarea>

          <button
            className="absolute right-0 top-[30%] rounded-l-full w-10 h-20 bg-teal-200 transition duration-150 ease-out hover:ease-in hover:bg-teal-500 hover:scale-150 hover:shadow-md hover:-translate-x-2.5"
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
