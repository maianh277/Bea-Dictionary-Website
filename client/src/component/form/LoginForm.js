import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    login({
      email,
      password,
      setSuccessMessage,
      navigate,
      setErrorMessage,
    });
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="w-2/3 md:w-3/4 sm:w-1/2 pt-24 mx-auto">
      <section>
        <div className="py-10">
          <div className="max-w-[500px] mx-auto">
            <h1 className="text-center text-[38px] md:text-[35px] sm:text-[30px] tracking-tight text-gray-900 font-Lilita mb-8">
              WELCOME TO OUR WEBSITE
            </h1>

            <form className="space-y-4 md:space-y-6">
              <p className="text-center text-sm font-light text-gray-500">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-[#FFB800]">
                  Sign up
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
              <hr className="h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-green-500"></hr>
              <div>
                <input
                  name="email"
                  className="bg-gray-100 px-5 py-4 border focus:border-teal-500 focus:outline-none sm:text-sm rounded-lg block w-full p-2.5"
                  required=""
                  placeholder="Email"
                  onChange={handleChangeEmail}
                />
              </div>
              <div class="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  class="mt-1 px-5 py-4 bg-gray-100 border focus:border-teal-500 focus:outline-none sm:text-sm rounded-lg block w-full p-2.5 pr-12"
                  required=""
                  placeholder="Password"
                  onChange={(e) => {
                    return setPassword(e.target.value);
                  }}
                />
                {(errorMessage || successMessage) && (
                  <div class="text-red-500 text-sm mt-2">
                    {errorMessage || successMessage}
                  </div>
                )}
                <button
                  type="button"
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                    errorMessage ? "-mt-3" : ""
                  }`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i class="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i class="fa-solid fa-eye"></i>
                  )}
                </button>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center">
                  <input
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                  <div className="ml-3 text-sm">
                    <label className="text-black dark:text-gray-300">
                      Keep me logged in
                    </label>
                  </div>
                </div>
                <Link className="ml-3 text-sm text-black dark:text-gray-300">
                  Forgot password?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white w-1/3 h-10 bg-green-400 font-bold rounded-lg mx-auto block"
                  onClick={handleSubmit}
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
