import React from "react";

const CommentBox = () => {
    return (
        <div>
            <div className="px-20">
                <form
                    action=""
                    className="my-4 w-full p-4 border border-[#5FB41C] rounded-lg"
                >
                    <div className="mb-2">
                        <textarea
                            className="w-full h-20 p-1 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            name="comment"
                            placeholder=""
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex mt-3 gap-3">
                            <i class="fa-sharp fa-solid fa-bold hover:text-[#5FB41C] hover:scale-125"></i>
                            <i class="fa-solid fa-italic hover:text-[#5FB41C] hover:scale-125"></i>
                        </div>
                        <button className="px-3 py-2 text-sm text-white bg-[#5FB41C] rounded ">
                            Comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommentBox;
