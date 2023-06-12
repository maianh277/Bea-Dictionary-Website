
import React from "react";
import Post from "../Post/Post";

function CommunityPost(props) {
    return (
        <div className=" mx-auto grid grid-cols-1 gap-y-12 ">
            <Post />
        </div>
    );
}

export default CommunityPost;