import { HeartHandshake, Recycle, MapPin, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Reduce Food Waste",
    desc: "Share surplus food instead of throwing it away.",
    icon: <Recycle className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Help the Community",
    desc: "Support people in need with accessible meals.",
    icon: <HeartHandshake className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Nearby Food Options",
    desc: "Find food shared by people around your location.",
    icon: <MapPin className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Safe & Trusted",
    desc: "Verified donors and clear food details.",
    icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
  },
];

export default function WhyFoodBridge() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why FoodBridge?
        </h2>
        <p className="text-gray-600 mb-12">
          Making food sharing simple, safe, and impactful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
