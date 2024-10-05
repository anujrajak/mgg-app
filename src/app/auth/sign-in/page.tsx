"use client";

import InputField from "@/components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "@/components/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import Image from "next/image";
import logo from "@/assets/imgs/logo.png";

function SignInDefault() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({ email, password });
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      rememberMe,
      // redirectUrl: "/admin",
    });

    if (result?.error) {
      console.log(result);
      toast(result.error, { theme: "dark" });
    } else {
      // Redirect to profile or dashboard after successful login
      router.push("/admin");
    }
  };

  return (
    <div className="relative flex bg-white dark:text-gray-300 dark:bg-gray-900">
      <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
          <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
            {/* Sign in section */}
            <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
              <Image className="h-auto w-auto mb-8" alt="logo" src={logo} />
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
                {/* Checkbox */}
                <div className="mb-4 flex items-center justify-between px-2">
                  <div className="mt-2 flex items-center">
                    <Checkbox
                      label="Remember Me"
                      value={rememberMe}
                      name="rememberMe"
                      onChange={(e) => setRememberMe(!rememberMe)}
                    />
                    <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                      Keep me logged In
                    </p>
                  </div>
                  <a
                    className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
              <div className="mt-4">
                <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                  Not registered yet?
                </span>
                <a
                  href="/auth/sign-up"
                  className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                >
                  Create an account
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
