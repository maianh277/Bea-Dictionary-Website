import React from "react";
import { IoSearch } from "react-icons/io5";


const CommunitySearch = () => {
    return (
        <div>
            <div className="h-15 flex justify-between items-center">
                <div className="flex order-last py-4 px-[2px] items-center">
                    
                    <div className="w-[250px] md:w-[230px] sm:w-[205px] mr-[5px]">
                        <input
                            className="h-8 bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-600 rounded-full text-left w-full px-3"
                            placeholder="Search..."
                        />    
                    </div>
                    <div>
                        <IoSearch className="h-6 w-6 text-emerald-700 hover:text-emerald-500"/>
                    </div>
                </div>
                <div className="text-left px-5  text-sm  ml-[10px] item-center">
                    <h1 className="text-[25px] md:text-[23px] ms:text-[20px] text-green-600 font-bold"> Community Bea </h1>
                </div>
            </div>
        </div>
    );
};

export default CommunitySearch;
