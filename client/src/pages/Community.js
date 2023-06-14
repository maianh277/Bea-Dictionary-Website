import CommunityPost from "./../component/community/CommunityPost";
import CommunitySearch from "../component/community/CommunitySearch";
import CommunityCreatePost from "../component/community/CommunityCreatePost";

const Community = () => {
  return (
    <div className="bg-white min-h-screen mx-[200px] xl:mx-20 lg:mx-[100px] md:mx-[80px] sm:mx-[30px] p-10 pt-24 shadow-xl ">
      <div className="">
        <CommunitySearch />
        <div className="">
          <CommunityCreatePost />
          <CommunityPost />
        </div>
      </div>
    </div>
  );
};

export default Community;
