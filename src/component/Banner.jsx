import { Link } from "react-router";
import Slider from "./Slider";
import { FaBowlFood } from "react-icons/fa6";

const Banner = () => (
  <section className="relative min-h-[60vh] w-full py-12 md:py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#FFEDE0]">
    
    {/* Text Content */}
    <div className="text-center md:text-left md:w-1/2 flex-1">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-orange-500">FoodBridge</span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
        <strong>FoodBridge</strong> connects people who have surplus food with those who
        need it. Join us in reducing food waste and building a caring
        community — one plate at a time.
      </p>

      <Link
        to="/available"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg transition"
      >
        <FaBowlFood />
        View All Foods
      </Link>
    </div>

    {/* Slider */}
    <div className="md:w-1/2 flex-1 flex items-center justify-center">
      <Slider />
    </div>

  </section>
);

export default Banner;
