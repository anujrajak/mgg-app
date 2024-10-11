



"use client"
import { useState } from "react";
import blogs_img from "../../../assets/imgs/contact_us.png"; 
import blog_1 from "../../../assets/imgs/blog_1.png";
import recent_post1 from "../../../assets/imgs/recent_post1.png"; 
import recent_post2 from "../../../assets/imgs/recent_post2.png"; 
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

interface Blog {
  id: string;
  src: string;
  heading: string;
  date: string;
  subHeading: string;
  readMore: string;
}

interface ArchiveItem {
  month: string;
  details: string;
}

const Blogs = () => {
  const blogEle: Blog[] = [
    {
      id: "1",
      src: blog_1.src, 
      heading: "How to Choose the Most Effective Skincare",
      date: "Sept 30, 2024",
      subHeading:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…",
      readMore: "Read More",
    },
    {
      id: "2",
      src: blog_1.src,
      heading: "The Benefits of a Daily Skincare Routine",
      date: "Oct 5, 2024",
      subHeading:
        "Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…",
      readMore: "Read More",
    },
    {
      id: "3",
      src: blog_1.src,
      heading: "Understanding Different Skin Types",
      date: "Oct 10, 2024",
      subHeading:
        "Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…",
      readMore: "Read More",
    },
    {
      id: "4",
      src: blog_1.src,
      heading: "Top 10 Ingredients for Youthful Skin",
      date: "Oct 15, 2024",
      subHeading:
        "Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…",
      readMore: "Read More",
    },
    {
      id: "5",
      src: blog_1.src,
      heading: "DIY Skincare Remedies You Can Try at Home",
      date: "Oct 20, 2024",
      subHeading:
        "Explore simple DIY skincare recipes that can nourish and rejuvenate your skin without breaking the bank…",
      readMore: "Read More",
    },
    {
      id: "6",
      src: blog_1.src,
      heading: "How to Protect Your Skin from Sun Damage",
      date: "Oct 25, 2024",
      subHeading:
        "Learn essential tips to shield your skin from harmful UV rays and maintain its health throughout the year…",
      readMore: "Read More",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const archiveItems: ArchiveItem[] = [
    { month: 'SEPTEMBER 2024', details: 'Details about September 2024...' },
    { month: 'AUGUST 2024', details: 'Details about August 2024...' },
    { month: 'JULY 2024', details: 'Details about July 2024...' },
    { month: 'JUNE 2024', details: 'Details about June 2024...' },
    { month: 'MAY 2024', details: 'Details about May 2024...' }
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tags = [
    'Skincare',
    'Beauty',
    'Fashion',
    'Makeup',
    'Health',
    'Wellness',
    'Lifestyle',
    'Trends',
    'DIY'
  ];

  return (
  
    <div>
    <Header />
    <Navbar />


    <div className=" w-full  h-[300px] mt-10  justify-center   hidden md:flex ">
  <div className="w-full relative mx-4"> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${blogs_img.src})`,
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


<div className="relative  h-[300px] mt-10 flex justify-center  md:hidden"> 
  <div className="w-full relative mx-4 "> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${blogs_img.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 ">
        <h1 className="text-2xl font-bold">About Us</h1> 
        <p className="text-center max-w-md">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>


    


<div className="hidden md:flex w-full   justify-center  gap-2   " >

<div className="w-full  py-5 grid grid-cols-2 gap-5 mx-4">
  {blogEle.map((blog) => (
    <div
      key={blog.id}
      className="rounded-lg shadow-md  px-4"
    >
      <Image
        src={blog.src}
        alt="blog"
        width={612}
        height={430}
        className=" w-full object-cover rounded-t-lg"
      />
      <h1 className="text-lg font-bold">{blog.heading}</h1>
      <p>{blog.date}</p>
      <p>{blog.subHeading}</p>
      <button className="text-white px-4 py-2 rounded-full bg-[#21747C] my-4">
        {blog.readMore}
      </button>
    </div>
  ))}
</div>

<div className="w-[300px] h-[1100px] flex flex-col gap-5 mx-4">
  <h1 className="text-lg">CATEGORIES</h1>
  <select id="blogs" className="w-full h-[47px] bg-slate-200">
    <option value="men">men</option>
    <option value="women">women</option>
    <option value="children">children</option>
  </select>
  
  <div>
    <h1 className="text-[22px]">Recent Post</h1>
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <Image src={recent_post1.src} alt="this is the post img" width={66} height={66} className="w-[66px] h-[66px]" />
        <h1>GMOs: Your Right</h1>
      </div>
      <div className="flex items-center justify-between">
        <Image src={recent_post2.src} alt="this is the post img" width={66} height={66} className="w-[66px] h-[66px]" />
        <h1>GMOs: Your Right</h1>
      </div>
    </div>
  </div>
  
  <div>
    <h1 className="text-[22px]">ARCHIVE</h1>
    {archiveItems.map((item, index) => (
      <div key={index} className="flex flex-col mb-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <FaChevronRight className={`transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
          <p className="ml-2">{item.month}</p>
        </div>
        {activeIndex === index && (
          <p className="ml-6 text-gray-700">{item.details}</p>
        )}
      </div>
    ))}
  </div>
  
  <div>
    <h1 className="text-[22px]">Text Widget</h1>
    <p className="[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, magni commodi fugit in quo provident.</p>
  </div>
  
  <div>
    <h1 className="text-[22px]">TAGS</h1>
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((tag, index) => (
        <div key={index} className="text-center bg-[#21747C] text-white rounded-lg p-2">
          {tag}
        </div>
      ))}
    </div>
  </div>
</div>
    </div>






<div className="md:hidden w-full mx-4  ">
  <div className="w-full flex flex-col gap-4  ">
 
    <div className="w-full" > 
      <h1 className="text-lg text-center">CATEGORIES</h1>
      <select id="blogs" className="w-[80%] h-[47px] bg-slate-200">
        <option value="men">men</option>
        <option value="women">women</option>
        <option value="children">children</option>
      </select>
    </div>


    <div >
      <h1 className="text">Recent Post</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <Image
            src={recent_post1.src}
            alt="this is the post img"
            width={66}
            height={66}
            className="w-[66px] h-[66px]"
          />
          <h1 className="ml-2">GMOs: Your Right</h1>
        </div>
        <div className="flex items-center">
          <Image
            src={recent_post2.src}
            alt="this is the post img"
            width={66}
            height={66}
            className="w-[66px] h-[66px]"
          />
          <h1 className="ml-2">GMOs: Your Right</h1>
        </div>
      </div>
    </div>

    <div>
      <h1 className="text-[22px]">ARCHIVE</h1>
      {archiveItems.map((item, index) => (
        <div key={index} className="flex flex-col mb-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <FaChevronRight className={`transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
            <p className="ml-2">{item.month}</p>
          </div>
          {activeIndex === index && (
            <p className="ml-6 text-gray-700">{item.details}</p>
          )}
        </div>
      ))}
    </div>

   
    <div className="w-full">
      <h1 className="text-[22px]">Text Widget</h1>
      <p className="text-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, magni commodi fugit in quo provident.
      </p>
    </div>


    <div>
      <h1 className="text-[22px]">TAGS</h1>
      <div className="flex flex-wrap gap-2 mt-4 w-full">
        {tags.map((tag, index) => (
          <div key={index} className="text-center bg-[#21747C] text-white rounded-lg p-2">
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-3 mt-4">
    {blogEle.map((blog) => (
      <div
        key={blog.id}
        className="rounded-lg shadow-md w-full px-2"
      >
        <Image
          src={blog.src}
          alt="blog"
          width={160}
          height={110}
          className="h-[110px] w-[160px] object-cover rounded-t-lg"
        />
        <h1 className="text-lg font-bold">{blog.heading}</h1>
        <p>{blog.date}</p>
        <p>{blog.subHeading}</p>
        <button className="text-white px-4 py-2 rounded-full bg-[#21747C] my-4">
          {blog.readMore}
        </button>
      </div>
    ))}
  </div>
</div>


   
      <Footer/>
    </div>
  );
};

export default Blogs;
 