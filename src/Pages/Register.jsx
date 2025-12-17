

import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [error, setError] = useState("");
  const { createUserEP, googleLogin, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleform = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;

    setError("");

    // Validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUserEP(email, password)
      .then(() => {
        updateUser(name, photo);
        toast.success("Registered Successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handlegoole = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#faf7ef] px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row">

        {/* LEFT SECTION */}
        <div className="md:w-1/2 w-full bg-primary text-white p-10 md:p-16 flex flex-col justify-center items-center text-center">
          <div className="text-5xl mb-6">🥗</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Join FoodBridge</h2>
          <p className="text-base md:text-[16px] opacity-90 max-w-xs">
            Create an account and start donating or receiving food to help 
            reduce waste and support your community.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 w-full p-8 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
            Create Your Account <span>🍽️</span>
          </h2>

          <form onSubmit={handleform} className="space-y-4">
            {/* Name */}
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Profile image URL"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                placeholder="Create a strong password"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-[55%] transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
              Register
            </button>
          </form>

          {/* Google Button */}
          <button
            onClick={handlegoole}
            className="w-full border py-3 rounded-lg mt-6 flex items-center justify-center gap-3 text-lg"
          >
            <FcGoogle /> Register with Google
          </button>

          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
