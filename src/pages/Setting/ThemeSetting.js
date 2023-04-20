import React from "react";
import Select from "../../component/setting/Select";
import Menu from "../../component/setting/Menu";
const ThemeSetting = () => {
    return (
        <div className="flex my-5">
            <Menu></Menu>
            <div className="mx-8">
                <h1 className="text-[35px] text-green-600 font-bold">
                    Setting
                </h1>
                <h3 className="-mt-2 font-semibold text-md">Select Theme </h3>
                <p className="my-2">
                    Customizing your workspace, make it more enjoyable and
                    comfortable to work
                </p>
                <Select></Select>
            </div>
        </div>
    );
};

export default ThemeSetting;
