

const MyProfile = () =>  {
    return (
    <div>
        <div className="font-serif w-full h-[300px] bg-lime-100 ">
            <h3 className="ps-[150px] text-left text-2xl  py-4 font-bold" >My profile</h3>
                    <div className=" gap-5 grid-cols-4 flex justify-start items-center  ">
                        <div>
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className=" pr-0 md:w-[200px] md:h-[200px] object-cover rounded-full border-2 border-pink-600 p-1 ml-80  " alt="logo" />
                        </div>

                        <div className="ml-4 text-left pt-3 content-center">
                            <h2 className="text-3xl inline-block  md:mr-2 mb-2 font-bold sm:mb-0">Quynh Huong</h2>
                            <h5 className="text-sm ">@Quynhhuong150322</h5> 
                        </div>
                    </div>
        </div>
        <div className="font-serif pt-[50px] pl-[250px]">
            <h3 className="font-bold text-xl text-left  subpixel-antialiased">Account info</h3>
                <div className="pl-48 w-[700px] text-sm">Hello, my name is Mai. I am 8 years old. I live in Hai Phong city. I go to Hoa Binh primary school. I like swimming. I don't like playing badminton. That's me. </div>
            <div className="pl-[300px] ">
                <table class="text-xs my-6 text-left ">
                    <tbody >
                    <tr>
                        <td className="px-3 py-3 text-gray-400 font-semibold text-[13px]">Full Name </td>
                        <td class="px-3 py-3 text-black font-bold text-[15px]">Quynh Huong</td>
                    </tr>
                    <tr>
                        <td class="px-3 py-3 text-gray-400 font-semibold text-[13px]">UserName </td>
                        <td class="px-3 py-3 text-[15px] font-bold">Quynhhuong150322</td>
                    </tr>
                    <tr>
                        <td class="px-3 py-3 text-gray-400 font-semibold text-[13px]">Email</td>
                        <td class="px-3 py-3 text-[15px] font-bold">123@123</td>
                    </tr>
                    <tr>
                        <td class="px-3 py-3 text-gray-400 font-semibold text-[13px]">Phone Number</td>
                        <td class="px-3 py-3 text-[15px] font-bold">0123</td>
                    </tr>
                </tbody></table>
                
            </div>
            <h3 className="font-bold text-xl text-left  subpixel-antialiased">Social accounts</h3>
            <div className="pl-[300px]">
                <table className="text-xs my-6 text-left items-center">
                    <tr>
                    <img className='h-5 w-5' src={require('./imageprofile/link.png')} alt='Display'/>
                    <td class="px-6 py-3 text-[15px] font-bold">https://course.uit.edu.vn/</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )
};
export default MyProfile;