"use client";

import InputField from "@/components/fields/InputField";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

function SignInDefault() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: name,
        password,
        confirmPassword: cpassword,
        email,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      toast(data.message || "Error signing up", { theme: "dark" });
      return;
    }
    toast("Signed up successfully.", { theme: "dark" });
  };

  return (
    <div className="relative flex bg-white dark:text-gray-300 dark:bg-gray-900">
      <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
          <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            {/* Sign in section */}
            <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
                Sign Up
              </h3>
              <p className="mb-9 ml-1 text-base text-gray-600 dark:text-gray-300">
                Enter your email and password to sign up!
              </p>
              <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white">
                <div className="rounded-full text-xl">
                  <FcGoogle />
                </div>
                <p className="text-sm font-medium text-navy-700 dark:text-white">
                  Sign In with Google
                </p>
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                <p className="text-base text-gray-600 dark:text-gray-300">
                  {" "}
                  or{" "}
                </p>
                <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
              </div>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="Name*"
                  placeholder="John..."
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                {/* Email */}
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="Email*"
                  placeholder="mail@simmmple.com"
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password */}
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="Password*"
                  placeholder="Min. 8 characters"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Password */}
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="Confirm Password*"
                  placeholder="Min. 8 characters"
                  id="confirmPassword"
                  type="password"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />

                <button
                  className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <div className="mt-4">
                <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                  Already have account?
                </span>
                <a
                  href="/auth/sign-in"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInDefault;
