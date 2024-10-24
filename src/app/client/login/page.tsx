"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import loginImage from "../../../assets/imgs/login_1.png";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Phone Number is:", phoneNumber);
  };







  return (
    <>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center w-full  p-8 rounded-lg shadow-md">
          <div className="flex-shrink-0 w-full md:w-1/2 text-center">
            <Image
              src={loginImage}
              alt="Login"
              className="max-h-[700px] px-5"
            />
          </div>

          <div className="flex-1 bg-[#EDF5F5] p-8 rounded-lg shadow-md w-full md:w-1/2">
            <h1 className="text-center text-2xl font-bold">
              Hii, Welcome Back
            </h1>
            <p className="text-center text-lg mt-2">
              Please fill your details to access your existing account
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="w-full my-5">
                  <label className="text-lg" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    className="w-full h-[52px] p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21747C] mt-2"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[54px] text-center bg-[#21747C] text-white rounded-lg mx-auto mt-4"
                >
                  Continue
                </button>
              </form>
              <div className="text-center text-lg my-5">
                <span className="text-sm text-gray-600">or login with</span>
              </div>
              <button className="w-full h-[54px] text-center bg-blue-600 text-white rounded-lg mx-auto">
                Login with Google
              </button>
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Login;









