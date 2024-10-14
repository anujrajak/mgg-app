
import Image from 'next/image';
import product_banner from '../../../assets/imgs/about_img.png';
import prod_1 from '../../../assets/imgs/prod_1.png';
import symbol from '../../../assets/imgs/flower.png';
import prod_detail from '../../../assets/imgs/pro_detail1.png';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';



interface ProductDetail {
  id: string;
  src: StaticImageData;
  product: string;
  subHeading: string;
  exploreMore: string;
}
 

const ProductDetails: React.FC = () => {
  const proDetail: ProductDetail[] = [
    {
      id: '1',
      src: prod_1,
      product: 'Body Shop Skincare',
      subHeading:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…',
      exploreMore: 'Explore More',
    },
    {
      id: '2',
      src: prod_1,
      product: 'Daily Hydration Cream',
      subHeading:
        'Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…',
      exploreMore: 'Explore More',
    },
    {
      id: '3',
      src: prod_1,
      product: 'Gentle Cleanser',
      subHeading:
        'Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…',
      exploreMore: 'Explore More',
    },
    {
      id: '4',
      src: prod_1,
      product: 'Youthful Glow Serum',
      subHeading:
        'Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…',
      exploreMore: 'Explore More',
    },
  ];

  return (
    <div>
        <Header/>
        <Navbar/>
      <div className=" w-full  ">
        <div className='relative mx-4  my-5 flex justify-center h-[300px] '>
         <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${product_banner.src})` }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <h1 className="text-3xl font-bold">Body Wash</h1>
            <p className="text-center max-w-lg">
              At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
            </p>
          </div>
        </div>  
        </div>

       
      </div>

      <div className="my-10 w-full  ">
        <div className='mx-4'>
          <h1 className=" text-center">Why You’ll Love The Products</h1>
        <p className="">
          Choosing a body wash infused with organic and Ayurvedic ingredients offers a holistic approach to skincare that benefits both the body and the environment. Here are some key reasons why these natural components are essential:
        </p>
 
        </div>
       

        <div className="w-full">
          <div className='mx-4  grid grid-cols-2 gap-5'>
           {Array(4).fill(null).map((_, index) => (
            <div key={index} className="w-full  bg-[#EDF5F5] p-2">
              <h1 className="text-[26px]">Gentle and Nourishing</h1>
              <p>
                Organic ingredients like aloe vera and coconut oil provide gentle hydration, making them suitable for all skin types, including sensitive skin. They help maintain the skin’s moisture barrier without harsh chemicals.
              </p>
            </div>
          ))}  
          </div>
         
        </div> 
      </div>

      <div className="w-full  my-10 hidden  md:block">
        <h1 className="text-center">Key Ingredients to Look For</h1>
        <div className="  w-full   flex">
          <div className='w-1/2 flex items-center justify-center flex-col'>
            {['Aloe Vera', 'Neem', 'Turmeric', 'Leaf', 'Conclusion'].map((ingredient, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-5 items-start">
                  <Image src={symbol} alt={ingredient} />
                  <h1 className="text">{ingredient}</h1>
                </div>
                <p className="">Hydrates and soothes. Neem: Purifies and protects.</p>
              </div>
            ))}
 



          </div>

          <div className="w-1/2 h-full flex items-center justify-center">
            <Image src={prod_detail} alt="Product Detail" />
          </div>
        </div>
      </div>

      

      <div className="w-full md:hidden">
        <div>
        <h1 className="text-center">Key Ingredients to Look For</h1>    
        </div>
        
        <div className="    flex flex-col items-center justify-center ">

   <div className="w-1/2 h-full flex items-center justify-center">
            <Image src={prod_detail} alt="Product Detail" />
          </div>

          <div className='w-1/2 flex items-center justify-center flex-col'>
            {['Aloe Vera', 'Neem', 'Turmeric', 'Leaf', 'Conclusion'].map((ingredient, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-5 items-start">
                  <Image src={symbol} alt={ingredient} />
                  <h1 className="text">{ingredient}</h1>
                </div>
                <p className="">Hydrates and soothes. Neem: Purifies and protects.</p>
              </div>
            ))}
 



          </div>

       
        </div>
      </div>
            

      <div className='hidden md:block'>
        <h1 className="text-center text-">All Products</h1>
        <div className="w-full mx-auto flex my-10 gap-5 p-3">
          {proDetail.map((pro) => (
            <div key={pro.id} className="w-full bg-[#d3d0d0] ">
              <Image src={pro.src} alt={pro.product} className="w-full  object-contain rounded-lg" />
              <h1 className="text-[20px]">{pro.product}</h1>
              <p>{pro.subHeading}</p>
              <button className="text-white w-10/12 py-2 rounded-full bg-[#21747C] mb-2 my-4">
                {pro.exploreMore}
              </button>
            </div>
          ))}
        </div>
      </div>



      <div className=' md:hidden'>
        <h1 className="text-center ">All Products</h1>
        <div className="w-full mx-4  my-10 gap-5 p-3 grid grid-cols-2 md:">
          {proDetail.map((pro) => (
            <div key={pro.id} className="w-full bg-[#d3d0d0] ">
              <Image src={pro.src} alt={pro.product} className="w-full  object-contain rounded-lg" />
              <h1 className="text-[16px]">{pro.product}</h1>
              <p>{pro.subHeading}</p>
              <button className="text-white w-10/12 py-2 rounded-full bg-[#21747C] mb-2 my-4 text-center">
                {pro.exploreMore}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
