const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Food Donor",
    message:
      "FoodBridge helped me share extra food instead of wasting it. The process is simple and meaningful.",
  },
  {
    name: "Ayesha Rahman",
    role: "Student",
    message:
      "As a student, this platform really helped me find affordable meals nearby.",
  },
  {
    name: "Shakib Hasan",
    role: "Volunteer",
    message:
      "I love how FoodBridge connects communities and reduces food waste at the same time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What Our Community Says
        </h2>

        <p className="text-gray-600 mb-12">
          Real stories from people using FoodBridge.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic mb-4">
                “{testimonial.message}”
              </p>

              <h4 className="font-semibold text-gray-800">
                {testimonial.name}
              </h4>

              <span className="text-sm text-orange-600">
                {testimonial.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
