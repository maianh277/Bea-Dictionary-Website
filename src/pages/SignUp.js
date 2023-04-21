import React from "react";
import SignupForm from "./../component/form/SignupForm";
const SignUp = () => {
    return (
        <div className="flex">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="SignUp picture"
                    className="w-full h-full"
                />
            </div>

            <SignupForm></SignupForm>
        </div>
    );
};

export default SignUp;
