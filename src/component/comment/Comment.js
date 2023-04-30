import React from "react";
import LoadMore from "./LoadMore";

const Comment = (props) => {
    const comment = props.comment || [];
    return (
        <div>
            {comment.map((comment, index) => {
                return (
                    <div className="flex justify-between gap-3 mx-20 my-6">
                        <div className="flex">
                            <img
                                src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt=""
                                className="rounded-lg w-16 h-16"
                            ></img>
                            <div className="ml-3">
                                <h3 className="font-[800] text-lg">
                                    Do Tran Mai Anh
                                </h3>
                                {
                                    <ul>
                                        <li key={index}>{comment.content}</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <p>Mon, 27 July 2023</p>
                    </div>
                );
            })}
            <LoadMore />
        </div>
    );
};

export default Comment;
