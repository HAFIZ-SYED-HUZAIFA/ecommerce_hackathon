"use client";

import Image from "next/image";
import {
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      img: "/featuredproduct/chair11.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 2,
      img: "/featuredproduct/chair22.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 3,
      img: "/featuredproduct/chair33.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
    {
      id: 4,
      img: "/featuredproduct/chair44.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Heading */}
      <h2 className="text-black text-4xl text-center mb-16 font-bold">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image with Icons */}
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
              {/* Product Image */}
              <Image
                src={product.img}
                width={200}
                height={250}
                alt={product.name}
                className="object-cover w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
              />

              {/* Icons (Wishlist, View Details, and Zoom) */}
              <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Wishlist Icon */}
                <button
                  type="button"
                  title="Add to Wishlist"
                  className="bg-white p-2 rounded-full"
                  aria-label="Add to Wishlist"
                >
                  <HeartIcon className="w-6 h-6 text-gray-700" />
                </button>
                {/* Magnifying Glass Icon */}
                <button
                  type="button"
                  title="View Details"
                  className="bg-white p-2 rounded-full"
                  aria-label="View Details"
                >
                  <MagnifyingGlassIcon className="w-6 h-6 text-gray-700" />
                </button>
                {/* Cart Icon */}
                <button
                  type="button"
                  title="Add to Cart"
                  className="bg-white p-2 rounded-full"
                  aria-label="Add to Cart"
                >
                  <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  title="View Product Details"
                  className="w-full py-2 text-sm bg-[#08D15F] rounded-none hover:bg-green-700 transition-colors"
                  aria-label="View Product Details"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-red-500">
                {product.name}
              </h3>
              <div className="flex justify-center items-center gap-1 mt-1">
                <span className="text-[#05E6B7] text-4xl">-</span>
                <span className="text-[#F701A8] text-4xl">-</span>
                <span className="text-[#00009D] text-4xl">-</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">Code - {product.code}</p>
              <p className="mt-1 text-dark-blue-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
