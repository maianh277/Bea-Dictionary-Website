import React from "react";

const Form = () => {
    return (
        <div className="w-full h-min">
            <section className="bg-white">
                <div className="flex justify-between md:h-screen lg:py-0">
                    <div className=" bg-white md:mt-0 xl:p-0 w-full">
                        <div className="space-y-4 md:space-y-6 sm:p-8">
                            {/* <hr className=" h-[1px]  bg-gray-200 border-0 rounded dark:bg-green-500 "></hr> */}
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div className=" grid grid-cols-2 gap-3">
                                    {/* Fullname */}
                                    <div className="mb-1">
                                        <label
                                            for="fullname"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Fullname
                                        </label>
                                        <input
                                            id="fullname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                    </div>
                                    {/* Email */}
                                    <div>
                                        <label
                                            for="email"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="abc@gmail.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Username */}
                                    <div className="mb-1">
                                        <label
                                            for="username"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Username
                                        </label>
                                        <input
                                            id="username"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                    </div>
                                    {/* Phone */}
                                    <div>
                                        <label
                                            for="phone"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="number"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Bio */}
                                <div className="mb-1">
                                    <label
                                        for="bio"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        id="bio"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Write something about yourself..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="text-white w-1/6 h-10 font-[300px] bg-[#5FB41C] rounded-lg"
                                    >
                                        Update Profile
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

export default Form;
