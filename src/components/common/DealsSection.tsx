"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useFetchPosts } from "@/utils/api/categoryApi";
import { BasePath } from "@/enum/apiConstants";

export default function DealsSection() {
  const { data: posts, isLoading: isLoadingPosts } = useFetchPosts("deal");
  const [postByType, setDeals] = useState([]);
  useEffect(() => {
    if (posts) {
      console.log(posts);
      setDeals(posts);
    }
  }, [posts]);
  return (
    <section className="py-10">
      <h1 className="text-center text-3xl mb-6 text-[#323232] font-normal">
        Top Deals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
        {isLoadingPosts
          ? ""
          : postByType.map((item: any) => (
              <ProductCard
                key={item._id}
                imageUrl={BasePath.API_BASE_PATH + item.thumbnail}
                title={item.title}
                date={item.updatedAt}
                description={item.propertiesDescription}
              />
            ))}
      </div>
    </section>
  );
}
