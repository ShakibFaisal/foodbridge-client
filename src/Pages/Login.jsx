

import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleform = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successfully");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  const handlegoole = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#faf7ef] px-4 py-10">
      <div
        className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] overflow-hidden 
        flex flex-col md:flex-row"
      >
        {/* LEFT SECTION */}
        <div
          className="md:w-1/2 w-full   bg-primary text-white p-10 md:p-16 
          flex flex-col justify-center items-center text-center"
        >
          <div className="text-5xl mb-6">🍽️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Welcome Back</h2>
          <p className="text-base md:text-[16px] opacity-90 max-w-xs">
            Sign in and join the mission of saving surplus food, supporting
            communities, and making sure no one goes hungry
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 w-full p-8 md:p-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2">
            Login to Your Account <span>🍱</span>
          </h2>

          <form onSubmit={handleform} className="space-y-4">
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

            <div className="relative">
              <label className="font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="pass"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 mt-1 outline-none"
                required
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-[55%] transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            </div>

            <div className="flex justify-end">
              <Link to="/reset" className="text-sm hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary  text-white py-3 rounded-lg text-lg font-semibold 
                shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
            >
              Login
            </button>
          </form>

          {/* Google Login */}
          <button
            onClick={handlegoole}
            className="w-full border py-3 rounded-lg mt-6 flex items-center justify-center gap-3 text-lg"
          >
            <FcGoogle /> Login with Google
          </button>

          <p className="mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
