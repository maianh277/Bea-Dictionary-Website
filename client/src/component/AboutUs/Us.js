import React   from "react";
import Bea from "../AboutUs/Bea.png";
import Slider from "react-slick";
import { IoChevronForward,IoChevronBack  } from "react-icons/io5";
import ReactJS from "../AboutUs/Reactjs.png";

const Us = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        centerPadding: 0,
        swipeToSlide: true,
        pauseOnHover: true,
        nextArrow: <IoChevronForward />,
        prevArrow: <IoChevronBack />,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 813,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className="">
            <div className="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% bg-cover">
                <div className="pt-[100px] min-h-screen  mx-[150px] md:mx-[70px] sm:mx-[40px] p-10  ">
                    <div className="flex justify-center ">
                        <div  className="flex items-center  " >
                            <div  className="place-items-center grid grid-rows-2 grid-flow-col">
                                <img
                                className="h-[200px] w-[200px] sm:h-[70px] sm:w-[70px] items-center"
                                src={Bea}
                                alt="logo"
                                />
                                <div className=" self-center text-2xl  dark:text-white whitespace-nowrap text-[70px] sm:text-[60px] md:text-[65px] md:py-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 font-Lilita">
                                Bea Dictionary </div>
                            </div>
                        </div>
                    </div>
            
                    <h1 className="text-[50px] md:text-[33px] sm:text-[20px] text-green-600  font-bold flex items-center justify-center ">Let's task about Bea Dictionary</h1>
                    <div className="mx-[120px] md:mx-[70px] sm:mx-[40px] my-5 leading-8">
                        <p className="text-center text-[18px] md:text-[15px] sm:text-[14px]">Bea Dictionary is a comprehensive online dictionary aimed at providing users with a rich collection of vocabulary, definitions, and related information. Our mission is to equip individuals with knowledge and resources to enhance their language skills and improve communication abilities.</p>
                        <p className="text-center my-[50px] text-[18px] md:text-[15px] sm:text-[14px]">We recognize the importance of a reliable and user-friendly dictionary that caters to the needs of different user groups, including students, professionals, and language enthusiasts. With that goal in mind, we have developed Bea Dictionary as an optimized platform for all your language requirements.</p>
                    </div>
                    <div className="flex items-center justify-center ">
                        <button type="button" class="h-[50px] w-[150px] bg-gradient-to-r from-cyan-400 to-violet-400 hover:from-rose-500 hover:to-orange-300 rounded-xl font-bold text-white">Contact Bea</button>
                    </div>
                    
                </div> 
            </div>
            <div className="  bg-white  mx-[110px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] p-10  ">
                <div className="mx-[110px] lg:mx-[100px md:mx-[50px] sm:mx-[20px] my-5 leading-8 text-justify">
                    <div className="mt-[100px]">
                        <h2 className=" text-[40px] md:text-[30px] sm:text-[28px] text-green-600 font-bold  flex items-center justify-center py-5">The Bea advantage</h2>
                        <div className="my-[25px] mx-[70px]">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="pr-10 text-[60px] md:text-[33px] sm:text-[20px] font-bold text-cyan-500 ">1</h1>
                                <span className="text-[18px] md:text-[15px] sm:text-[14px]">Extensive Word Database: Bea Dictionary houses a vast collection of words, ranging from everyday vocabulary to specialized terms in various fields. Our database is constantly updated to ensure accuracy and relevance.</span>
                            </div>
                            
                        </div>
                        <div className="my-[25px] mx-[70px]">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="pr-10 text-[60px] md:text-[33px] sm:text-[20px] font-bold text-cyan-500">2</h1>
                                <span className="text-[18px] md:text-[15px] sm:text-[14px]">Clear and Concise Definitions: We strive to provide clear and concise definitions that are easy to understand. Our team of language experts ensures the accuracy and clarity of the information provided.</span>
                            </div>
                            
                        </div>
                        <div className="my-[25px] mx-[70px]">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="pr-10 text-[60px] md:text-[33px] sm:text-[20px] font-bold text-cyan-500">3</h1>
                                <span className="text-[18px] md:text-[15px] sm:text-[14px]">Synonyms, Antonyms, and Examples: In addition to definitions, Bea Dictionary offers synonyms, antonyms, and usage examples for a comprehensive understanding of word meanings and context.</span>
                            </div>
                            
                        </div>
                        <div className="my-[25px] mx-[70px]">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="pr-10 text-[60px] md:text-[33px] sm:text-[20px] font-bold text-cyan-500">4</h1>
                                <span className="text-[18px] md:text-[15px] sm:text-[14px]">User-Friendly Interface: We believe in simplicity and usability. Our website features an intuitive interface that allows users to easily navigate and access the desired information.</span>
                            </div>
                            
                        </div>
                        <div className="my-[25px] mx-[70px]">
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="pr-10 text-[60px] md:text-[33px] sm:text-[20px] font-bold text-cyan-500">5</h1>
                                <span className="text-[18px] md:text-[15px] sm:text-[14px]">Cross-Platform Accessibility: Bea Dictionary is designed to be accessible across different platforms, including desktop, mobile devices, and tablets, ensuring that you can conveniently access our resources anytime, anywhere.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="  bg-white  mx-[150px] md:mx-[70px] sm:mx-[40px] p-10  ">
                <div  className="flex items-center  " >
                    <div  className="place-items-center grid grid-rows-1 grid-flow-col mx-5">
                        <IoChevronBack className="h-10 w-10 mr-4"/>
                        <img
                        className="h-[200px] w-[200px] sm:h-[70px] sm:w-[70px] items-center mr-10"
                        src={ReactJS}
                        alt="logo"
                        />
                        <div className=" leading-8 text-justify ">
                            <p className="text-black  my-[50px] text-[18px] md:text-[13px] sm:text-[14px]">ReactJS is a popular JavaScript library used for building user interfaces for web applications. It is maintained by Facebook and a vibrant community of developers. ReactJS follows a component-based approach, where UIs are divided into reusable components that can be composed together to create complex user interfaces. </p>
                        </div>
                        <IoChevronForward className="h-10 w-10 ml-4"/>
                    </div>
                </div>
                <div className=" text-[18px] md:text-[15px] sm:text-[14px] text-green-600 font-bold  flex items-center justify-center py-5">Thank you for choosing Bea Dictionary as your language companion. Let's explore the world of words together!</div>
            </div>
        </div>
    );
};

export default Us;