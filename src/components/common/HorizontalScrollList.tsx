"use client";
import { useState } from "react";
import { GiDiamonds } from "react-icons/gi";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import DiscountCard from "./DiscountCard";

export function Card({ title, description, imageUrl }) {
  return (
    <div
      className="card w-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

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
    discountLabel: "50 Off",
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
  // Add more cards as needed
];

export default function HorizontalScrollList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
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
    <div className="relative">
      <div className="flex overflow-x-auto space-x-4 p-4 snap-x snap-mandatory">
        {cardsData
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((card, index) => (
            <div key={index} className="snap-start">
              <DiscountCard
                key={card.id}
                discountLabel={card.discountLabel}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1/2">
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
  );
}
