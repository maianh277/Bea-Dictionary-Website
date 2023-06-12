import SignupForm from "../component/form/SignupForm";
import loginBg from "../assets/LoginPage/LoginBg.png";

const SignUp = () => {
    return (
        <div className="flex bg-white min-h-[750px]">
            <div className="absolute  w-full transform">
                <SignupForm></SignupForm>
            </div>
            <img src={loginBg} alt="Dictionary" />
        </div>
    );
};

export default SignUp;
