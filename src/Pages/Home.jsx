import React, { Suspense } from "react";
import Banner from "../component/Banner";
import FoodCard from "../component/FoodCard";
import { Link, useLoaderData } from "react-router";
import Loader from "../component/Loader";
import HowItWork from "../component/HowItWork";
import OurMission from "../component/OurMission";
import { FaBowlFood } from "react-icons/fa6";
import { motion } from "framer-motion";
import WhyFoodBridge from "../component/WhyFoodBridge";
import Testimonials from "../component/Testimonials";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>

      <h3 className="text-center text-3xl font-extrabold text-accent-content  my-[100px]">
       Recent  <span className="text-secondary">Foods</span>
       
      </h3>
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
          {data.map((data) => (
            <FoodCard key={data._id} data={data} />
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center my-8">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    
  >
    <Link
      to="/available"
      className="btn btn-primary w-[300px] text-2xl p-8 text-white flex items-center justify-center gap-3"
    >
      <FaBowlFood /> View All Foods
    </Link>
  </motion.div>
</div>


      <HowItWork></HowItWork>
      <WhyFoodBridge></WhyFoodBridge>
      <Testimonials></Testimonials>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;
