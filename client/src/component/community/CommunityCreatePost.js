import React, { useState, useEffect } from "react";
import axios from "axios";
import { upload } from "../../api/community";
const CommunityCreatePost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState("");
  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormVisible]);

  const handlePostClick = async () => {
    upload({
      content,
      hashtag,
    });
    window.location.href = "http://localhost:3000/community";
    // Xử lý việc đăng bài
    console.log("Đã đăng bài:", postContent);
    // Reset nội dung bài viết sau khi đăng
    setPostContent("");
  };

  const handleCancelClick = () => {
    setIsFormVisible(false);
  };

  const handleCreatePostClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="mt-[10px]">
      {localStorage.getItem("id") ? (
        <div className="h-20 mx-24 lg:mx-21 md:mx-5 sm:mx-2 bg-white rounded-xl border-2">
          {!isFormVisible && (
            <div className="flex py-5 px-10 items-center">
              <div>
                <img
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                  className="object-left mr-3 pt-0 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-teal-900 p-[2px]"
                  alt="logo"
                />
              </div>
              <div className="w-full" onClick={handleCreatePostClick}>
                <input
                  className="h-10 bg-emerald-50 border-2  hover:border-emerald-400 rounded-xl text-left w-full px-3"
                  placeholder="Create post..."
                  readOnly
                />
              </div>
            </div>
          )}
          {isFormVisible && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
              <form className="w-[500px] h-[400px] inline-block bg-white border-emerald-600 border-2 items-center mx-[50px] rounded-[15px]">
                <div className="container">
                  <div className="font-bold text-[25px] pt-1  item-center flex justify-center my-5">
                    Create Post
                  </div>
                  <fieldset style={{ border: "0px" }}>
                    <div className="panel-post flex order-last">
                      <img
                        src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                        className="object-left mr-5 pt-0 ml-10 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px] cursor-pointer"
                        alt="avt"
                      />
                      <textarea
                        spellCheck="false"
                        id="new-posts-input-area"
                        placeholder=" import content..."
                        className="content-input border-[1px] w-[350px] rounded-lg"
                        style={{
                          overflow: "hidden",
                          overflowWrap: "break-word",
                          resize: "horizontal",
                          height: "75px",
                        }}
                        onChange={(e) => {
                          return setContent(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div className="media-container">
                      <div className="my-3.5">
                        <span className="mx-24">
                          <i className=" "></i> Chọn 1 hoặc nhiều ảnh
                          <small style={{ color: "rgb(153, 153, 153)" }}>
                            (không bắt buộc)
                          </small>{" "}
                        </span>
                        <input
                          type="file"
                          multiple="multiple"
                          accept=".png, .jpg, .jpeg, .gif"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          className="mx-24"
                        />
                      </div>
                    </div>
                    <div
                      id="preview-image-post"
                      className="preview-image"
                    ></div>
                    <div id="pick-hashtag" className="prepare-hashtag">
                      <h4 className="mx-24">
                        Chọn hashtag:{" "}
                        <small style={{ color: "red" }}>* bắt buộc</small>
                      </h4>
                      <select
                        multiple=""
                        id="select2-hashtag"
                        name="states[]"
                        className="w-[350px] h-10 mx-24 border-gray-900 border-[1px] rounded-lg"
                        tabIndex="-1"
                        aria-hidden="true"
                        onChange={(e) => {
                          return setHashtag(e.target.value);
                        }}
                      >
                        <option value="Writing">#Writing</option>
                        <option value="Reading">#Reading</option>
                        <option value="Speaking">#Speaking</option>
                        <option value="Listening">#Listening</option>
                        <option value="SAT">#SAT</option>
                        <option value="GMAT">#GMAT</option>
                        <option value="TOEFL">#TOEFL</option>
                        <option value="TOEIC">#TOEIC</option>
                        <option value="IELTS">#IELTS</option>
                        <option value="Other">#Other</option>
                      </select>
                    </div>
                    <div className="post-bottom-area my-5 flex justify-center transform -translate-x-4">
                      <button
                        type="button"
                        className="btn post-btn mr-3 bg-teal-100 hover:bg-teal-200 transition-all ease-in-out h-8 w-20 rounded-lg"
                        onClick={handleCancelClick}
                      >
                        <span>Hủy bỏ</span>
                      </button>
                      <button
                        type="button"
                        className="btn post-btn text-white bg-teal-700 hover:bg-teal-800 transition-all ease-in-out h-8 w-20 rounded-lg"
                        onClick={handlePostClick}
                      >
                        <span>Đăng bài</span>
                      </button>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommunityCreatePost;
