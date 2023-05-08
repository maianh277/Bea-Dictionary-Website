import React from "react";
import { useState } from "react";
import Comment from "./Comment";

const CommentBox = () => {
    const [content, setContent] = useState("");
    const [comment, setComment] = useState([]);
    const handleChange = (e) => {
        setContent(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let newComment = { content: content };
        setComment([...comment, newComment]);
        setContent("");
    };
    return (
        <div>
            <div className="px-20">
                <form
                    className="my-4 w-full p-4 border border-[#5FB41C] rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-2">
                        <textarea
                            className="w-full h-20 p-1 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            name="comment"
                            value={content}
                            placeholder=""
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex mt-3 gap-3">
                            <i className="fa-sharp fa-solid fa-bold hover:text-[#5FB41C] hover:scale-125"></i>
                            <i className="fa-solid fa-italic hover:text-[#5FB41C] hover:scale-125"></i>
                        </div>
                        <button
                            type="submit"
                            className="px-3 py-2 text-sm text-white bg-[#5FB41C] rounded"
                        >
                            Comment
                        </button>
                    </div>
                </form>
            </div>
            <Comment comment={comment} />
        </div>
    );
};

export default CommentBox;
