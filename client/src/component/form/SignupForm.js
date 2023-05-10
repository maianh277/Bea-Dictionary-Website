import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignupForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            axios({
                method: "post",
                url: "http://localhost:8080/api/signup",
                data: {
                    fullname: fullname,
                    email: email,
                    password: password,
                },
            });
        } catch (e) {
            alert(e);
        }
        // console.log({
        //     fullname: fullname,
        //     email: email,
        //     password: password,
        // });
    }
    return (
        <div>
            <section className="bg-white pt-16">
                <div className="w-full lg:py-0">
                    <div className="p-5 h-full bg-white md:mt-0 xl:p-0">
                        <div className="space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                                {" "}
                                Welcome to our Website{" "}
                            </h1>
                            <div className="space-y-4 md:space-y-6" action="#">
                                <p className="text-center text-sm font-light text-gray-500">
                                    You already have an account?{" "}
                                    <Link
                                        to="/login"
                                        className="font-medium text-[#FFB800]"
                                    >
                                        Log in
                                    </Link>
                                </p>
                                <div className="flex flex-wrap mb-6 items-center -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                        <Link className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i className="fa-brands fa-facebook fa-lg"></i>
                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Facebook
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <Link className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i className="fa-brands fa-google fa-lg"></i>
                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Apple
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <hr className=" h-[1px] my-2 bg-gray-200 border-0 rounded dark:bg-green-500 "></hr>
                                <form>
                                    <div>
                                        <div className="my-3">
                                            <input
                                                name="fname"
                                                className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block p-2.5 w-full"
                                                placeholder="First Name"
                                                required=""
                                                onChange={(e) => {
                                                    setFullname(e.target.value);
                                                }}
                                            />
                                        </div>

                                        <input
                                            type="email"
                                            name="email"
                                            className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                            placeholder="Your email"
                                            required=""
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                            required=""
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="flex">
                                        <div className="">
                                            <input
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-black dark:text-gray-300">
                                                I agree to receive updates my
                                                subscription, promo emails and
                                                and special offers (you can
                                                unsubscribe at any time)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex ">
                                            <input
                                                id="subscription"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="text-black dark:text-gray-300">
                                                I agree to Terms and Privacy
                                                Policy form Website's name
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="text-white w-full mt-3 h-10 font-[300px] bg-[#008A0E] rounded-lg"
                                        onClick={handleSubmit}
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignupForm;
