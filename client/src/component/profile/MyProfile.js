import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getDetailUser from "../../api/user";

const MyProfile = () => {
  const [user, setUser] = useState({});

  getDetailUser({
    setUser,
    user,
  });
  // console.log(`../../../../server/${user.avatar.replace(/\\/g, "/")}`);
  return (
    <div>
      <div className="font-serif w-full h-[300px] bg-[#FAF7F0]">
        <h3 className="ps-[150px] text-left text-2xl  py-4 font-bold">
          My profile
        </h3>
        <div className="gap-5 grid-cols-4 flex justify-start items-center">
          {user.avatar ? (
            <img
              src={`../../../../server/${user.avatar.replace(/\\/g, "/")}`}
              className="pr-0 w-[180px] h-[180px] object-cover rounded-full border-2 border-pink-600 p-1 mt-10 ml-20"
              alt="Avatar"
            />
          ) : (
            <div className="w-[180px] h-[180px] bg-gray-200 rounded-full flex items-center justify-center mt-10 ml-20">
              <span className="text-3xl text-gray-500">No Avatar</span>
            </div>
          )}
          <div>
            <h2 className="text-[2rem] inline-block md:mr-2 mt-20 sm:mb-0 font-Lilita">
              {user.fullname}
            </h2>
            <h5 className="text-sm italic">{user.email}</h5>
          </div>
        </div>
      </div>
      <div className="mx-20 my-10">
        <h3 className="font-bold text-xl subpixel-antialiased">Account info</h3>
        <hr className="mb-3" />
        <div className="text-sm">{user.bio}</div>
        <div>
          <table className="text-xs text-left">
            <tbody>
              <tr>
                <td className="px-10 py-3 text-gray-400 font-semibold text-md">
                  Email
                </td>
                <td className="px-3 py-3 text-[15px] font-bold">
                  {user.email}
                </td>
              </tr>
              <tr>
                <td className="px-10 pb-3 text-gray-400 font-semibold text-md">
                  Phone
                </td>
                <td className="px-3 pb-3 text-[15px] font-bold">
                  {user.phone}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-bold text-xl text-left subpixel-antialiased">
          Social accounts
        </h3>
        <hr className="mb-3" />
        <div>
          <table className="text-xs text-left items-center mb-10 mt-3">
            <tr>
              <img
                className="h-5 w-5"
                // src={require("./imageprofile/link.png")}
                alt="Display"
              />
              <td className="text-[15px] font-bold">
                https://course.uit.edu.vn/
              </td>
            </tr>
          </table>
        </div>
        <Link to="/setting">
          <button
            type="submit"
            className="text-white w-[150px] h-10 bg-baseBlue font-bold rounded-lg hover:bg-teal-500 active:bg-teal-700 ease-in-out transition-all"
          >
            EDIT PROFILE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
