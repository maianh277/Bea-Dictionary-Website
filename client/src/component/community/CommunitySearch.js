import React from "react";
import { IoSearch } from "react-icons/io5";

const CommunitySearch = () => {
  return (
    <div>
      <div className="h-15 flex justify-between items-center">
        <div className="flex order-last py-4 px-[2px] items-center">
          <div className="w-full md:w-[230px] sm:w-[205px] relative">
            <input
              className="h-10 bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-600 rounded-xl text-left w-full px-3 pl-8"
              placeholder="Search..."
            />
            <span className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <IoSearch className="h-6 w-6 text-emerald-700 hover:text-emerald-500" />
            </span>
          </div>
        </div>

        <div className="text-left px-5  text-sm  ml-[10px] item-center">
          <h1 className="sm:text-[1.5rem] text-[2.25rem] font-bold text-center text-teal-500">
            Community Bea
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommunitySearch;
