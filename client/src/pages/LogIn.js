import React from "react";
import LoginForm from "./../component/form/LoginForm";
import loginBg from "../assets/LoginPage/LoginBg.png";

const LogIn = () => {
    return (
        <div className="flex bg-white min-h-[650px]">
            <div className="absolute  w-full  transform">
                <LoginForm></LoginForm>
            </div>
            <img src={loginBg} alt="Dictionary" />
        </div>
    );
};

export default LogIn;
