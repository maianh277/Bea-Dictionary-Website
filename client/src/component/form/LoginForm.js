import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/login";
            const response = await axios({
                method: "post",
                url: url,
                mode: "cors",
                data: {
                    email: email,
                    password: password,
                },
            });
            if (response.data.errCode === 1) {
                setSuccessMessage(response.data.errMessage);
                localStorage.setItem("user", JSON.stringify(response.data));
                navigate("/");
            } else {
                setErrorMessage(response.data.errMessage);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-1/3 pt-24">
            <section>
                <div className="md:h-screen ">
                    <div className="py-20">
                        <div>
                            <h1 className="text-center text-[2rem] tracking-tight text-gray-900 font-Lilita">
                                {" "}
                                WELCOME TO OUR WEBSITE
                            </h1>

                            <form className="space-y-4 md:space-y-6">
                                <p className="text-center text-sm font-light text-gray-500">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/signup"
                                        className="font-medium text-[#FFB800]"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                                <div class="flex flex-wrap mb-6 items-center -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                        <Link className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i class="fa-brands fa-facebook fa-lg"></i>

                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Facebook
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <Link className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i class="fa-brands fa-google fa-lg"></i>
                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Apple
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <hr className=" h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-green-500 "></hr>
                                <div>
                                    <input
                                        name="email"
                                        className="bg-gray-100 px-5 py-4 border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                        required=""
                                        placeholder="Email"
                                        onChange={(e) => {
                                            return setEmail(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        className="mt-1 px-5 py-4 bg-gray-100 border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                        required=""
                                        placeholder="Password"
                                        onChange={(e) => {
                                            return setPassword(e.target.value);
                                        }}
                                    />
                                    {(errorMessage || successMessage) && (
                                        <div className="text-red-500 text-sm mt-2">
                                            {errorMessage || successMessage}
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex">
                                        <input
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                            required=""
                                        />
                                        <div className="ml-3 text-sm">
                                            <label className="text-black dark:text-gray-300">
                                                Keep me logged in
                                            </label>
                                        </div>
                                    </div>
                                    <Link className=" ml-3 text-sm text-black dark:text-gray-300">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="text-white w-1/3 h-10 font-[300px] bg-green-400 font-bold rounded-lg"
                                        onClick={handleSubmit}
                                    >
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;
