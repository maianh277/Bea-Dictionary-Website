const MyProfile = () => {
    return (
        <div>
            <div className="font-serif w-full h-[300px] bg-[#F0FFE3]">
                <h3 className="ps-[150px] text-left text-2xl  py-4 font-bold">
                    My profile
                </h3>
                <div className=" gap-5 grid-cols-4 flex justify-start items-center">
                    <div>
                        <img
                            src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
                            className=" pr-0 md:w-[180px] md:h-[180px] object-cover rounded-full border-2 border-pink-600 p-1 mt-10 ml-20"
                            alt="logo"
                        />
                    </div>

                    <div>
                        <h2 className="text-[2rem] inline-block md:mr-2 mt-20 sm:mb-0 font-Lilita">
                            hi
                            {/* {
                                JSON.parse(localStorage.getItem("user")).data
                                    .fullname
                            } */}
                        </h2>
                        <h5 className="text-sm italic">@Quynhhuong150322</h5>
                    </div>
                </div>
            </div>
            <div className="mx-20 my-10">
                <h3 className="font-bold text-xl subpixel-antialiased">
                    Account info
                </h3>
                <hr className="mb-3"></hr>
                <div className="text-sm">
                    Hello, my name is Mai. I am 8 years old. I live in Hai Phong
                    city. I go to Hoa Binh primary school. I like swimming. I
                    don't like playing badminton. That's me.
                </div>
                <div>
                    <table className="text-xs text-left ">
                        <tbody>
                            <tr>
                                <td className="px-10 py-3 text-gray-400 font-semibold text-md">
                                    Email
                                </td>
                                <td className="px-3 py-3 text-[15px] font-bold">
                                    hi
                                    {/* {
                                        JSON.parse(localStorage.getItem("user"))
                                            .data.email
                                    } */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 className="font-bold text-xl text-left  subpixel-antialiased">
                    Social accounts
                </h3>
                <hr className="mb-3"></hr>
                <div>
                    <table className="text-xs text-left items-center mb-10 mt-3">
                        <tr>
                            <img
                                className="h-5 w-5"
                                // src={require("./imageprofile/link.png")}
                                alt="Display"
                            />
                            <td className="text-[15px] font-bold">
                                https://course.uit.edu.vn/
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default MyProfile;
