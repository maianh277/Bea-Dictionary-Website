import React from "react";
import Upload from "../../component/setting/Upload";
import Form from "../../component/setting/Form";
import axios from "axios";

const EditProfile = () => {
  return (
    <div className="flex bg-white mx-20 p-10 pt-24 shadow-xl">
      <div className="flex-auto">
        <h1 className="text-[2.25rem] font-bold mx-8 text-left text-green-500">
          Edit Profile
        </h1>
        <hr className="mx-8 my-3"></hr>
        <div className="flex">
          <Upload />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
