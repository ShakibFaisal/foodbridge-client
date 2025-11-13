import React from "react";
import { Link } from "react-router";


const FoodCard = ({ data }) => {
    console.log(data._id)
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
      
      <figure>
        <img
          src={data.food_image}
          alt={data.food_name}
          className="w-full h-56 object-cover"
        />
      </figure>

     
      <div className="card-body space-y-2">
       
        <h2 className="card-title text-lg font-bold text-gray-800">
          {data.food_name}
        </h2>

      
        <div className="flex items-center gap-3">
          <img
            src={data.donator_image}
            alt={data.donator_name}
            className="w-8 h-8 rounded-full border"
          />
          <p className="text-sm text-gray-600">{data.donator_name}</p>
        </div>

       
        <div className="text-sm text-gray-700">
          <p>
            <span className="font-semibold">Quantity:</span> {data.food_quantity}
          </p>
          <p>
            <span className="font-semibold">Pickup:</span> {data.pickup_location}
          </p>
          <p>
            <span className="font-semibold">Expires:</span> {data.expire_date}
          </p>
        </div>

      
        
        <Link className="btn btn-primary text-white" to={`/foods/${data._id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default FoodCard;
