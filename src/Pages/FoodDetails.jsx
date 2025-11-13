import React from "react";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food)
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <img
        src={food.food_image}
        alt={food.food_name}
        className="w-full h-[350px] object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{food.food_name}</h1>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={food.donator_image}
          alt={food.donator_name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <h3 className="font-semibold">{food.donator_name}</h3>
          <p className="text-sm text-gray-500">{food.donator_email}</p>
        </div>
      </div>

      <p>
        <strong>Quantity:</strong> {food.food_quantity}
      </p>
      <p>
        <strong>Pickup Location:</strong> {food.pickup_location}
      </p>
      <p>
        <strong>Expire Date:</strong> {food.expire_date}
      </p>
      <p className="mt-3">
        <strong>Additional Notes:</strong> {food.additional_notes}
      </p>

      <div className="mt-6 text-center">
        <button className="btn bg-orange-500 text-white hover:bg-orange-600 px-8 py-2 rounded-lg">
          Request Food
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
