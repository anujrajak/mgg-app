

"use client";
import React from "react";
import Image from "next/image";
import sample_1 from "../../../assets/imgs/sample_1.png";
import sample_str_1 from "../../../assets/imgs/sample_str_1.png";
import sample_str_2 from "../../../assets/imgs/sample_str_2.png";
import sample_str_3 from "../../../assets/imgs/sample_str_3.png";
import sample_str_4 from "../../../assets/imgs/sample_str_4.png";
import sample_str_5 from "../../../assets/imgs/sample_str_5.png";
import prod_1 from "../../../assets/imgs/prod_1.png";
import deal_2 from "../../../assets/imgs/topdeals_2.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


interface Product {
  id: string;
  src: StaticImageData;
  productName: string;
  subHeading: string;
  exploreMore: string;
}

interface Deal {
  id: number;
  img: StaticImageData;
  alt: string;
  offer: string;
  range: string;
  explore: string;
}

const Sample: React.FC = () => {
  const productEle: Product[] = [
    {
      id: "1",
      src: prod_1,
      productName: "Effective Skincare Product",
      subHeading:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…",
      exploreMore: "Explore More",
    },
    {
      id: "2",
      src: prod_1,
      productName: "Daily Skincare Routine Product",
      subHeading:
        "Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…",
      exploreMore: "Explore More",
    },

    {
        id: "3",
        src: prod_1,
        productName: "Skin Type Identification Product",
        subHeading:
          "Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…",
        exploreMore: "Explore More",
      },
      {
        id: "4",
        src: prod_1,
        productName: "Youthful Skin Ingredients Product",
        subHeading:
          "Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…",
        exploreMore: "Explore More",
      },
      {
        id: "5",
        src: prod_1,
        productName: "DIY Skincare Remedies Product",
        subHeading:
          "Explore simple DIY skincare recipes that can nourish and rejuvenate your skin without breaking the bank…",
        exploreMore: "Explore More",
      },
      {
        id: "6",
        src: prod_1,
        productName: "Sun Protection Skincare Product",
        subHeading:
          "Learn essential tips to shield your skin from harmful UV rays and maintain its health throughout the year…",
        exploreMore: "Explore More",
      },
   
  ];

  const topDeals: Deal[] = [
    {
      id: 1,
      img: deal_2,
      alt: "Deal 1 Image",
      offer: "50-60% off",
      range: "on entire page",
      explore: "Explore more",
    },
    {
      id: 2,
      img: deal_2,
      alt: "Deal 2 Image",
      offer: "70-80% off",
      range: "on entire page",
      explore: "Explore more",
    },
    {
        id: 3,
        img: deal_2,
        alt: "Deal 3 Image",
        offer: "30% off",
        range: "on selected items",
        explore: "Explore more",
      },
      {
        id: 4,
        img: deal_2,
        alt: "Deal 4 Image",
        offer: "25% off",
        range: "on first purchase",
        explore: "Explore more",
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
        backgroundImage: `url(${sample_1.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold">Sample</h1>
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
        backgroundImage: `url(${sample_1.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6">
        <h1 className="text-2xl font-bold">Sample</h1> 
        <p className="text-center max-w-md">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>

      
<div className="w-full   hidden md:block">
        <div className="flex flex-wrap items-center justify-center my-5 gap-3 md:gap-5">
          <Image src={sample_str_1} alt="store" className="w-1/2 md:w-auto" />
          <Image src={sample_str_2} alt="store" className="w-1/2 md:w-auto" />
          <Image src={sample_str_3} alt="store" className="w-1/2 md:w-auto" />
          <Image src={sample_str_4} alt="store" className="w-1/2 md:w-auto" />
          <Image src={sample_str_5} alt="store" className="w-1/2 md:w-auto" />
        </div>

        <div className="bg-[#EDF5F5] text-center my-5 p-4">
          <p className="text-sm md:text-base">
            ShopClues, your one-stop destination for diverse and affordable
            online shopping, offers a wide array of products, from electronics
            to fashion, at unbeatable prices. With CashKaro, enjoy exclusive
            coupon codes and cashback on top of their existing offers.
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl py-3">
            Wide range of Products coming with great Deals Everyday
          </h1>
        </div>

        <div className="flex flex-wrap gap-5 justify-center my-5">
          <div className="bg-[#21747C] w-full md:w-[48%] h-[149px] flex items-center px-4 rounded-lg text-white text-[18px] md:text-[22px] lg:text-[26px] my-5">
            <p>
              Upto 85% Off + Flat 10% Off on Orders above ₹149 Use Code ☛
              MYSHOPCLUES
            </p>
          </div>
          <div className="bg-[#21747C] w-full md:w-[48%] h-[149px] flex items-center px-4 rounded-lg text-white text-[18px] md:text-[22px] lg:text-[26px] my-5">
            <p>
              Upto 85% Off + Flat 10% Off on Orders above ₹149 Use Code ☛
              MYSHOPCLUES
            </p>
          </div>
        </div>
</div>

 <div className="text-center my-5 px-4">
        <button className="bg-[#21747C] w-full md:w-[335px] h-[50px] text-white text-[16px] rounded-[80px]">
          Earn Upto 70% Reward
        </button>
      </div>

<div className="w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-5">
          All Products
        </h1>
        <div className="flex flex-wrap justify-center gap-5">
          {productEle.map((prod) => (
            <div
              key={prod.id}
              className="rounded-lg shadow-md w-full sm:w-[48%] md:w-[30%] lg:w-[23%] px-4 mb-5"
            >
              <Image
                src={prod.src}
                alt="product"
                className="h-[200px] md:h-[250px] lg:h-[330px] w-full object-cover rounded-t-lg"
              />
              <h1 className="text-lg font-bold">{prod.productName}</h1>
              <p>{prod.subHeading}</p>
              <button className="text-white w-full py-2 rounded-full bg-[#21747C] mb-3 my-4">
                {prod.exploreMore}
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sample;
