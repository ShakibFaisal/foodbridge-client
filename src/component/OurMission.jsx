import React from "react";

const OurMission = () => {
  const stats = [
    { label: "Foods Donated", value: 1250 },
    { label: "Active Donors", value: 350 },
    { label: "Communities Served", value: 45 },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-200">
          Our mission is to reduce food waste and help communities by connecting
          donors with those in need. Every donated meal counts !
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
