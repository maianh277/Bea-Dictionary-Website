import React from "react";

const AnswerBox = ({ translatedText }) => {
  return (
    <div className="mx-20 my-5 w-1/2">
      <div>
        <div>
          <form>
            <div className="relative">
              <span>To: </span>
              <span className="font-bold">Vietnamese</span>
              <textarea
                type="text"
                className="py-2 pl-8 pr-12 w-full border border-gray-300 h-[200px]"
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
