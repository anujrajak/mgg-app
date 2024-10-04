// components/DiscountCard.js
import Link from "next/link";

export default function DiscountCard({
  discountLabel,
  description,
  imageUrl,
  classes = "",
}) {
  return (
    <div
      className={`card w-auto max-w-[652px] bg-cover bg-center shadow-lg rounded-lg p-4 relative h-96 cursor-pointer ${
        classes ? classes : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }} // Set the background image
    >
      <div className="ml-6 mt-6">
        {/* Overlay to improve text visibility */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

        {/* Discount Label */}
        <div className="absolute text-black font-bold text-[35px] text-[#323232] h-12 flex items-center justify-center rounded-md">
          {discountLabel}
        </div>

        {/* Card Content */}
        <div className="relative mt-12">
          {" "}
          {/* Ensure content is above overlay */}
          <h2 className="text-[20px] text-[#323232]">{description}</h2>
          <Link
            href="/auth/sign-in"
            className="h-12 text-lg text-white bg-gradient-to-r from-[#4F9531] to-[#21747C] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full px-5 py-2.5 mt-4 inline-block"
          >
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
