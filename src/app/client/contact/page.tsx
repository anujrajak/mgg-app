
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import contact_us from '../../../assets/imgs/contact_us.png';
import contact_us2 from '../../../assets/imgs/contact_us2.png';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div >
    <Header />
    <Navbar />




<div className=" w-full h-[300px] mt-10  justify-center  hidden md:flex ">
  <div className="w-full relative mx-4 "> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md" 
      style={{
        backgroundImage: `url(${contact_us.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-center max-w-lg">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>


<div className=" w-full h-[300px] mt-10 flex justify-center  md:hidden"> 
  <div className="w-full  relative flex justify-center mx-4"> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${contact_us.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6">
        <h1 className="text-2xl font-bold">Contact  Us</h1> 
        <p className="text-center max-w-md">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>

      <div className="w-full   flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <div className="w-full lg:w-1/2 p-6 px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#21747C] text-white px-4 py-2 rounded-full w-full sm:w-[189px] h-[54px] text-center"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <Image src={contact_us2} alt="Contact Us" className="w-full max-w-md lg:max-w-lg" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;


