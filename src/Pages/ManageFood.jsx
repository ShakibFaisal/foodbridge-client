import React, { useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import Swal from 'sweetalert2';

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
        myfood.map((f) => (f._id === selectedFood._id ? updatedFood : f))
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
                text: "Your bid has been deleted.",
                icon: "success",
              });

             
              const remainingfood = myfood.filter((food) => food._id !== id);
              setMyFood(remainingfood)
            }
          });
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4 text-center text-primary my-7">
        My Added Foods {myfood.length}
      </h2>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">SL No</th>
            <th className="p-3">Food</th>
            <th className="p-3">Seller</th>
            <th className="p-3">Quantity</th>
            <th className="p-3">Expire Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {myfood.map((food, index) => (
            <tr key={food._id} className="border-b border-black/30 ">
              <td className="p-3">{index + 1}</td>
              <td className="p-3 flex items-center gap-3">
                <img
                  src={food.food_image}
                  alt={food.food_name}
                  className="w-10 h-10 rounded object-cover"
                />
                <div>
                  <p className="font-medium">{food.food_name}</p>
                </div>
              </td>
              <td className="p-3">
                <p className="font-medium">{user.displayName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </td>
              <td className="p-3">{food.food_quantity}</td>
              <td className="p-3">{food.expire_date}</td>
              <td className="p-3">
                <span
                  className={`border-2  p-2 rounded-[10px] ${
                    food.food_status === "Available"
                      ? "border-green-500 text-green-500 hover:bg-green-200"
                      : "border-orange-400 text-orange-400 hover:bg-amber-200"
                  }`}
                >
                  {food.food_status}
                </span>
              </td>
              <td className="p-3">
                <button
                  className="border-2 text-green-500 border-green-500 px-3 py-1 rounded hover:bg-green-200"
                  onClick={() => openUpdateModal(food)}
                >
                  Update
                </button>
              </td>
              <td className="p-3">
                <button
                  onClick={() => {
                    handleDelete(food._id);
                  }}
                  className="border-2 text-red-600 border-red-500 px-3 py-1 rounded hover:bg-red-200"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          {selectedFood && (
            <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-3">
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
                  className="btn"
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
