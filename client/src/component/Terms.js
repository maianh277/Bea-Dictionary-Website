import React   from "react";
import { IoCalendar } from "react-icons/io5";
import { Link, } from "react-router-dom"
import BackToTopButton from "../component/BackToTopButton";

const Terms = () => {
    return (
        <div className="">
            <div className="pt-[120px] min-h-screen bg-white  mx-[150px] md:mx-[70px] sm:mx-[40px] p-10  shadow-xl">
                <h1 className="text-[30px] md:text-[23px] sm:text-[20px] text-green-600 font-bold  flex items-center justify-center ">Terms and Conditions for Bea Dictionary</h1>
                <div className="flex items-center py-2  justify-center">
                    <IoCalendar className="h-5 w-5 "/>
                    <span className="pl-5 font-bold ">
                        Effective Date: June 13, 2023
                    </span>
                </div>
                <div className="mx-[120px] md:mx-[70px] sm:mx-[40px] my-5 leading-7 text-justify">
                    <p >These Terms & Conditions govern your use of the <span className="font-bold text-blue-500 ">Bea Dictionary</span> website (the "Website"). By accessing or using the Website, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using the Website.</p>
                    <p className="mt-4 font-bold">Use of the Website</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>The content provided on the Website is for informational purposes only. It should not be considered as professional advice or a substitute for professional services.</li>
                            <li>You must be at least 18 years old or have the consent of a legal guardian to use the Website.</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                        </ul>
                    </div>
                    <p className="mt-4 font-bold">Intellectual Property</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>TThe Website and its contents, including but not limited to text, images, graphics, logos, and software, are protected by copyright and other intellectual property laws.</li>
                            <li>You may not reproduce, modify, distribute, or exploit any part of the Website without prior written permission from us.</li>
                        </ul>
                    </div>
                    <p className="mt-4 font-bold">User Submissions</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>By submitting any content to the Website, you grant us a worldwide, royalty-free, perpetual, irrevocable, and non-exclusive license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content.</li>
                            <li> You are solely responsible for the content you submit and must ensure that it does not infringe any third-party rights or violate any applicable laws.</li>
                        </ul>
                    </div>
                    <p className="mt-4 font-bold">Limitation of Liability</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>The Website is provided on an "as is" basis, and we make no representations or warranties of any kind, express or implied, regarding its accuracy, availability, or reliability.</li>
                            <li> We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of the Website or any errors or omissions in its content.</li>
                            
                        </ul>
                    </div>
                    <p className="mt-4 font-bold">Third-Party Websites</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>The Website may contain links to third-party websites or services. We have no control over the content or practices of these websites and disclaim any responsibility for them.</li>
                            <li>Your use of any third-party websites is subject to their respective terms and conditions and privacy policies.</li>
                        </ul>
                    </div>
                    <p className="mt-4 font-bold">Modification of Terms</p>
                    <div className="pl-5">
                        <ul className="list-disc pl-2">
                            <li>We reserve the right to modify these Terms & Conditions at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after the modifications constitutes your acceptance of the revised terms.</li>
                        </ul>
                    </div>
                    <p className="mt-4">Please review our <Link to ="/Policy"><span className="font-bold text-blue-500 hover:text-green-500">Privacy Policy</span></Link>, which explains how we collect, use, and protect your personal information.</p>
                    <p>If you have any questions or concerns regarding these <span className="font-bold text-blue-500">Terms & Conditions</span>, please contact us.</p>
                </div>
            </div>
            <BackToTopButton></BackToTopButton>
        </div>
    );
};

export default Terms;