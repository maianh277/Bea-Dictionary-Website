import React from "react";
import { IoCalendar } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
import BackToTopButton from "../component/BackToTopButton";

const Policy = () => {
  return (
    <div className="">
      <div className="pt-[120px] min-h-screen bg-white  mx-[150px] md:mx-[70px] sm:mx-[40px] p-10  shadow-xl">
        <h1 className="text-[30px] md:text-[23px] sm:text-[20px] text-teal-600 font-bold  flex items-center justify-center ">
          Privacy Policy for Bea Dictionary
        </h1>
        <div className="flex items-center py-2  justify-center">
          <IoCalendar className="h-5 w-5 " />
          <span className="pl-5 font-bold ">Effective Date: June 13, 2023</span>
        </div>
        <div className="mx-[120px] md:mx-[70px] sm:mx-[40px] my-5 leading-7 text-justify">
          <p>
            At Bea Dictionary, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard the
            information you provide to us through our website.
          </p>
          <p className="mt-4 font-bold">Information Collection and Use:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We may collect personal information such as your name and email
                address when you register an account or contact us through our
                website.
              </li>
              <li>
                We use this information to provide you with access to our
                services, respond to your inquiries, and improve your user
                experience.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Data Security:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We take appropriate measures to protect your personal
                information from unauthorized access, disclosure, alteration, or
                destruction.
              </li>
              <li>
                We use secure technologies and encryption protocols to safeguard
                your data during transmission.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Information Sharing:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We do not sell, trade, or transfer your personal information to
                third parties without your consent, except as required by law or
                for legal purposes.
              </li>
              <li>
                We may share your information with trusted service providers who
                assist us in operating our website or conducting our business,
                but only to the extent necessary for those purposes.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Cookies and Tracking Technologies:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We use cookies and similar tracking technologies to enhance your
                browsing experience and collect information about your usage
                patterns on our website.
              </li>
              <li>
                You can manage your cookie preferences through your browser
                settings.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Third-Party Links:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We use cookies and similar tracking technologies to enhance your
                browsing experience and collect information about your usage
                patterns on our website.
              </li>
              <li>
                You can manage your cookie preferences through your browser
                settings.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Contact Us:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those websites. We recommend reviewing the privacy
                policies of any third-party sites you visit.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Cookies and Tracking Technologies:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the updated policy will be
                effective immediately.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">Cookies and Tracking Technologies:</p>
          <div className="pl-5">
            <ul className="list-disc pl-2">
              <li>
                If you have any questions or concerns regarding our Privacy
                Policy or the handling of your personal information, please
                contact us at{" "}
                <span className="text-blue-500">20521061@gm.uit.edu.vn</span> or{" "}
                <span className="text-blue-500">20521383@gm.uit.edu.vn</span>.
              </li>
            </ul>
          </div>
          <p className="mt-4 font-bold">
            Thank you for reading our privacy policy.
          </p>
        </div>
      </div>
      <BackToTopButton></BackToTopButton>
    </div>
  );
};

export default Policy;
