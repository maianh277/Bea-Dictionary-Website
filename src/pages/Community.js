import React from "react";
import CommunityPost from "./../component/community/CommunityPost";
import CommunitySearch from "./../component/community/CommunitySeach";
import CommunitySidebar from "../component/community/CommunitySidebar";
const Community = () => {
    return (
        <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
            <CommunitySearch />
            <CommunityPost />
            <CommunitySidebar />
        </div>
    );
};

export default Community;
