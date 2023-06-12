import React from "react";
import { editUser } from "../../api/crud";
import { useState, useEffect } from "react";
import getDetailUser from "../../api/user";
const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  getDetailUser({
    setUser,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    editUser({ fullname, email, bio, phone });
  };
  return (
    <div className="w-full h-min">
      <section className="bg-white">
        <div className="flex justify-between md:h-screen lg:py-0">
          <div className=" bg-white md:mt-0 xl:p-0 w-full">
            <div className="space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6">
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
                      name="fullname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => {
                        return setFullname(e.target.value);
                      }}
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
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => {
                        return setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
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
                      name="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) => {
                        return setPhone(e.target.value);
                      }}
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
                    name="bio"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write something about yourself..."
                    onChange={(e) => {
                      return setBio(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="text-white w-1/6 h-10 font-[300px] bg-baseBlue rounded-lg"
                    onClick={handleSubmit}
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
