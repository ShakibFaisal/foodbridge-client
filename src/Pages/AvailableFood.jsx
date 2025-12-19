import React, { useState, Suspense } from "react";
import { useLoaderData } from "react-router";
import Loader from "../component/Loader";
import FoodCard from "../component/FoodCard";
import NoFoodFound from "../component/NoFoodFound";

const ITEMS_PER_PAGE = 8;

const AvailableFood = () => {
  const data = useLoaderData();

  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Filter only after clicking Search
  const filteredData = data.filter((item) =>
    item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔎 Search button handler
  const handleSearch = () => {
    setSearchTerm(inputValue);
    setCurrentPage(1);
  };

  // 📄 Pagination logic
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-11/12 mx-auto">

      <h3 className="text-secondary text-4xl text-center font-extrabold mt-9">
        Available Foods
      </h3>

      {/* 🔍 Search with Button */}
      <div className="flex justify-center gap-3 mt-6 px-4">
        <input
          type="text"
          placeholder="Search foods..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-secondary"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="px-6 py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/90"
        >
          Search
        </button>
      </div>

      <Suspense fallback={<Loader />}>
        {currentItems.length > 0 ? (
          <>
            {/* 🧩 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 px-5 py-[50px]">
              {currentItems.map((item) => (
                <FoodCard key={item._id} data={item} />
              ))}
            </div>

            {/* 📄 Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mb-10 flex-wrap">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages).keys()].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page + 1
                        ? "bg-secondary text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {page + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex justify-center items-center h-[400px] px-5">
            <NoFoodFound />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default AvailableFood;
