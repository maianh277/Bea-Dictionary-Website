import React from "react";

const AnswerBox = ({ translatedText }) => {
  return (
    <div className=" xl:mr-20 xl:ml-5 md:mx-10 my-5">
      <div>
        <div>
          <form>
            <div className="relative">
              <span>To: </span>
              <span className="font-bold">Vietnamese</span>
              <textarea
                type="text"
                className="py-2 pl-8 pr-12 w-full border border-gray-300 h-[200px] rounded-xl"
                placeholder="Translate to..."
                value={translatedText}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnswerBox;
