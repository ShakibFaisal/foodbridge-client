import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-primary">FoodBridge</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or want to partner with us?
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaEnvelope className="text-primary text-2xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">support@foodbridge.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaPhoneAlt className="text-primary text-2xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+880 1XXX-XXXXXX</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaMapMarkerAlt className="text-primary text-2xl mb-3" />
              <h4 className="text-xl font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
