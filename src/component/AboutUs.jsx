import React from "react";
import { FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            About <span className="text-primary">FoodBridge</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            FoodBridge is a community-driven food sharing platform where surplus
            food becomes a bridge between those who have extra and those who need it.
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-10 items-center">

       
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every day, tons of food are wasted while many people go hungry.
              FoodBridge was created to solve this problem by connecting
              individuals, restaurants, and organizations with communities in need.
              We believe sharing food is not just an act of kindness — it’s a responsibility.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With FoodBridge, you can easily share your extra food,
              reduce waste, and make a real difference in someone’s life.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaHandsHelping className="text-primary text-3xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Community First
              </h4>
              <p className="text-gray-600">
                We connect donors and receivers through trust, transparency,
                and compassion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaLeaf className="text-primary text-3xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Reduce Food Waste
              </h4>
              <p className="text-gray-600">
                Sharing extra food helps protect the environment
                and build a sustainable future.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaUsers className="text-primary text-3xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Real Impact
              </h4>
              <p className="text-gray-600">
                Every shared meal brings hope, dignity,
                and support to someone in need.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
