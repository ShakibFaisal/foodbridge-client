
import React from "react";
import { FaBowlFood } from "react-icons/fa6";
import { FaSearch, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWork = () => {
  const steps = [
    {
      title: "Post Food",
      description: "Donate your extra food by posting it on our platform.",
      icon: <FaBowlFood />,
    },
    {
      title: "Find Food",
      description: "Users can browse and find available food in their area.",
      icon: <FaSearch />,
    },
    {
      title: "Collect Food",
      description: "Collect food safely from donors and enjoy a meal.",
      icon: <FaHandshake />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-12 text-primary"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-5xl mb-4 text-primary flex justify-center"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;

