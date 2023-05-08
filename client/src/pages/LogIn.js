import React from "react";
import LoginForm from "./../component/form/LoginForm";
const LogIn = () => {
    return (
        <div className="flex bg-white">
            <img
                src="https://images.unsplash.com/photo-1461374699149-b941f35a8689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
                alt="Dictionary picutre"
            />
            <LoginForm></LoginForm>
        </div>
    );
};

export default LogIn;
