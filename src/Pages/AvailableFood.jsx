import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Loader from "../component/Loader";
import FoodCard from "../component/FoodCard";

const AvailableFood = () => {
  const data = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
        <h3 className="text-secondary text-4xl text-center font-extrabold mt-9">Available Foods</h3>
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-5 py-[100px]">
          {data.map((data) => (
            <FoodCard key={data._id} data={data} />
          ))}
        </div>
        
      </Suspense>
    </div>
  );
};

export default AvailableFood;
