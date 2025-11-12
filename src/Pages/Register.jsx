import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [error, seterror] = useState("");
  const { createUserEP, googleLogin, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleform = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.pass.value;
    const name = e.target.name.value;
    seterror("");
    if (password.length < 6) {
      seterror("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      seterror("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      seterror("Password must contain at least one lowercase letter");
      return;
    }
    createUserEP(email, password)
      .then(() => {
        toast.success("Registered successfully");
        navigate("/");
        updateUser(name, photo);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handlebtn = (e) => {
    e.preventDefault();
    googleLogin()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="my-[100px]">
      <form
        onSubmit={handleform}
        className="flex justify-center items-center mt-[100px]"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="text-center text-[16px] font-bold">Register</label>

          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Full Name"
            required
          />
          <label className="label">Photo-URL</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Photo-URL"
            required
          />
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
          <button className="btn btn-neutral mt-4">Register</button>

          <p className="text-red-600">{error}</p>

          <p>
            Already have account ?{" "}
            <Link className="text-blue-500" to={"/login"}>
              Login
            </Link>
          </p>
        </fieldset>
      </form>
      <div className="flex justify-center">
        <button onClick={handlebtn} className="btn  btn-active mt-2.5">
          {" "}
          <FcGoogle /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
