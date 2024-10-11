
import { FC } from 'react';
import about_img from '../../../assets/imgs/about_img.png';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import faq_1 from '../../../assets/imgs/faq_1.png';
import faq_2 from '../../../assets/imgs/faq_2.png';


const FAQ: FC = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
   

        <div className=" w-full  h-[300px] mt-10  justify-center    hidden md:flex ">
  <div className="w-full relative mx-4 "> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${about_img.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6 lg:p-8">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <p className="text-center max-w-lg">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>


<div className=" w-full h-[200px] mt-10 flex justify-center  md:hidden"> 
  <div className="w-full relative  flex justify-center mx-4"> 
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center rounded-md"
      style={{
        backgroundImage: `url(${about_img.src})`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-5 bg-black bg-opacity-50 p-4 md:p-6">
        <h1 className="text-2xl font-bold">FAQ</h1> 
        <p className="text-center max-w-md">
          At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
        </p>
      </div>
    </div>
  </div>
</div>
  <div className='w-full my-5'>
    <div className='mx-10'>
  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title text-base sm:text-lg lg:text-xl font-medium">
      What is GlamGuider?
    </div>
    <div className="collapse-content">
      <p>
        GlamGuider is your go-to platform for the latest trends in beauty and fashion. We offer curated products and expert tips to help you express your unique style.
      </p>
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-base sm:text-lg lg:text-xl font-medium">
      How can I contact customer support?
    </div>
    <div className="collapse-content">
      <p>
        You can reach our customer support team through the "Contact Us" page on our website. We aim to respond to all inquiries within 24 hours.
      </p>
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-base sm:text-lg lg:text-xl font-medium">
      What payment methods do you accept?
    </div>
    <div className="collapse-content">
      <p>
        We accept various payment methods, including credit cards and PayPal, to ensure a secure and convenient shopping experience.
      </p>
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-base sm:text-lg lg:text-xl font-medium">
      Can I return an item?
    </div>
    <div className="collapse-content">
      <p>
        Yes, we offer a hassle-free return policy. You can return unused items within 30 days for a full refund or exchange.
      </p>
    </div>
  </div>

  <div className="collapse collapse-plus bg-base-200 mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title text-base sm:text-lg lg:text-xl font-medium">
      How do I track my order?
    </div>
    <div className="collapse-content">
      <p>
        Once your order has shipped, you will receive an email with tracking information. You can use this to track your order on our website.
      </p>
    </div>
  </div>
</div>
  </div>











<div className="flex  sm:flex-row gap-4 mx-4 sm:mx-8 md:mx-12 lg:mx-[140px] my-3">
  <div className="flex-1">
    <Image 
      src={faq_1}
      layout="responsive"
      width={800}
      height={398}
      alt="description"
    />
  </div>
  <div className="flex-1">
    <Image 
      src={faq_2}
      layout="responsive"
      width={800}
      height={398}
      alt="description"
    />
  </div>
</div>


      <Footer/>
    </div>
  );
};

export default FAQ;


