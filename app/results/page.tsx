"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importing useRouter for navigating
import CafeCard from "@/components/CafeCard";
import cafes from "@/public/cafes.json"; // Adjust path if needed

export default function Home() {
  const router = useRouter(); // Initialize the router
  const [currentPage, setCurrentPage] = useState(1);
  const cafesPerPage = 3;

  // Calculate the start and end index for the current page
  const indexOfLastCafe = currentPage * cafesPerPage;
  const indexOfFirstCafe = indexOfLastCafe - cafesPerPage;

  // Get the cafes to be displayed on the current page
  const currentCafes = cafes.slice(indexOfFirstCafe, indexOfLastCafe);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage * cafesPerPage < cafes.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Back button handler
  const goBack = () => {
    router.back(); // This will take the user to the previous page in the browser history
  };

  return (
    <main className="container mx-auto max-w-7xl pt-2 px-6 flex-grow">
      <section className="flex flex-col items-start justify-center gap-4 py-2 md:py-4">
        {/* Back Button */}
        <button
          onClick={goBack}
          className="w-full py-3 bg-transparent border border-gray-600 text-gray-600 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          ☕ Back to Search ☕
        </button>

        {/* Header for the List of Cafes */}
        <h1 className="text-2xl font-bold text-left mt-2">List of Cafes:</h1>

        {/* Map over cafes for the current page */}
        <div className="flex flex-col gap-4 mt-2">
          {currentCafes.map((cafe) => (
            <CafeCard
              key={cafe.name}
              name={cafe.name}
              imageUrl={cafe["image link"]}
              location={cafe.address}
              dineIn={cafe["dine in"] === "Yes"}
              delivery={cafe.delivery === "Yes"}
              aesthetic={cafe.vibe || "No aesthetic information"}
              hours={cafe["hours open"]}
              wifi={cafe.wifi === "Yes"}
              seating={cafe.seating}
              noiseLevel={""} // Update as necessary
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-4 w-full">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 w-24 bg-transparent border border-gray-600 text-gray-600 rounded-md disabled:opacity-50 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Previous
          </button>

          {/* Pagination Text */}
          <span className="text-lg font-medium text-gray-700 mx-4">
            Page {currentPage} of {Math.ceil(cafes.length / cafesPerPage)}
          </span>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage * cafesPerPage >= cafes.length}
            className="px-4 py-2 w-24 bg-transparent border border-gray-600 text-gray-600 rounded-md disabled:opacity-50 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
}
