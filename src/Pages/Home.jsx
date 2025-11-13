import React, { Suspense } from "react";
import Banner from "../component/Banner";
import FoodCard from "../component/FoodCard";
import { useLoaderData } from "react-router";
import Loader from "../component/Loader";
import HowItWork from "../component/HowItWork";
import OurMission from "../component/OurMission";

const Home = () => {
  const data = useLoaderData();
 

  return (
    <div>
      <Banner></Banner>
      <h3 className="text-center text-3xl font-extrabold text-secondary my-[100px]">
        Foods
      </h3>
      <Suspense fallback={<Loader />}>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {data.map((data) => (
            <FoodCard key={data._id} data={data} />
          ))}
        </div>
      </Suspense>
      <HowItWork></HowItWork>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;
