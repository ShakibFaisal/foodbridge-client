import { Link } from "react-router";
import Slider from "./Slider";
import { FaBowlFood } from "react-icons/fa6";


const Banner = () => (
  <section className="relative w-full py-16 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-base-100">
   
    <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-orange-500">FoodBridge</span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
        <strong>FoodBridge</strong> connects people who have surplus food with those who
        need it. Join us in reducing food waste and building a caring
        community — one plate at a time.
      </p>
       <Link  className="btn btn-primary text-2xl p-8 text-white text-center" to={'/available'}> <span><FaBowlFood /></span> View All Foods</Link>
     
    </div>

  
    <div className="md:w-1/2">
      <Slider />
    </div>
  </section>
);

export default Banner;
