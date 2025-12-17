import React from "react";
import { motion } from "framer-motion";

const OurMission = () => {
  const stats = [
    { label: "Foods Donated", value: 1250 },
    { label: "Active Donors", value: 350 },
    { label: "Communities Served", value: 45 },
  ];

  return (
    <section className="py-16 bg-primary/30 text-black mb-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-12">
          Our mission is to reduce food waste and help communities by connecting
          donors with those in need. Every donated meal counts!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-5xl md:text-6xl font-extrabold mb-2">{stat.value}</p>
              <p className="text-lg md:text-xl">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
