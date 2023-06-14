import React, { useRef, useState } from "react";
import axios from "axios";

const Upload = () => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleClearImage = () => {
    setSelectedImage(null);
  };

  const handleUploadButtonClick = async () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    const formData = new FormData();
    formData.append("avatar", selectedImage);

    try {
      await axios.post("http://localhost:8080/upload", formData);
      console.log("Avatar uploaded successfully!");
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="w-max sm:mr-3">
      <h1 className="text-md sm:text[10px] mx-8 sm:mx-3 my-2 sm:my-3 text-gray-500 font-bold">
        Your Profile Picture
      </h1>
      <div
        className="w-[150px] h-[150px] sm:w-[120px] sm:h-[120px] border-gray-500 border-2 mx-8 sm:mx-3 rounded-xl border-dashed bg-gray-100 relative cursor-pointer"
        onClick={handleDivClick}
      >
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-xl"
            />
            <button
              className="absolute top-2 right-2 bg-white border border-gray-400 rounded-full w-6 h-6 flex items-center justify-center text-gray-500"
              onClick={handleClearImage}
            >
              <i className="fas fa-times"></i>
            </button>
          </>
        ) : (
          <>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <i className="fa-regular fa-image fa-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500"></i>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
