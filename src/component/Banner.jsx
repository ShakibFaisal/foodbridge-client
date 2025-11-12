import Slider from "./Slider";

const Banner = () => (
  <section className="relative w-full  py-16 md:py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-orange-500">FoodBridge</span>
      </h1>

      <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
        FoodBridge PlateShare connects people who have surplus food with those
        who need it. Join us in reducing food waste and building a caring
        community — one plate at a time.
      </p>
    </div>

    <div className="">
      <Slider></Slider>
    </div>
  </section>
);

export default Banner;
