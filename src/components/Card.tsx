import React from "react";
import Image from "next/image";

interface Propstype {
  img: string;
  title: string;
  price: string;
  rate: string;
}

const Card = ({ img, title, price, rate }: Propstype) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-xs sm:max-w-sm">
      {/* Image Section */}
      <div className="w-full h-[200px]">
        <Image
          src={img}
          alt="card"
          width={250}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Details */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {title}
        </h2>

        {/* Price */}
        <p className="text-gray-600 text-md font-medium mb-2">Price: {price}</p>

        {/* Rating */}
        <p className="text-yellow-500 text-sm font-semibold">
          Rating: {rate} ⭐
        </p>
      </div>
    </div>
  );
};

export default Card;
