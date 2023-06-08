import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    signup({
      fullname,
      email,
      password,
      setErrorMessage,
      setSuccessMessage,
      navigate,
    });
  }

  return (
    <div>
      <section className="bg-white pt-16 w-1/3">
        <div className="my-10">
          <h1 className="text-center text-[2rem] tracking-tight text-gray-900 md:text-2xl font-Lilita">
            {" "}
            CREATE NEW ACCOUNT
          </h1>
          <div className="space-y-4 md:space-y-6" action="#">
            <p className="text-center text-sm font-light text-gray-500">
              You already have an account?{" "}
              <Link to="/login" className="font-medium text-[#FFB800]">
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
                    className="bg-gray-100 px-5 py-4 border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
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
                  className="bg-gray-100 px-5 py-4 border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
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
                  className="bg-gray-100 px-5 py-4 border focus:border-teal-500 focus:outline-none  sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {(errorMessage || successMessage) && (
                <div className="text-red-500 text-sm mb-2">
                  {errorMessage || successMessage}
                </div>
              )}
              <div className="flex my-3">
                <div>
                  <input
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-black dark:text-gray-300">
                    I agree to receive updates my subscription, promo emails and
                    and special offers (you can unsubscribe at any time)
                  </label>
                </div>
              </div>
              <div className="flex my-3">
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
                    I agree to Terms and Privacy Policy form Website's name
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-white w-1/3 h-10 bg-green-400 font-bold rounded-lg"
                onClick={handleSubmit}
              >
                SIGNUP
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupForm;
