import React, { useEffect, useState } from "react";
import axios from "axios";
import getDetailUser from "../../api/user";
import { getpost } from "../../api/community";
import {
  IoHeart,
  IoChatboxEllipsesOutline,
  IoShareSocial,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const CommunityPost = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isComment, setIsComment] = useState([]);
  const [user, setUser] = useState({});
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  getDetailUser({
    setUser,
    user,
  });
  useEffect(() => {
    getpost({
      setIsComment,
    });
  }, []);
  const handleShareClick = () => {
    // Xử lý chia sẻ
    // Điều hướng đến trang chia sẻ trên Facebook
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=YOUR_URL",
      "_blank"
    );
  };

  const [showOptions, setShowOptions] = useState(false);
  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState("");
  const [hashtag, setHashtag] = useState("");
  const handleCommentClick = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic khi người dùng nhấn gửi comment
    console.log("Submitted comment:", comment);
    setComment("");
    setShowCommentForm(false);
  };

  return (
    <div>
      {isComment &&
        isComment.map((post, index) => (
          <div className="mt-[10px]" key={index}>
            <div className="h-70 bg-white shadow-lg border-black-50 rounded-[20px] border-2 mx-[100px] lg:mx-[90px] md:mx-[20px] sm:mx-[10px] border-black-50 ">
              <div className="">
                <div className=" gap-3 grid-cols-3 flex justify-start items-center pt-3 ">
                  <div>
                    <Link to="/profile">
                      <img
                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                        className="object-left mr-1 pt-0 ml-10 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px] cursor-pointer"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="ml-1 text-left content-center">
                    <h2 className="text-[15px] font-bold inline-block md:mr-2  sm:mb-0 cursor-pointer">
                      {user.fullname}
                    </h2>
                    <h5 className="text-[12px] -ml-2">#{post.hashtag}</h5>
                  </div>
                  <div className="relative ml-auto mr-5">
                    <button
                      className="text-gray-500 h-5 w-5"
                      onClick={handleOptionsClick}
                    >
                      <IoEllipsisHorizontal className="w-5 h-5 md:w-4 md:h-4 sm:w-3 sm:h-3" />
                    </button>
                    {showOptions && (
                      <div className="  absolute top-[5px] text-[1.1rem] flex flex-col bg-gray-200 font-medium right-[20px] shadow-lg rounded-[8px] w-[160px] overflow-hidden z-10">
                        <ul className="py-1">
                          <li className="px-10 py-1 text-[13px] hover:bg-blue-300">
                            Delete Post
                          </li>
                          <li className="px-10 py-1 text-[13px] hover:bg-blue-300">
                            Save Post
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-left py-1 px-16 md:px-10 sm:px-7">
                <h5 className="text-[25px]">{post.content}</h5>
              </div>
              <div className="py-2 text-[11px]">
                <div className="py-2 flex gap-1 items-center text-[1.5rem] ">
                  <IoHeart className="text-[25px] cursor-pointer ml-10" />
                  <span className="text-gray-400 font-thin"></span>
                  <span className="text-[1rem]">
                    {2 > 0 ? (
                      <span className="text-[13px]">
                        {isLiked ? (
                          <span className="text-[13px]"> Bạn </span>
                        ) : null}
                        {2 > 1 ? (
                          <span className="text-[13px]">
                            {isLiked ? `và ${2 - 1} ` : `${2} `}
                            người khác{" "}
                          </span>
                        ) : isLiked ? (
                          <span></span>
                        ) : (
                          <span className="text-[13px]">1 người khác </span>
                        )}
                        đã thích bài viết này
                      </span>
                    ) : null}
                  </span>
                </div>
                <div className="h-0.5 w-5/5 bg-slate-300 "></div>
                <div className="flex justify-between py-2 px-[100px] md:px-[50px] sm:px-4 md:mx-[50px] sm:mx-[30px]">
                  <div className="cursor-pointer flex gap-2 items-center font-semibold mr-[150px] lg:mr-[120px] md:mr-[90px] sm:mr-[30px]">
                    <button
                      className={`mr-0.5 ${
                        isLiked ? "text-red-500" : "text-gray-400 "
                      }`}
                      onClick={handleLikeClick}
                    >
                      <IoHeart className="w-9 h-9 md:w-6 md:h-6 sm:w-5 sm:h-5" />
                    </button>
                    <span>Like</span>
                  </div>
                  <div
                    className="cursor-pointer flex gap-2 items-center font-semibold mr-[150px] md:mr-[90px] sm:mr-[30px]"
                    onClick={handleCommentClick}
                  >
                    <button className="mr-0.5 text-gray-500">
                      <IoChatboxEllipsesOutline className="w-9 h-9 md:w-6 md:h-6 sm:w-5 sm:h-5" />
                    </button>
                    <span>Comment</span>
                  </div>
                  <div className="cursor-pointer flex gap-2 items-center font-semibold">
                    <button
                      className="text-gray-500"
                      onClick={handleShareClick}
                    >
                      <IoShareSocial className="w-9 h-9  md:w-6 md:h-6 sm:w-5 sm:h-5" />
                    </button>
                    <span>Share</span>
                  </div>
                </div>
              </div>
              {showCommentForm && (
                <form
                  onSubmit={handleCommentSubmit}
                  className=" w-full py-2 px-[40px] md:px-[10px] sm:px-4 "
                >
                  <div className="gap-3 grid-cols-3 flex justify-start items-center pt-3 w-full">
                    <div>
                      <Link to="/profile">
                        <img
                          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                          className="object-left mr-1 pt-0 sm:w-8 sm:h-8 w-10 h-9 object-cover rounded-full border-2 border-green-900 p-[2px] cursor-pointer"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <input
                      type="text"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="Enter your comment..."
                      className="border border-gray-300 rounded-md px-3 py-1.5 ms:py-0.5 w-full outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommunityPost;
