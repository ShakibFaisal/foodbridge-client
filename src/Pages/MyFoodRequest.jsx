import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";

const MyFoodRequest = () => {
  const { user } = use(AuthContext);
  const [requestFoods, setRequestFoods] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/food/myrequest?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequestFoods(data));
  }, [user]);
  const handlesubmit = (action, id, pid) => {
    console.log(action,id,pid)
    fetch(`http://localhost:3000/food/myrequest/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: action }),
    })
      .then((res) => res.json())
      .then(() => toast.success(`Request ${action} successfully!`));
    if (action === "accepted") {
      fetch(`http://localhost:3000/food/status/${pid}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status:"Donated" }),
      })
        .then((res) => res.json())
        .then(() => toast("Successful"));
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
        Food Requests ({requestFoods.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-left bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-sm sm:text-base">SL No</th>
              <th className="p-3 text-sm sm:text-base">Food</th>
              <th className="p-3 text-sm sm:text-base">Food Requester</th>
              <th className="p-3 text-sm sm:text-base">Requester email</th>
              <th className="p-3 text-sm sm:text-base">Status</th>
              <th className="p-3 text-sm sm:text-base">Action</th>
              <th className="p-3 text-sm sm:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {requestFoods.map((food, index) => (
              <tr
                key={food._id}
                className="border-b border-gray-300 text-sm sm:text-base"
              >
                <td className="p-2 sm:p-3">{index + 1}</td>
                <td className="p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
                  <img
                    src={food.food_img}
                    alt={food.food_name}
                    className="w-10 h-10 rounded object-cover flex-shrink-0"
                  />
                  <div className="truncate max-w-[120px] sm:max-w-xs">
                    <p className="font-medium truncate">{food.food_name}</p>
                  </div>
                </td>
                <td className="p-2 sm:p-3   gap-2 sm:gap-3">
                  <img
                    src={food.requester_img}
                    alt={food.requester_name}
                    className="w-10 h-10 rounded object-cover flex-shrink-0"
                  />
                  <div className="truncate max-w-[120px] sm:max-w-xs">
                    <p className="font-medium truncate">
                      {food.requester_name}
                    </p>
                  </div>
                </td>
                <td className="p-2 sm:p-3">{food.request_email}</td>
                <td className="p-2 sm:p-3">{food.status}</td>
                <td className="p-2 sm:p-3">
                  <button
                    onClick={() =>
                      handlesubmit("accepted", food._id, food.productcID)
                    }
                    
                    className="w-full sm:w-auto border-2 border-green-500 text-green-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-green-100 text-xs sm:text-sm"
                  >
                    Accept
                  </button>
                </td>
                <td className="p-2 sm:p-3">
                  <button
                    onClick={() =>
                      handlesubmit("rejected", food._id, food.productcID)
                    }
                    
                    className="w-full sm:w-auto border-2 border-red-500 text-red-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-red-100 text-xs sm:text-sm"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFoodRequest;
