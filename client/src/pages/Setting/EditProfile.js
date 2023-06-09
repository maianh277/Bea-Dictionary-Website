import React from "react";
import Upload from "../../component/setting/Upload";
import Form from "../../component/setting/Form";
import axios from "axios";

const EditProfile = () => {
  return (
    <div className="flex bg-white min-h-screen mt-[50px]  mx-20 md:mx-10 sm:mx-5 p-10  shadow-xl">
      <div className="flex-auto">
        <h1 className="text-[2.25rem] font-bold mx-8 mt-3 text-left text-teal-500">
          Edit Profile
        </h1>
        <hr className="mx-8 my-1"></hr>
        <div className="flex">
          <Upload />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
