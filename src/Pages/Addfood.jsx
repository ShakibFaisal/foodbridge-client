import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";
import img from "../assets/hero.avif";
import { use } from "react";

const Addfood = () => {
  const { user } = use(AuthContext);
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const food_name = e.target.food_name.value;

    const food_image = e.target.food_image.value;

    const food_quantity = e.target.food_quantity.value;

    const pickup_location = e.target.pickup_location.value;

    const expire_date = e.target.expire_date.value;

    const additional_notes = e.target.additional_notes.value;

    const donator_name = user.displayName;

    const donator_email = user.email;

    const donator_image = user.photoURL;

    const food_status = "Available";

    const foodData = {
      food_name: food_name,

      food_image: food_image,

      food_quantity: food_quantity,

      pickup_location: pickup_location,

      expire_date: expire_date,

      additional_notes: additional_notes,

      donator_name: donator_name,

      donator_email: donator_email,

      donator_image: donator_image,

      food_status: food_status,
    };

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    })
      .then((res) => {
        res.json();
        toast.success("Food added successfully!");
        e.target.reset;
      })
      .catch(() => {
        toast.error("Error submitting food");
      });
  };

  return (
    <div className="flex max-w-11/12 mx-auto mt-[100px] p-8 bg-[#e0727b]  rounded-2xl   flex-col gap-5 md:flex-row items-center justify-center min-h-screen px-6 md:px-12 ">
      <div className="w-full md:w-1/2   mb-8 md:mb-0">
        <img
          src={img}
          alt="Add Food Illustration"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Add Food
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label>Food Name</label>
          <input
            type="text"
            name="food_name"
            placeholder="Food Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label>Food Image</label>
          <input
            type="text"
            name="food_image"
            placeholder="Food Image URL "
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label>Food Quantity</label>
          <input
            type="number"
            name="food_quantity"
            placeholder="Food Quantity "
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label>Pickup Location</label>
          <input
            type="text"
            name="pickup_location"
            placeholder="Pickup Location"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label>Expire Date</label>
          <input
            type="date"
            name="expire_date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label>Additional Notes</label>
          <textarea
            name="additional_notes"
            placeholder="Additional Notes"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-[#C74A54] transition"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addfood;
