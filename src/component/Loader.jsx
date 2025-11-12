import React from "react";
import icon from "../assets/web-logo.png";

const Loader = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <h3 className="flex text-6xl items-center">
        L{" "}
        <span className="mx-2">
          <img
            src={icon}
            alt="loading"
            className="w-10 h-10 inline-block rounded-full"
            style={{ animation: "spin 2s linear infinite" }}
          />
        </span>
        ading..
      </h3>

      <style>
        {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
      </style>
    </div>
  );
};

export default Loader;
