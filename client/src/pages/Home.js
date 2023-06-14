import React from "react";
import Book from "../assets/HomePage/Book.png";
import Globe from ".././assets/Icon.png";
import BackToTopButton from "../component/BackToTopButton";
// import logo from "../assets/Header/Logo_BeaDictionary.png";
const Home = () => {
  return (
    <div className=" ">
    
      <div className="relative mt-10  w-[100%]  h-screen mx-auto flex flex-col sm:h-30%">
        {/* <img src = {logo} alt = "" className = "h-10 w-10"/> */}
        <div classaName="grid grid-cols-4 gap-4">
          <div className="w-1/3 ">
            <img
                src={Book}
                alt="Bg"
                className=" h-[400px] mx-auto"
              />
          </div>
          <div className="">
            <div className="my-[15px] absolute top-[90px] sm:top-[70px] md:top-[80px] sm:w-[100%] sm:text-center left-1/2  transform -translate-x-1/2 text-[17px] sm:text-[15px] md:text-[16px] p-2 font-bold text-green-600 font-Lilita md:flex">
              ALL-IN-ONE-DICTIONARY{" "}
            </div>
            <div className="absolute top-[120px] sm:top-[100px]  md:top-[105px] md:w-[100%] sm:w-[100%] md:text-center sm:text-center my-[15px] left-1/2 sm:left-1/5 transform -translate-x-1/2 text-[70px] sm:text-[60px] md:text-[65px] md:py-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 font-Lilita">
              Bea Dictionary
            </div>
            <div className=" absolute my-[15px] top-[230px] sm:top-[290px] md:top-[230px] lg:top-[220px] sm:w-[80%] max-[414px]:text-center left-1/2 transform -translate-x-1/2 text-[19px] sm:text-[15px] md:text-[17px] w-1/2 text-green-800 font-semibold text-center md:max-w-[90%]">
              Our dictionary is a comprehensive resource for all your language
              needs. Whether you're a student, a professional, or simply looking to
              expand your vocabulary.
            </div>
            <form>
              <div className="absolute top-[330px] 2xl:top-[320px] md:top-[350px] sm:top-[230px] sm:w-[80%] left-1/2 transform -translate-x-1/2 w-1/2  sm:text-center">
                <input
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white bg-opacity-70 shadow-lg"
                  placeholder="Search..."
                  required
                ></input>
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Search
                </button>
              </div>
            </form>
        </div>
        
        </div>
        
      </div>
      <h1 className="text-10 sm:text-11 mt-[0px] text-center font-Lilita text-green-600">
        FEATURES{" "}
      </h1>
      <h1 className="text-[40px] md:text-[35px] sm:text-[30px] text-center font-Lilita pb-10">
        FINDING WORDS MORE EASIER
      </h1>
      <div className=" xl:mx-20 grid grid-cols-4 md:grid-cols-2 sm:mx-0 sm:my-3 sm:grid-cols-1">
        <div className="mx-auto h-[200px] w-[200px] md:h-[300px] md:w-[300px] sm:h-[350px] sm:w-[350px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all my-10">
          <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20 md:h-[50px] md:w-[50px] md:mt-[4rem] md:ml-[8rem] sm:h-[60px] sm:w-[60px] sm:mt-[5rem] sm:ml-[9rem]">
            <i className="fa-solid leading-none fa-lg fa-magnifying-glass mt-2.5 ml-2.5 md:text-[30px] md:mt-[0.7rem] md:ml-[0.7rem] sm:text-[40px] text-white"></i>
          </div>
          <h1 className="text-center font-bold mt-4 mb-0 md:text-[20px] sm:text-[25px]">
            Dictionary
          </h1>
          <p className="text-sm w-2/3 font-semibold text-center m-auto md:text-[15px] sm:text-[17px]">
            Easily to type and search.
          </p>
        </div>
        <div className="mx-auto h-[200px] w-[200px] md:h-[300px] md:w-[300px] sm:h-[350px] sm:w-[350px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all my-10">
          <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20 items-center md:h-[50px] md:w-[50px] md:mt-[4rem] md:ml-[8rem] sm:h-[60px] sm:w-[60px] sm:mt-[5rem] sm:ml-[9rem]">
            <i className="fa-solid leading-none fa-lg fa-language mt-2.5 ml-2 text-white md:text-[25px] md:mt-[0.7rem] md:ml-[0.6rem] sm:text-[35px] sm:ml-[0.5rem]"></i>
          </div>
          <h1 className="text-center font-bold mt-4 mb-0 md:text-[20px] sm:text-[25px] ">
            Translation
          </h1>
          <p className="text-sm w-2/3 font-semibold text-center m-auto md:text-[15px] sm:text-[17px]">
            Easily to type and search.
          </p>
        </div>
        <div className="mx-auto h-[200px] w-[200px] md:h-[300px] md:w-[300px] sm:h-[350px] sm:w-[350px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all my-10">
          <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20 md:h-[50px] md:w-[50px] md:mt-[4rem] md:ml-[8rem] sm:h-[60px] sm:w-[60px] sm:mt-[5rem] sm:ml-[9rem]">
            <i className="fa-solid fa-book fa-lg mt-5 ml-2.5 text-white md:text-[30px] md:mt-[1.5rem] md:ml-[0.7rem] sm:text-[40px] sm:mt-[1.7rem] sm:ml-[0.7rem]"></i>
          </div>
          <h1 className="text-center font-bold mt-4 mb-0 md:text-[20px] sm:text-[25px]">
            Grammar
          </h1>
          <p className="text-sm w-2/3 font-semibold text-center m-auto md:text-[15px] sm:text-[17px]">
            Easily to type and search.
          </p>
        </div>
        <div className="mx-auto h-[200px] w-[200px] md:h-[300px] md:w-[300px] sm:h-[350px] sm:w-[350px] bg-green-100 rounded-lg hover:ease-in-out hover:scale-125 transition-all my-10">
          <div className="h-10 w-10 rounded-md bg-green-300 mt-10 ml-20 md:h-[50px] md:w-[50px] md:mt-[4rem] md:ml-[8rem] sm:h-[60px] sm:w-[60px] sm:mt-[5rem] sm:ml-[9rem]">
            <i className="fa-solid leading-none fa-lg fa-globe mt-2.5 ml-2.5 text-white md:text-[30px] md:mt-[0.7rem] md:ml-[0.7rem] sm:text-[40px] "></i>
          </div>
          <h1 className="text-center font-bold mt-4 mb-0 md:text-[20px] sm:text-[25px]">
            Community
          </h1>
          <p className="text-sm w-2/3 font-semibold text-center m-auto md:text-[15px] sm:text-[17px]">
            Easily to type and search.
          </p>
        </div>
      </div>
      <h1 className="font-bold text-[40px] mt-[100px] mb-5 text-center font-Lilita md:text-[35px] sm:text-[30px]">
        A DICTIONARY FOR EVERYONE
      </h1>
      <div className="flex mx-20 ">
        <span className="mx-10 text-[16px] md:text-[15px] sm:text-[14px] md:mx-5 sm:mx-[10px]">
          <p className="mb-3">
            With our easy-to-use search bar, you can find definitions, synonyms,
            antonyms, and more for any word in our extensive database. You can
            also browse our curated lists of words and phrases to discover new
            vocabulary and learn about different topics.
          </p>
          <p className="mb-3">
            We believe that learning a new language should be fun and accessible
            to everyone, which is why our dictionary is free and available to
            use on any device. Our team of language experts is constantly
            updating and adding new words and definitions to ensure that our
            database is up-to-date and accurate.
          </p>
          <p className="mb-3">
            So whether you're looking to learn a new language, improve your
            writing skills, or simply explore the English language, we're here
            to help. Start exploring our dictionary today and discover a world
            of words!
          </p>
        </span>
        <img
          src={Globe}
          alt="Boy with the globe"
          className="w-1/3 md:shrink-0 md:w-100 "
        />
      </div>
      <div>
        <h1 className="text-[30px] mt-[50px] mb-5 text-center font-Lilita z-50 md:text-[35px] sm:text-[30px]">
          REVIEW FROM USERS
        </h1>
        <div className="flex justify-around z-50">
          <div className="w-1/3 h-1/3 ml-20 p-5 rounded-lg shadow-lg mb-10">
            <article>
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-16 md:w-32 lg:w-48"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
                <div className="space-y-1 font-medium">
                  <p>
                    Jese Leos{" "}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500"
                    >
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <h3 className="ml-2 text-sm font-semibold text-gray-900">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500">
                <p>
                  <time dateTime="2017-03-03 19:00">March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
            </article>
          </div>
          <div className="w-1/3 h-1/3 mr-20 p-5 rounded-lg shadow-lg mb-10">
            <article>
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
                <div className="space-y-1 font-medium">
                  <p>
                    Jese Leos{" "}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500"
                    >
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <h3 className="ml-2 text-sm font-semibold text-gray-900">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500">
                <p>
                  <time dateTime="2017-03-03 19:00">March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
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
