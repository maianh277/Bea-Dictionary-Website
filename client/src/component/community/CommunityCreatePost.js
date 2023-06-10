import React, { useState } from "react";

const CommunityCreatePost = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlePostClick = () => {
    // Xử lý việc đăng bài
  };

  const handleCancelClick = () => {
    // Xử lý việc hủy bỏ
    setIsFormVisible(false);
  };

  const handleCreatePostClick = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="mt-[15px]">
      <div className="h-20 bg-white shadow-lg border-black-50 rounded-[20px] border-2">
        {!isFormVisible && (
          <div className="flex py-4 px-5 items-center">
            <div>
              <img
                src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                className="object-left mr-5 pt-0 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px]"
                alt="logo"
              />
            </div>
            <div className="w-full" onClick={handleCreatePostClick}>
              <input
                className="h-8 bg-emerald-50 border-2 border-emerald-600 hover:border-emerald-400 rounded-full text-left w-full px-3"
                placeholder="Create post..."
                readOnly
              />
            </div>
          </div>
        )}
        {isFormVisible && (
          <form className=" w-[600px] h-[400px] inline-block bg-green-300 border-emerald-600 border-2" >
            <div className="font-bold text-[25px] pt-1 pl-[60px] item-center">Tạo bài đăng</div>
            <fieldset style={{ border: "0px" }}>
              <div className="panel-post">
                <img
                  src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                  className="object-left mr-5 pt-0 sm:w-8 sm:h-8 w-10 h-10 object-cover rounded-full border-2 border-green-900 p-[2px]"
                  alt="avt"
                />
                <textarea
                  spellCheck="false"
                  id="new-posts-input-area"
                  placeholder="Nhập nội dung..."
                  className="content-input"
                  style={{ overflow: "hidden", overflowWrap: "break-word", resize: "horizontal", height: "75px",  }}
                ></textarea>
              </div>
          <div className="media-container">
            <div className="btn-group media-options">
              <div type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="btn btn-sm dropdown-toggle">
                <span><i className="zmdi zmdi-image"></i> Kèm ảnh</span>
                <i className="zmdi zmdi-caret-down"></i>
              </div>
              <div className="dropdown-menu">
                <a className="dropdown-item">
                  <i className="zmdi zmdi-image"></i> Thêm ảnh
                </a>
                <a className="dropdown-item">
                  <i className="zmdi zmdi-youtube-play" style={{ color: "red" }}></i> Youtube
                </a>
                <a className="dropdown-item">
                  <i className="zmdi zmdi-facebook-box" style={{ color: "rgb(66, 103, 178)" }}></i> FB Video
                </a>
                <a className="dropdown-item">
                  <i className="bx bxl-tiktok"></i> TikTok
                </a>
              </div>
            </div>
            <div className="media-pick-container">
              <span className="pick-image">
                <i className="zmdi zmdi-camera"></i> Chọn 1 hoặc nhiều ảnh
                <small style={{ color: "rgb(153, 153, 153)" }}>(không bắt buộc)</small>{" "}
                <small id="clear-prv" data-toggle="tooltip" data-placement="top" title="" className="clear" style={{ color: "red" }} data-original-title="xóa bỏ ảnh">
                  <i className="bx bxs-no-entry"></i> clear
                </small>
              </span>
              <input type="file" multiple="multiple" id="postsImagePicked" name="postsImagePicked" accept=".png, .jpg, .jpeg, .gif" data-toggle="tooltip" data-placement="top" title="" data-original-title="Dung lượng ảnh tối đa 3MB, Định dạng cho phép: jpg, png, jpeg, gif" />
            </div>
          </div>
          <div id="preview-image-post" className="preview-image"></div>
          <div id="pick-hashtag" className="prepare-hashtag">
            <h4>Chọn hashtag: <small style={{ color: "red" }}>* bắt buộc</small></h4>
            <select multiple="" id="select2-hashtag" name="states[]" className="select2-hashtag select2-hidden-accessible" style={{ width: "100%", height: "50px", border: "1px solid rgb(238, 238, 238)" }} tabIndex="-1" aria-hidden="true">
              <option value="1306">#Dịch</option>
              <option value="1294">#N4</option>
              <option value="10">#Khác</option>
              <option value="9">#JLPT</option>
              <option value="8">#Book</option>
              <option value="7">#Kaiwa</option>
              <option value="6">#EJU</option>
              <option value="5">#N5</option>
              <option value="3">#N3</option>
              <option value="2">#N2</option>
              <option value="1">#N1</option>
            </select>
              </div>
              <div className="post-bottom-area">
                <button type="button" className="btn post-btn" onClick={handlePostClick}>
                  <span>Đăng bài</span>
                  <span style={{ display: "none" }}>Lưu <img src="https://dungmori.com/assets/img/loading.gif" className="posting-icon" /></span>
                  <span style={{ display: "none" }}>Đã đăng bài <i className="zmdi zmdi-check-circle"></i></span>
                </button>
                <button type="button" className="btn post-btn" onClick={handleCancelClick} style={{ background: "rgb(221, 221, 221)", marginRight: "10px" }}>
                  <span>Hủy bỏ</span>
                </button>
                <span style={{ color: "red", float: "right", margin: "4px 10px 0px 0px", display: "none" }}></span>
              </div>
            </fieldset>
            <button data-fancybox-close="" className="fancybox-close-small" title="Close"></button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommunityCreatePost;


