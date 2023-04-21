import React from "react";

const SignupForm = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="w-full lg:py-0">
                    <div className="p-5 h-full bg-white md:mt-0 xl:p-0">
                        <div className="space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                                {" "}
                                Welcome to our Website{" "}
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">
                                <p className="text-center text-sm font-light text-gray-500">
                                    You already have an account?{" "}
                                    <a
                                        href="/login"
                                        className="font-medium text-[#FFB800]"
                                    >
                                        Log in
                                    </a>
                                </p>
                                <div class="flex flex-wrap mb-6 items-center -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                                        <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i class="fa-brands fa-facebook fa-lg"></i>

                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Facebook
                                            </span>
                                        </a>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <a className="inline-flex w-full py-3 px-4 items-center justify-center rounded-lg border border-teal-500 hover:border-gray-400 transition duration-100">
                                            <i class="fa-brands fa-google fa-lg"></i>
                                            <span className="ml-4 text-sm font-semibold text-gray-500">
                                                Login with Apple
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <hr className=" h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-green-500 "></hr>
                                <div>
                                    <div className="flex justify-center gap-3 flex-col-2 mb-4">
                                        <div>
                                            <label
                                                for="LastName"
                                                className="relative text-sm font-medium text-gray-900 "
                                            >
                                                First Name
                                            </label>
                                            <input
                                                type="lname"
                                                name="lname"
                                                id="lname"
                                                className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block p-2.5"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>

                                        <div>
                                            <label
                                                for="LastName"
                                                className="relative text-sm font-medium text-gray-900 "
                                            >
                                                Last Name
                                            </label>
                                            <input
                                                type="lname"
                                                name="lname"
                                                id="lname"
                                                className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                    </div>

                                    <label
                                        for="Email"
                                        className="block mb-1 text-sm font-medium text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                        placeholder=""
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder=""
                                        className="mt-1 bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                        required=""
                                    />
                                    <div className="mt-4">
                                        <label
                                            for="password"
                                            className="block mb-1 text-sm font-medium text-gray-900"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder=""
                                            className="bg-[#D9FFBB] border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                                            required=""
                                        />
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
                                        <label
                                            for="subscription"
                                            className="text-black dark:text-gray-300"
                                        >
                                            I agree to receive updates my
                                            subscription, promo emails and and
                                            special offers (you can unsubscribe
                                            at any time)
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
                                        <label
                                            for="subscription"
                                            className="text-black dark:text-gray-300"
                                        >
                                            I agree to Terms and Privacy Policy
                                            form Website's name
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="text-white w-full h-10 font-[300px] bg-[#008A0E] rounded-lg"
                                    >
                                        Sign Up
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

export default SignupForm;
