import React from "react";

// fetch single food
const getFoodDetails = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    
  );

  if (!res.ok) {
    throw new Error("Failed to fetch food details");
  }

  const data = await res.json();
  return data.details;
};

// Page Component (Server Component)
const FoodsDetails = async ({ params }) => {
  const { id } = await params;
  const foodDetails = await getFoodDetails(id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src={foodDetails.foodImg}
          alt={foodDetails.title}
          className="w-full h-full object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {foodDetails.title}
          </h1>

          <p className="text-gray-500 mt-2">Category: {foodDetails.category}</p>

          <p className="text-xl font-semibold text-green-600 mt-4">
            ৳ {foodDetails.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodsDetails;
