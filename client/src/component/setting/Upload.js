import React from "react";

const Upload = () => {
    return (
        <div className="w-max">
            <h1 className="text-md mx-8 my-2 text-gray-500 font-bold ">
                Your Profile Picture
            </h1>
            <div className="w-[150px] h-[150px] border-gray-500 border-2 mx-8 rounded-xl border-dashed bg-gray-100 relative">
                <i className="fa-regular fa-image fa-2xl absolute top-1/2 left-1/2 -translate-x-1/2 cursor-pointer text-gray-500"></i>{" "}
            </div>
        </div>
    );
};

export default Upload;
