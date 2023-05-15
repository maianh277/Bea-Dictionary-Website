import React from "react";
import yellowline from "../assets/HomePage/yellowline.png";
import Globe from ".././assets/HomePage/Globe.png";
import BackToTopButton from "../component/BackToTopButton";
const Home = () => {
    return (
        <div className="scroll-smooth">
            <div className="relative mt-10">
                <img
                    src={yellowline}
                    alt="Bg"
                    className="w-full h-[600px] ease-out"
                />
                <p className="absolute top-[100px] left-1/2 transform -translate-x-1/2 text-[15px] font-bold text-green-600 font-Lilita">
                    ALL-IN-ONE-DICTIONARY{" "}
                </p>
                <p className="absolute top-[110px] left-1/2 transform -translate-x-1/2 text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 font-Lilita">
                    Bee Dictionary
                </p>
                <p className="absolute top-[220px] left-1/2 transform -translate-x-1/2 text-[19px] w-1/2 text-green-800 font-semibold text-center">
                    Our dictionary is a comprehensive resource for all your
                    language needs. Whether you're a student, a professional, or
                    simply looking to expand your vocabulary.
                </p>
                <form>
                    <div class="absolute top-[320px] left-1/2 transform -translate-x-1/2 w-1/2">
                        <input
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white bg-opacity-70 shadow-lg"
                            placeholder="Search..."
                            required
                        ></input>
                        <button
                            type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <h1 className="text-10 mt-[120px] text-center font-Lilita text-green-600">
                FEATURES{" "}
            </h1>
            <h1 className="text-[40px] text-center font-Lilita">
                FINDING WORDS MORE EASIER
            </h1>
            <div className="flex gap-3 mx-20 mt-5 justify-around">
                <div className="h-[200px] w-[200px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all">
                    <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20">
                        <i class="fa-solid leading-none fa-lg  fa-magnifying-glass mt-2.5 ml-2.5 text-white"></i>
                    </div>
                    <h1 className="text-center font-bold mt-4 mb-0">
                        Dictionary
                    </h1>
                    <p className="text-sm w-2/3 font-semibold text-center m-auto">
                        Easily to type and search.
                    </p>
                </div>
                <div className="h-[200px] w-[200px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all">
                    <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20">
                        <i class="fa-solid leading-none fa-lg  fa-magnifying-glass mt-2.5 ml-2.5 text-white"></i>
                    </div>
                    <h1 className="text-center font-bold mt-4 mb-0">
                        Translation
                    </h1>
                    <p className="text-sm w-2/3 font-semibold text-center m-auto">
                        Easily to type and search.
                    </p>
                </div>
                <div className="h-[200px] w-[200px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all">
                    <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20">
                        <i class="fa-solid leading-none fa-lg  fa-magnifying-glass mt-2.5 ml-2.5 text-white"></i>
                    </div>
                    <h1 className="text-center font-bold mt-4 mb-0">Grammar</h1>
                    <p className="text-sm w-2/3 font-semibold text-center m-auto">
                        Easily to type and search.
                    </p>
                </div>
                <div className="h-[200px] w-[200px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all">
                    <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20">
                        <i class="fa-solid leading-none fa-lg  fa-magnifying-glass mt-2.5 ml-2.5 text-white"></i>
                    </div>
                    <h1 className="text-center font-bold mt-4 mb-0">
                        Community
                    </h1>
                    <p className="text-sm w-2/3 font-semibold text-center m-auto">
                        Easily to type and search.
                    </p>
                </div>
            </div>
            <h1 className="font-bold text-[40px] mt-[100px] mb-5 text-center font-Lilita">
                A DICTIONARY FOR EVERYONE
            </h1>
            <div className="flex mx-20">
                <span className="mx-10">
                    <p className="mb-3">
                        With our easy-to-use search bar, you can find
                        definitions, synonyms, antonyms, and more for any word
                        in our extensive database. You can also browse our
                        curated lists of words and phrases to discover new
                        vocabulary and learn about different topics.
                    </p>
                    <p className="mb-3">
                        We believe that learning a new language should be fun
                        and accessible to everyone, which is why our dictionary
                        is free and available to use on any device. Our team of
                        language experts is constantly updating and adding new
                        words and definitions to ensure that our database is
                        up-to-date and accurate.
                    </p>
                    <p className="mb-3">
                        So whether you're looking to learn a new language,
                        improve your writing skills, or simply explore the
                        English language, we're here to help. Start exploring
                        our dictionary today and discover a world of words!
                    </p>
                </span>
                <img src={Globe} alt="Boy with the globe" className="w-1/3" />
            </div>
            <div>
                <h1 className="text-[30px] mt-[50px] mb-5 text-center font-Lilita z-50">
                    REVIEW FROM USERS
                </h1>
                <div className="flex justify-around z-50">
                    <div className="w-1/3 h-1/3 ml-20 p-5 rounded-lg shadow-lg mb-10">
                        <article>
                            <div class="flex items-center mb-4 space-x-4">
                                <img
                                    class="w-10 h-10 rounded-full"
                                    src="/docs/images/people/profile-picture-5.jpg"
                                    alt=""
                                />
                                <div class="space-y-1 font-medium">
                                    <p>
                                        Jese Leos{" "}
                                        <time
                                            datetime="2014-08-16 19:00"
                                            class="block text-sm text-gray-500"
                                        >
                                            Joined on August 2014
                                        </time>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center mb-1">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>

                                <h3 class="ml-2 text-sm font-semibold text-gray-900">
                                    Thinking to buy another one!
                                </h3>
                            </div>
                            <footer class="mb-5 text-sm text-gray-500">
                                <p>
                                    <time datetime="2017-03-03 19:00">
                                        March 3, 2017
                                    </time>
                                </p>
                            </footer>
                            <p class="mb-2 text-gray-500">
                                This is my third Invicta Pro Diver. They are
                                just fantastic value for money. This one arrived
                                yesterday and the first thing I did was set the
                                time, popped on an identical strap from another
                                Invicta and went in the shower with it to test
                                the waterproofing.... No problems.
                            </p>
                        </article>
                    </div>
                    <div className="w-1/3 h-1/3 mr-20 p-5 rounded-lg shadow-lg mb-10">
                        <article>
                            <div class="flex items-center mb-4 space-x-4">
                                <img
                                    class="w-10 h-10 rounded-full"
                                    src="/docs/images/people/profile-picture-5.jpg"
                                    alt=""
                                />
                                <div class="space-y-1 font-medium">
                                    <p>
                                        Jese Leos{" "}
                                        <time
                                            datetime="2014-08-16 19:00"
                                            class="block text-sm text-gray-500"
                                        >
                                            Joined on August 2014
                                        </time>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-center mb-1">
                                <svg
                                    aria-hidden="true"
                                    class="w-5 h-5 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>First star</title>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>

                                <h3 class="ml-2 text-sm font-semibold text-gray-900">
                                    Thinking to buy another one!
                                </h3>
                            </div>
                            <footer class="mb-5 text-sm text-gray-500">
                                <p>
                                    <time datetime="2017-03-03 19:00">
                                        March 3, 2017
                                    </time>
                                </p>
                            </footer>
                            <p class="mb-2 text-gray-500">
                                This is my third Invicta Pro Diver. They are
                                just fantastic value for money. This one arrived
                                yesterday and the first thing I did was set the
                                time, popped on an identical strap from another
                                Invicta and went in the shower with it to test
                                the waterproofing.... No problems.
                            </p>
                        </article>
                    </div>
                </div>
            </div>

            <BackToTopButton></BackToTopButton>
        </div>
    );
};

export default Home;
