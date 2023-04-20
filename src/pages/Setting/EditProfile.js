import React from "react";
import Upload from "../../component/setting/Upload";
import Form from "../../component/setting/Form";
import Menu from "../../component/setting/Menu";

const EditProfile = () => {
    return (
        <div className="flex mt-5">
            <Menu />
            <div className="flex-auto">
                <h1 className="mx-8 text-[35px] text-green-600 font-bold">
                    Setting
                </h1>
                <h3 className="mx-8 -mt-2 font-semibold text-md">
                    Edit Profile
                </h3>
                <div className="flex">
                    <Upload />
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
