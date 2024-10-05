"use client";
import { useRef } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const categories = [
  {
    name: "Electronics",
    imgSrc:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
  },
  {
    name: "Fashion",
    imgSrc:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
  },
  {
    name: "Home & Garden",
    imgSrc:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
  },
  {
    name: "Sports",
    imgSrc:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
  },
  {
    name: "Toys",
    imgSrc:
      "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
  },
  // Add more categories as needed
];

const CategoryCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center justify-between"></div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
