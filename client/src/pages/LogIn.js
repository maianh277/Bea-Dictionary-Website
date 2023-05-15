import React from "react";
import LoginForm from "./../component/form/LoginForm";
import loginBg from "../assets/LoginPage/LoginBg.png";

const LogIn = () => {
    return (
        <div className="flex bg-white">
            <div className="absolute left-1/3 w-full transform">
                <LoginForm></LoginForm>
            </div>
            <img src={loginBg} alt="Dictionary" />
        </div>
    );
};

export default LogIn;
