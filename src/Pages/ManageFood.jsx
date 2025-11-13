


import React, { useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageFood = () => {
  const { user } = React.useContext(AuthContext);
  const [myfood, setMyFood] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3000/userfood?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyFood(data));
    }
  }, [user]);

  const openUpdateModal = (food) => {
    setSelectedFood(food);
    document.getElementById("update_modal").showModal();
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const updatedFood = {
      ...selectedFood,
      food_name: e.target.food_name.value,
      food_image: e.target.food_image.value,
      food_quantity: e.target.food_quantity.value,
      pickup_location: e.target.pickup_location.value,
      expire_date: e.target.expire_date.value,
      additional_notes: e.target.additional_notes.value,
    };

    const res = await fetch(
      `http://localhost:3000/userfood/${selectedFood._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFood),
      }
    );

    if (res.ok) {
      setMyFood(
        myfood.map((f) => (f._id === selectedFood._id ? updatedFood : f)),
        toast.success("Update Successful")
      );
      document.getElementById("update_modal").close();
      setSelectedFood(null);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/food/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });

              const remainingFood = myfood.filter((food) => food._id !== id);
              setMyFood(remainingFood);
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-6 text-center text-primary">
        My Added Foods ({myfood.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse text-left bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-sm sm:text-base">SL No</th>
              <th className="p-3 text-sm sm:text-base">Food</th>
              <th className="p-3 text-sm sm:text-base">Seller</th>
              <th className="p-3 text-sm sm:text-base">Quantity</th>
              <th className="p-3 text-sm sm:text-base">Expire Date</th>
              <th className="p-3 text-sm sm:text-base">Status</th>
              <th className="p-3 text-sm sm:text-base">Update</th>
              <th className="p-3 text-sm sm:text-base">Remove</th>
            </tr>
          </thead>
          <tbody>
            {myfood.map((food, index) => (
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
                  <p className="font-medium truncate">{user.displayName}</p>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">
                    {user.email}
                  </p>
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
                  <button
                    onClick={() => openUpdateModal(food)}
                    className="w-full sm:w-auto border-2 border-green-500 text-green-500 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-green-100 text-xs sm:text-sm"
                  >
                    Update
                  </button>
                </td>
                <td className="p-2 sm:p-3">
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="w-full sm:w-auto border-2 border-red-500 text-red-600 px-2 sm:px-3 py-1 sm:py-1.5 rounded hover:bg-red-100 text-xs sm:text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <dialog id="update_modal" className="modal">
        <div className="modal-box max-w-md mx-auto">
          {selectedFood && (
            <form
              onSubmit={handleUpdateSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="text"
                name="food_name"
                defaultValue={selectedFood.food_name}
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="food_image"
                defaultValue={selectedFood.food_image}
                placeholder="Food Image URL"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="food_quantity"
                defaultValue={selectedFood.food_quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="pickup_location"
                defaultValue={selectedFood.pickup_location}
                placeholder="Pickup Location"
                className="input input-bordered w-full"
              />
              <input
                type="date"
                name="expire_date"
                defaultValue={selectedFood.expire_date}
                className="input input-bordered w-full"
              />
              <textarea
                name="additional_notes"
                defaultValue={selectedFood.additional_notes}
                placeholder="Additional Notes"
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
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </form>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default ManageFood;
