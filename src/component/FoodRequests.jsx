import React from "react";

const FoodRequests = ({ rfood }) => {
  return (
    <tbody>
      {rfood.map((food, index) => (
        <tr
          key={food._id}
          className="border-b border-gray-300 text-sm sm:text-base"
        >
          <td className="p-2 sm:p-3">{index + 1}</td>
          <td className="p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
            <img
              src={food.food_image}
              alt={food.food_name}
              className="w-10 h-10 rounded object-cover flex-shrink-0"
            />
            <div className="truncate max-w-[120px] sm:max-w-xs">
              <p className="font-medium truncate">{food.food_name}</p>
            </div>
          </td>
          <td className="p-2 sm:p-3">
            {/* <p className="font-medium truncate">{user.displayName}</p>
            <p className="text-gray-500 text-xs sm:text-sm truncate">
              {user.email}
            </p> */}
          </td>
          <td className="p-2 sm:p-3">{food.food_quantity}</td>
          <td className="p-2 sm:p-3">{food.expire_date}</td>
          <td className="p-2 sm:p-3">
            <span
              className={`border-2 p-1 sm:p-2 rounded-lg text-xs sm:text-sm ${
                food.food_status === "Available"
                  ? "border-green-500 text-green-500 hover:bg-green-100"
                  : "border-orange-400 text-orange-400 hover:bg-orange-100"
              }`}
            >
              {food.food_status}
            </span>
          </td>
          <td className="p-2 sm:p-3">
            <button className="w-full sm:w-auto border-2 border-green-500 text-green-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-green-100 text-xs sm:text-sm">
              Update
            </button>
          </td>
          <td className="p-2 sm:p-3">
            <button className="w-full sm:w-auto border-2 border-red-500 text-red-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-red-100 text-xs sm:text-sm">
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default FoodRequests;
