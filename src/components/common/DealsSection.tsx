// components/DealsSection.js
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "January 1, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
  {
    id: 2,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "February 15, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "March 10, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "April 5, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
  {
    id: 5,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "May 20, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
  {
    id: 6,
    imageUrl:
      "https://images.pexels.com/photos/7712472/pexels-photo-7712472.jpeg",
    title: "The Best Schools In East London",
    date: "May 20, 2024",
    description:
      "Where Are The Best Schools In East London? East London Is Full Of Amazing Neighborhoods To Live In But What Options Are There For Schools? Read more",
  },
];

export default function DealsSection() {
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl mb-6 text-[#323232] font-normal">
        Top Deals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            date={product.date}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}
