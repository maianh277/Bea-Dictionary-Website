import CommunityPost from "./../component/community/CommunityPost";
import CommunitySearch from "../component/community/CommunitySearch";
import CommunitySidebar from "../component/community/CommunitySidebar";

const Community = () => {
    return (
        <div className="bg-white mx-20 p-10 pt-24 shadow-xl">
            <div className="flex">
                <div className="w-1/5">
                    <CommunitySidebar />
                </div>
                <div className="w-4/5">
                    <CommunitySearch />
                    <CommunityPost />
                </div>
            </div>
        </div>
    );
};

export default Community;
