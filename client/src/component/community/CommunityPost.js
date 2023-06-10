const CommunityPost = () => {
    return (
        <div>
            <div className="w-full">
                <div className="right-14  h-60 bg-white shadow-lg border-black-50 rounded-[20px] border-2 mx-[100px]">
                    <div className="">
                        <div className=" gap-2 grid-cols-4 flex justify-start items-center pt-3 ">
                            <div>
                                <img
                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                    className="ml-10 pr-0 w-12 h-12 object-cover rounded-full border-2 border-pink-600 p-1   "
                                    alt="logo"
                                />
                            </div>
                            <div className="ml-1 text-left content-center">
                                <h2 className="text-[15px] font-bold inline-block md:mr-2 mb-2 sm:mb-0">
                                    Quynh Huong
                                </h2>
                                <h5 className="text-[12px]">#IELTS speaking</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 text-left py-3 px-16">
                        <h3 className="text-lg text-gray-900 text-[13px] font-medium title-font mb-0 whitespace-nowrap truncate">
                            Work
                        </h3>
                        <h5 className="text-[12px]">
                            1. Is there any other work you would like to do in
                            he future?{" "}
                        </h5>
                        <h5 className="text-[12px]">
                            2. How do you get your job?
                        </h5>
                    </div>
                    <div className="py-2 text-[11px]">
                        <div className="h-0.5 w-5/5 bg-slate-300 "></div>
                        <div className=" gap-10 grid-cols-4 flex pt-5 items-center justify-center">
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/like.png")}
                                    alt="Display"
                                />
                                <p className="">Like</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/comment.png")}
                                    alt="Display"
                                />
                                <p className="">Comment</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/share.png")}
                                    alt="Display"
                                />
                                <p className="">Share</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/save.png")}
                                    alt="Display"
                                />
                                <p className="">Save</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className="ml-80 w-3/5 right-14 top-[110px] h-[503px] bg-white shadow-lg border-black-50 rounded-[20px] border-2 relative ">
                    <div className="">
                        <div className=" gap-2 grid-cols-4 flex justify-start items-center pt-3 ">
                            <div>
                                <img
                                    src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                                    className="ml-10 pr-0 md:w-12 md:h-12 object-cover rounded-full border-2 border-pink-600 p-1   "
                                    alt="logo"
                                />
                            </div>
                            <div className="ml-1 text-left  content-center">
                                <h2 className="text-[15px] font-bold inline-block md:mr-2 mb-2 sm:mb-0">
                                    Quynh Huong
                                </h2>
                                <h5 className="text-[12px]">#IELTS speaking</h5>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 text-left pt-6 pl-16">
                        <div>
                            <h3 className="text-lg text-gray-900 text-[13px] font-medium title-font mb-0 whitespace-nowrap truncate">
                                Work
                            </h3>
                            <h5 className="text-[12px]">
                                1. Is there any other work you would like to do
                                in he future?{" "}
                            </h5>
                            <h5 className="text-[12px]">
                                2. How do you get your job?
                            </h5>
                        </div>
                        <div className=" gap-2 grid-cols-4 flex pt-3 items-center justify-center">
                            <img
                                className="h-[250px] w-[250px]"
                                src={require("./../../assets/CommunityPage/1.png")}
                                alt="Display"
                            />
                            <img
                                className="h-[250px] w-[250px]"
                                src={require("./../../assets/CommunityPage/2.png")}
                                alt="Display"
                            />
                        </div>
                    </div>
                    <div className="py-2 text-[11px]">
                        <div className="h-0.5 w-5/5 bg-slate-300 "></div>
                        <div className=" gap-20 grid-cols-4 flex pt-5 pl-12 items-center justify-center">
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/like.png")}
                                    alt="Display"
                                />
                                <p className="">Like</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/comment.png")}
                                    alt="Display"
                                />
                                <p className="">Comment</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/share.png")}
                                    alt="Display"
                                />
                                <p className="">Share</p>
                            </div>
                            <div className="gap-2 grid-cols-4 flex items-center">
                                <img
                                    className="h-5 w-5"
                                    src={require("../../assets/CommunityPage/save.png")}
                                    alt="Display"
                                />
                                <p className="">Save</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default CommunityPost;
