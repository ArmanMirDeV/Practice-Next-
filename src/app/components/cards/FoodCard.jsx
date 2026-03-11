"use client"
import Image from "next/image";

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-44">
        <Image
          src={food.foodImg}
          alt={food.title}
          fill
          className="object-cover"
          sizes="288px"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {food.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">Category: {food.category}</p>

        <p className="text-xl font-bold text-green-600 mt-2">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onAddToCart(food)}
            className="flex-1 py-2 rounded-xl btn-glow"
          >
            Add to Cart
          </button>

          <button
            onClick={() => onViewDetails(food.id)}
            className="flex-1 border border-gray-300 bg-green-400 text-gray-700 py-2 rounded-xl hover:bg-green-600 active:scale-95 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
