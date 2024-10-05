import bg from "@/assets/imgs/about-us-banner.png";
import img from "@/assets/imgs/image.png";

const list = [
  {
    description:
      "At [Your Store Name], our mission is to empower individuals to enhance their well-being and self-expression through high-quality, carefully curated Ayurvedic and glam products.",
  },
  {
    description:
      " We are dedicated to providing a seamless shopping experience that prioritizes convenience, inclusivity, and customer satisfaction. By connecting our community with top-rated products, we inspire confidence and celebrate the beauty in diversity for everyone.",
  },
  {
    description:
      "At [Your Store Name], our mission is to empower individuals to enhance their well-being and self-expression through high-quality, carefully curated Ayurvedic and glam products.",
  },
];

export default function AdminPage() {
  return (
    <div className="my-14 w-full">
      <div className="flex items-center justify-center">
        <div
          className="lg:h-96 container rounded-xl bg-[#E0ECE8] bg-cover bg-center bg-no-repeat flex items-top justify-center"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="w-[900px] text-center">
            <h2 className="text-[56px] text-[#323232] font-medium pt-20">
              About Us
            </h2>
            <p className="text-[#868686] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  my-14 text-center">
        <div className="container">
          <h2 className="text-[48px] font-medium text-[#323232]">
            Our Mission
          </h2>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4 grid-cols-20/80 h-[496px]">
            <div
              className="rounded-xl bg-cover bg-center bg-no-repeat flex items-top justify-center"
              style={{ backgroundImage: `url(${img.src})` }}
            >
              {"   "}
            </div>
            <div>
              <h2 className="text-[48px] font-medium text-[#323232]">
                <div className="p-4">
                  <ul className="list-none">
                    {list.map((item, i) => (
                      <li
                        key={`mission-item-${i}`}
                        className="flex items-start text-start mb-2 text-lg font-normal text-[#868686]"
                      >
                        <span className="mr-2 mt-2">
                          <svg
                            width="38"
                            height="27"
                            viewBox="0 0 38 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.6848 7.47401C18.4143 5.19664 18.1286 2.7921 18.1286 0H20.6811C20.6811 2.76074 20.3968 5.16222 20.1266 7.44215C19.9064 9.30015 19.6959 11.0774 19.6568 12.9026C20.9385 11.5895 22.0596 10.1972 23.2341 8.73875C24.6822 6.94055 26.2114 5.04188 28.2214 3.06763L30.0263 4.84045C28.0388 6.79259 26.1086 8.29312 24.2762 9.7177L24.2745 9.71899C22.782 10.8795 21.3542 11.9896 20.013 13.2525C21.8644 13.2141 23.6596 13.0084 25.5399 12.7929C27.8586 12.5271 30.3068 12.2465 33.1495 12.2465V14.7535C30.3389 14.7535 27.8938 14.4742 25.5727 14.2089L25.571 14.2087C23.6797 13.9926 21.8708 13.7859 20.013 13.7475C21.349 15.0054 22.7658 16.1061 24.2498 17.2589L24.2521 17.2608C26.083 18.6833 28.0162 20.1851 30.0263 22.1596L28.2214 23.9324C26.2338 21.9803 24.7062 20.0846 23.256 18.285L23.2525 18.2804L23.2496 18.2766C22.0696 16.813 20.9407 15.4128 19.6568 14.0974C19.6959 15.9226 19.9064 17.6999 20.1266 19.5579C20.3968 21.8378 20.6811 24.2393 20.6811 27H18.1286C18.1286 24.2079 18.4143 21.8034 18.6848 19.526L18.6854 19.5223C18.9045 17.6767 19.1138 15.9146 19.1529 14.0974C17.8689 15.4128 16.7401 16.813 15.56 18.2766L15.5572 18.2804L15.5537 18.285C14.1035 20.0846 12.5759 21.9803 10.5883 23.9324L8.78339 22.1596C10.7935 20.1851 12.7267 18.6833 14.5576 17.2608L14.5599 17.2589C16.0438 16.1061 17.4607 15.0054 18.7966 13.7475C16.9384 13.786 15.1288 13.9928 13.237 14.2089C10.9158 14.4742 8.47083 14.7535 5.66016 14.7535V12.2465C8.50286 12.2465 10.9511 12.5271 13.2698 12.7929C15.1501 13.0084 16.9452 13.2141 18.7966 13.2525C17.4549 11.9891 16.0266 10.8787 14.5334 9.7177C12.7011 8.29312 10.7709 6.79259 8.78339 4.84045L10.5883 3.06763C12.5983 5.04188 14.1275 6.94055 15.5756 8.73875C16.7501 10.1972 17.8712 11.5895 19.1529 12.9025C19.1138 11.0853 18.9045 9.3233 18.6854 7.47772L18.6848 7.47401Z"
                              fill="#3E7D56"
                            />
                          </svg>
                        </span>
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </h2>
            </div>
          </div> */}

          <div className="flex items-center justify-center lg:flex-row md:flex-col sm:flex-col">
            <img
              className="rounded-lg mx-auto lg:w-[753px] lg:w-[496px] md:w-[753px] md:w-[496px] sm:w-[353px] sm:w-[177px]"
              src={img.src}
              alt="mission"
            />
            <ul className="list-none p-16">
              {list.map((item, i) => (
                <li
                  key={`mission-item-${i}`}
                  className="flex items-start text-start mb-8 text-lg font-normal text-[#868686]"
                >
                  <span className="mr-2 mt-2">
                    <svg
                      width="38"
                      height="27"
                      viewBox="0 0 38 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6848 7.47401C18.4143 5.19664 18.1286 2.7921 18.1286 0H20.6811C20.6811 2.76074 20.3968 5.16222 20.1266 7.44215C19.9064 9.30015 19.6959 11.0774 19.6568 12.9026C20.9385 11.5895 22.0596 10.1972 23.2341 8.73875C24.6822 6.94055 26.2114 5.04188 28.2214 3.06763L30.0263 4.84045C28.0388 6.79259 26.1086 8.29312 24.2762 9.7177L24.2745 9.71899C22.782 10.8795 21.3542 11.9896 20.013 13.2525C21.8644 13.2141 23.6596 13.0084 25.5399 12.7929C27.8586 12.5271 30.3068 12.2465 33.1495 12.2465V14.7535C30.3389 14.7535 27.8938 14.4742 25.5727 14.2089L25.571 14.2087C23.6797 13.9926 21.8708 13.7859 20.013 13.7475C21.349 15.0054 22.7658 16.1061 24.2498 17.2589L24.2521 17.2608C26.083 18.6833 28.0162 20.1851 30.0263 22.1596L28.2214 23.9324C26.2338 21.9803 24.7062 20.0846 23.256 18.285L23.2525 18.2804L23.2496 18.2766C22.0696 16.813 20.9407 15.4128 19.6568 14.0974C19.6959 15.9226 19.9064 17.6999 20.1266 19.5579C20.3968 21.8378 20.6811 24.2393 20.6811 27H18.1286C18.1286 24.2079 18.4143 21.8034 18.6848 19.526L18.6854 19.5223C18.9045 17.6767 19.1138 15.9146 19.1529 14.0974C17.8689 15.4128 16.7401 16.813 15.56 18.2766L15.5572 18.2804L15.5537 18.285C14.1035 20.0846 12.5759 21.9803 10.5883 23.9324L8.78339 22.1596C10.7935 20.1851 12.7267 18.6833 14.5576 17.2608L14.5599 17.2589C16.0438 16.1061 17.4607 15.0054 18.7966 13.7475C16.9384 13.786 15.1288 13.9928 13.237 14.2089C10.9158 14.4742 8.47083 14.7535 5.66016 14.7535V12.2465C8.50286 12.2465 10.9511 12.5271 13.2698 12.7929C15.1501 13.0084 16.9452 13.2141 18.7966 13.2525C17.4549 11.9891 16.0266 10.8787 14.5334 9.7177C12.7011 8.29312 10.7709 6.79259 8.78339 4.84045L10.5883 3.06763C12.5983 5.04188 14.1275 6.94055 15.5756 8.73875C16.7501 10.1972 17.8712 11.5895 19.1529 12.9025C19.1138 11.0853 18.9045 9.3233 18.6854 7.47772L18.6848 7.47401Z"
                        fill="#3E7D56"
                      />
                    </svg>
                  </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
