import React from "react";
import FoodCard from "../components/cards/FoodCard";

const getFoods = async () => {
  const res = await fetch(
    " https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();

  return (
    <div>
      <h2 className="text-4xl font-bold">
        {" "}
        Total <span className="text-yellow-500">{foods.length}</span> data found in the system 
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5 ">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
