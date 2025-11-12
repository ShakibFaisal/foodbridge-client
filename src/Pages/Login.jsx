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
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handlegoole = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className=" mt-[100px] flex justify-center items-center">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
        <form
          onSubmit={handleform}
          className="flex justify-center items-center  "
        >
          <fieldset className="fieldset  border-base-300 rounded-box w-full">
            <label className="text-center text-[16px] font-bold">Login</label>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <div className="relative w-full max-w-md mx-auto ">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                name="pass"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-2/3  transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>{" "}
            </div>

            <div>
              <Link
                className="mt-2.5 hover:underline cursor-pointer"
                to={"/reset"}
              >
                Forget password ?
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p>
              New in our website ?{" "}
              <Link className="text-blue-500 " to={"/register"}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
        <div className="flex justify-center mt-[50px]">
          <button onClick={handlegoole} className="btn  btn-active  mb-[100px]">
            {" "}
            <FcGoogle /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
