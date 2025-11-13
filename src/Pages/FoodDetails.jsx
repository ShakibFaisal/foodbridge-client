import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import FoodRequests from "../component/FoodRequests";

const FoodDetails = () => {
  const { user } = use(AuthContext);
  const food = useLoaderData();
  const [foodRequests, setFoodRequest] = useState([]);

  const handleRequest = () => {
    document.getElementById("update_modal").showModal();
  };
  useEffect(() => {
    if (!food?._id) return;
    fetch(`http://localhost:3000/foods/request/${food._id}`)
      .then((res) => res.json())
      .then((data) => setFoodRequest(data));
  }, [food._id]);

  const handleRequestform = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const whyneed = e.target.whyneed.value;
    const number = e.target.number.value;
    const requestedfood = {
      productcID: food._id,
      food_name: food.food_name,
      food_img: food.food_image,
      location: location,
      whyneed: whyneed,
      number: number,
      donator_email: food.donator_email,
      request_email: user.email,
      requester_name: user.displayName,
      requester_img: user.photoURL,
      status: "Pending",
    };
    fetch("http://localhost:3000/requestfoods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestedfood),
    })
      .then((res) => {
        res.json();
        toast.success("Request successfully!");
        e.target.reset();
        document.getElementById("update_modal").close();
      })
      .catch(() => {
        toast.error("Error submitting Request");
      });
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
        <img
          src={food.food_image}
          alt={food.food_name}
          className="w-full h-[350px] object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">{food.food_name}</h1>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={food.donator_image}
            alt={food.donator_name}
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <h3 className="font-semibold">{food.donator_name}</h3>
            <p className="text-sm text-gray-500">{food.donator_email}</p>
          </div>
        </div>

        <p>
          <strong>Quantity:</strong> {food.food_quantity}
        </p>
        <p>
          <strong>Pickup Location:</strong> {food.pickup_location}
        </p>
        <p>
          <strong>Expire Date:</strong> {food.expire_date}
        </p>
        <p className="mt-3">
          <strong>Additional Notes:</strong> {food.additional_notes}
        </p>

        <div className="mt-6 text-center">
          <button
            onClick={handleRequest}
            className="btn bg-orange-500 text-white hover:bg-orange-600 px-8 py-2 rounded-lg"
          >
            Request Food
          </button>
        </div>
        <dialog id="update_modal" className="modal">
          <div className="modal-box max-w-md mx-auto">
            <form onSubmit={handleRequestform} className="flex flex-col gap-3">
              <input
                type="text"
                name="location"
                placeholder="Write your location"
                className="input input-bordered w-full"
              />
              <textarea
                name="whyneed"
                placeholder="Why need foods"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="number"
                placeholder="Contract Number"
                className="input input-bordered w-full"
              />

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() =>
                    document.getElementById("update_modal").close()
                  }
                >
                  Close
                </button>
                <input
                  type="submit"
                  value="Request"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
          Food Requests ({foodRequests.length})
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

                
              </tr>
            </thead>
            <tbody>
              {foodRequests.map((food, index) => (
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

                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
