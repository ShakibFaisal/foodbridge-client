
import React, { useState, Suspense } from "react";
import { useLoaderData } from "react-router";
import Loader from "../component/Loader";
import FoodCard from "../component/FoodCard";
import NoFoodFound from "../component/NoFoodFound";

const AvailableFood = () => {
  const data = useLoaderData(); 
  const [searchTerm, setSearchTerm] = useState("");

 
  const filteredData = data.filter((item) =>
    item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-11/12 mx-auto">
    
      <h3 className="text-secondary text-4xl text-center font-extrabold mt-9">
        Available Foods
      </h3>

      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search foods..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-secondary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      <Suspense fallback={<Loader />}>
        {filteredData.length > 0 ? (
         
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 px-5 py-[50px]">
            {filteredData.map((item) => (
              <FoodCard key={item._id} data={item} />
            ))}
          </div>
        ) : (
        
          <div className="flex justify-center items-center h-[400px] px-5">
            <NoFoodFound />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AvailableFood;
