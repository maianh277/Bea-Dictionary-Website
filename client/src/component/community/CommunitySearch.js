import React from "react";

const CommunitySearch = () => {
    return (
        <div>
            <div className="h-20 bg-white shadow-lg border-black-50 rounded-[20px] border-2">
                <div className="gap-5 flex py-4 px-5 items-center">
                    <div>
                        <img
                            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                            className="object-left pt-0 md:w-10 md:h-10 object-cover rounded-full border-2 border-pink-600 p-1"
                            alt="logo"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            className="h-8 bg-lime-100 border-2 border-lime-600 rounded-full text-left w-full px-3"
                            placeholder="Search Community"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunitySearch;
