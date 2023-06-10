import CommunityPost from "./../component/community/CommunityPost";
import CommunitySearch from "../component/community/CommunitySearch";
import CommunityCreatePost from "../component/community/CommunityCreatePost";

const Community = () => {
    return (
        <div className="bg-white h-[600px] mx-[200px] p-10 pt-24 shadow-xl ">
            <div className="">
                <CommunitySearch />
                <div className="">
                    <CommunityCreatePost/>
                    <CommunityPost />
                </div>
            </div>
        </div>
    );
};

export default Community;
