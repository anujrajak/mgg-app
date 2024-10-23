"use client";
import { useState, useEffect } from "react";
import { GiDiamonds } from "react-icons/gi";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import DiscountCard from "./DiscountCard";
import { isWindowAvailable } from "@/utils/navigation";

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
  {
    id: 9,
    discountLabel: "70% Off",
    description: "Save more on your next purchase",
    imageUrl:
      "https://images.pexels.com/photos/26614953/pexels-photo-26614953/free-photo-of-close-up-of-ceramic-cups-and-a-vase.jpeg",
  },
];

export default function HorizontalScrollList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Function to determine how many items to show based on window size
  function getItemsPerPage() {
    if (isWindowAvailable() && window.innerWidth < 640) return 1;
    if (isWindowAvailable() && window.innerWidth < 768) return 1;
    if (isWindowAvailable() && window.innerWidth < 1024) return 2;
    return 3;
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

  const handleDiamondClick = (index) => {
    setCurrentIndex(index);
  };

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
    <section className="flex justify-center items-center">
      <div className="container flex flex-col my-4">
        <div className="relative">
          <div className="flex justify-center items-center overflow-x-auto space-x-4 p-4 snap-x snap-mandatory">
            {cardsData
              .slice(
                currentIndex * itemsPerPage,
                (currentIndex + 1) * itemsPerPage
              )
              .map((card) => (
                <div key={card.id} className="snap-start w-full">
                  <DiscountCard
                    key={card.id}
                    discountLabel={card.discountLabel}
                    description={card.description}
                    imageUrl={card.imageUrl}
                  />
                </div>
              ))}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1 mt-10">
            <button onClick={handlePrevClick} disabled={currentIndex === 0}>
              <HiArrowLongLeft
                size={24}
                className={`text-[#2D7C68] ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`flex items-center justify-center w-6 h-6 rounded-full ${
                  currentIndex === index ? "text-[#2D7C68]" : "text-gray-400"
                }`}
                onClick={() => handleDiamondClick(index)}
              >
                <GiDiamonds size={12} />
              </button>
            ))}

            <button
              onClick={handleNextClick}
              disabled={currentIndex === totalPages - 1}
            >
              <HiOutlineArrowLongRight
                size={24}
                className={`text-[#2D7C68] ${
                  currentIndex === totalPages - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
