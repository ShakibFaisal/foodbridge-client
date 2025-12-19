import React from "react";
import { GiMeal } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const FoodCard = ({ data }) => {
  return (
    <div className="card group bg-base-100 shadow-[0_4px_12px_rgba(255,105,180,0.25)] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <figure className="relative">
        <img
          src={data.food_image}
          alt={data.food_name}
          className="w-full h-56 overflow-hidden object-cover group-hover:scale-110"
        />
      </figure>
      <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
        <p className="flex gap-2 items-center  font-bold">
          <span className="text-white ">
            <GiMeal />
          </span>

          {data.food_quantity}
        </p>
      </div>
              <div
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold shadow-lg text-white
            ${data.food_status=="Available" ? "bg-green-500" : "bg-red-500"}`}
        >
          {data.food_status}
        </div>


      <div className="card-body space-y-2">
        <h2 className="card-title text-3xl group-hover:text-primary font-bold text-gray-800">
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
          <p className="flex items-center gap-1.5">
            <span className="font-semibold text-2xl text-red-600"><FaLocationDot /></span>{" "}
            {data.pickup_location}
          </p>
          <p>
            <span className="font-semibold ml-8">Expires:</span> {data.expire_date}
          </p>
         
        </div>

        <div className="justify-end mt-auto ">
          <Link
            className="btn btn-primary w-full text-white"
            to={`/foods/${data._id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
