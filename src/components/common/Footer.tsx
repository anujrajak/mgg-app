// components/Footer.js
import Image from "next/image";
import logo from "@/assets/imgs/logoWhite.png"; // Adjust path as necessary
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social icons
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#21747C] h-[400px] flex flex-col justify-between p-6 text-white px-4">
        <div className="my-auto flex justify-center items-center px-4 md:px-36">
          <div className="container flex justify-between items-center">
            {/* Logo on the left */}
            <div className="flex flex-col">
              <Image className="h-16 w-auto" alt="logo" src={logo} />
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-white bg-opacity-30 backdrop-blur-md rounded-full p-2 text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="bg-white bg-opacity-30 backdrop-blur-md rounded-full p-2 text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white bg-opacity-30 backdrop-blur-md rounded-full p-2 text-white"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Two vertical lists on the right */}
            <div className="flex space-x-8">
              <ul className="space-y-2">
                <li>
                  <Link href="#">Cookie policy</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#">FAQ's</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Terms & conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Optional additional content can go here */}
      <div className="flex justify-center items-center text-center text-white h-16 bg-[#318B94]">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </>
  );
}
