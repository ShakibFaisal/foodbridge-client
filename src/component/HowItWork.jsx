import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { FaSearch, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWork = () => {
  const steps = [
    {
      title: "Post Food",
      description:
        "Donate your extra food by posting it on our platform. Add details like quantity, location, and expiry to make it easy for users to claim.",
      icon: <FaBowlFood />,
      color: "bg-orange-100 text-orange-500",
    },
    {
      title: "Find Food",
      description:
        "Users can browse and find available food in their area. Filter by location or type of food to quickly see what’s available.",
      icon: <FaSearch />,
      color: "bg-blue-100 text-blue-500",
    },
    {
      title: "Collect Food",
      description:
        "Collect food safely from donors and enjoy a meal. Coordinate pickup time with the donor for a smooth experience.",
      icon: <FaHandshake />,
      color: "bg-green-100 text-green-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50 backdrop-blur-sm mt-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-primary"
        >
          How It Works
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Helping you share and receive food in three simple steps. Easy, safe, and impactful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg cursor-pointer border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className={`text-6xl mb-5 flex justify-center items-center w-20 h-20 mx-auto rounded-full ${step.color}`}
              >
                {step.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default HowItWork;
