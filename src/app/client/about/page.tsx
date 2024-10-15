
import React from "react";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Image from "next/image"; 

import about_img from "../../../assets/imgs/about_img.png";
import mission_1 from "../../../assets/imgs/banner_3.png";
import symbol from "../../../assets/imgs/flower.png";
import who from "../../../assets/imgs/whow.png";

import core_4 from "../../../assets/imgs/core_4.png";
import core_5 from "../../../assets/imgs/core_5.png";
import core_6 from "../../../assets/imgs/core_6.png";

interface Core {
  id: number;
  src:StaticImageData;
  alt: string;
  heading: string;
  content: string;
}
 


const About: React.FC = () => {
  const cores: Core[] = [
    {
      id: 1,
      src: core_4,
      alt: "Core Value 1",
      heading: "Core Value 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      src: core_5,
      alt: "Core Value 2",
      heading: "Core Value 2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      src: core_6,
      alt: "Core Value 3",
      heading: "Core Value 3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      <div className=" w-full  h-[300px] mt-10  justify-center   hidden md:flex ">
  <div className="w-full relative  mx-4"> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${about_img.src})`,
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


<div className=" w-full h-[300px]  mt-10 flex justify-center  md:hidden"> 
  <div className="w-full relative  flex justify-center mx-4"> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md" 
      style={{
        backgroundImage: `url(${about_img.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6">
        <h1 className="text-2xl font-bold">About Us</h1> 
        <p className="text-center max-w-md">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>




<div className="my-10 ">
        <h1 className="text-center text-black text-5xl font-normal">Our Missions</h1>
    



<div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10 mx-4 md:mx-8 lg:mx-36">
  <div className="w-full md:w-[50%] lg:w-[640px] h-auto">
    <Image
      src={mission_1}
      alt="Mission"
      className="w-full h-auto"
      layout="responsive" 
      width={640} 
      height={350} 
    />
  </div>
  <div className="flex flex-col justify-center items-start space-y-5 w-full md:w-[50%] lg:w-[640px]">
    <div className="flex items-center gap-3">
      <Image src={symbol} alt="Symbol" width={40} height={40} />
      <p>At GlamGuider, we believe in empowering individuals through beauty and fashion.</p>
    </div>
    <div className="flex items-center gap-3">
      <Image src={symbol} alt="Symbol" width={40} height={40} />
      <p>We strive to provide expert advice and insights that inspire confidence in every customer.</p>
    </div>
    <div className="flex items-center gap-3">
      <Image src={symbol} alt="Symbol" width={40} height={40} />
      <p>Our commitment is to bring you the latest trends while ensuring a personalized shopping experience.</p>
    </div>
  </div>
</div>

 </div>

   

<div className="w-full ">
<div className="relative mb-5 hidden md:block  mx-4"> 
  <Image
    src={who}
    alt="Who We Are"
    className="w-full h-auto object-cover"
    layout="responsive"
  
  />
  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
    <div className="bg-[#EDF5F5]  p-10 text-center space-y-6">
      <p className="text-lg">
        We are dedicated to providing a seamless shopping experience that prioritizes convenience, inclusivity, and customer satisfaction.
      </p>
      <p className="text-lg">
        By connecting our community with top-rated products, we inspire confidence and celebrate the beauty in diversity for everyone.
      </p>
    </div>
  </div>
</div>
</div>







<div className="w-full">

<div className="relative  mx-4 md:hidden">
  <Image
    src={who}
    alt="Who We Are"
    className="w-full h-auto object-cover"
    layout="responsive"
  
  />
  <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-[#EDF5F5]  text-center rounded-md ">
    <p className="text-sm w-full h-[50%] ">
      We are dedicated to providing a seamless shopping experience that prioritizes convenience, inclusivity, and customer satisfaction.
    </p>

  </div>
</div>

</div>







   
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-center text-5xl">Core Values</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
          {cores.map((core) => (
            <div key={core.id} className="bg-[#EDF5F3] w-full md:w-1/3 h-auto rounded-lg flex flex-col items-center justify-center p-5 m-2 shadow">
              <Image src={core.src} alt={core.alt} width={96} height={96} className="mb-2" />
              <h2 className="text-xl font-semibold">{core.heading}</h2>
              <p className="text-center">{core.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
