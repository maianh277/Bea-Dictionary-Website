const CommunitySidebar = () => {
    return (
        <div className="font-serif">
            {/* <div className="w-full h-20 top-0 left-0">
                <img
                    className="h-20 w-50 pt-0 pl-16 "
                    src={require("../../assets/CommunityPage/Name_Community.png")}
                    alt="Display"
                />
            </div> */}
            <div>
                <aside>
                    <div>
                        <ul className="space-y-2 font-serif">
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <img
                                        className="h-7 w-7"
                                        src={require("../../assets/CommunityPage/group.png")}
                                        alt="Display"
                                    />
                                    <span className="ml-4 text-sm font-bold">
                                        Common Community
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <img
                                        className="h-6 w-6"
                                        src={require("../../assets/CommunityPage/add-group.png")}
                                        alt="Display"
                                    />
                                    <span className="ml-5 whitespace-nowrap text-sm font-bold">
                                        My Group
                                    </span>
                                    <img
                                        className="items-center justify-center px-2 ml-10 text-sm"
                                        src={require("../../assets/CommunityPage/caret_down.png")}
                                        alt="Display"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <aside aria-label="Sidebar">
                    <div className="h-48 px-2 py-1 overflow-y-auto">
                        <ul className="space-y-2 font-serif ml-3">
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <span className="w-5 h-5 bg-red-500 rounded-full"></span>
                                    <span className=" ml-4 whitespace-nowrap text-sm font-normal">
                                        IELTS group
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <span className="w-5 h-5 bg-orange-500 rounded-full"></span>
                                    <span className=" ml-4 whitespace-nowrap text-sm font-normal">
                                        TOEIC group
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
                                    <span className=" ml-4 whitespace-nowrap text-sm font-normal">
                                        Speaking group
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#" className="flex items-center p-2">
                                    <span className="w-5 h-5 bg-cyan-500 rounded-full"></span>
                                    <span className=" ml-4 whitespace-nowrap text-sm font-normal">
                                        Writting group
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default CommunitySidebar;
