"use client";
import { useState, useEffect } from "react";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import DiscountCard from "./DiscountCard";

const cardsData = [
  {
    id: 1,
    discountLabel: "50-90% Off",
    description: "Extra 5% off on any credit card",
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
  },
  {
    id: 2,
    discountLabel: "30% Off",
    description: "Limited time offer on select items",
    imageUrl:
      "https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg",
  },
  {
    id: 3,
    discountLabel: "20% Off",
    description: "Save more on your next purchase",
    imageUrl:
      "https://images.pexels.com/photos/26614953/pexels-photo-26614953/free-photo-of-close-up-of-ceramic-cups-and-a-vase.jpeg",
  },
  {
    id: 4,
    discountLabel: "90% Off",
    description: "Extra 5% off on any credit card",
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
  },
  {
    id: 5,
    discountLabel: "50% Off",
    description: "Limited time offer on select items",
    imageUrl:
      "https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg",
  },
  {
    id: 6,
    discountLabel: "20% Off",
    description: "Save more on your next purchase",
    imageUrl:
      "https://images.pexels.com/photos/26614953/pexels-photo-26614953/free-photo-of-close-up-of-ceramic-cups-and-a-vase.jpeg",
  },
  {
    id: 7,
    discountLabel: "50% Off",
    description: "Extra 5% off on any credit card",
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
  },
  {
    id: 8,
    discountLabel: "80% Off",
    description: "Limited time offer on select items",
    imageUrl:
      "https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg",
  },
];

export default function HorizontalScrollList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Function to determine how many items to show based on window size
  function getItemsPerPage() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 1;
    return 2;
  }

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Reset current index if it exceeds the new total pages
      const totalPages = Math.ceil(cardsData.length / newItemsPerPage);
      if (currentIndex >= totalPages) {
        setCurrentIndex(totalPages - 1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  const handleNextClick = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="mt-[80px]">
      <h1 className="text-center text-3xl mb-6 text-[#323232] font-normal">
        Recently Reviewed
      </h1>
      <div className="flex justify-center items-center">
        <div className="container flex flex-col relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className={`absolute left-0 transform -translate-y-1/2 top-1/2 bg-white rounded-full p-2 shadow ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            } bg-gradient-to-r from-[#4F9531] to-[#21747C]`}
          >
            <HiArrowLongLeft size={20} className="text-white " />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextClick}
            disabled={currentIndex === totalPages - 1}
            className={`absolute right-0 transform -translate-y-1/2 top-1/2 bg-white rounded-full p-2 shadow ${
              currentIndex === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            } bg-gradient-to-r from-[#4F9531] to-[#21747C]`}
          >
            <HiOutlineArrowLongRight
              size={20}
              className="text-white bg-gradient-to-r from-[#4F9531] to-[#21747C]"
            />
          </button>

          <div className="flex justify-between items-center overflow-x-auto px-20 snap-x snap-mandatory">
            {cardsData
              .slice(
                currentIndex * itemsPerPage,
                (currentIndex + 1) * itemsPerPage
              )
              .map((card) => (
                <div
                  key={card.id}
                  className="snap-start max-w-[700px] gap-[20px]"
                >
                  <DiscountCard
                    key={card.id}
                    discountLabel={card.discountLabel}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    classes="w-[700px] max-w-[700px]"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
