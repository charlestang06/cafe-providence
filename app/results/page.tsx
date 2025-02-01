"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importing useRouter for navigation
import CafeCard from "@/components/CafeCard";
import cafes from "@/public/cafes.json"; // Adjust path to your actual product data

// Function to get 3 random cafes
const getRandomCafes = () => {
  const shuffled = cafes.sort(() => 0.5 - Math.random()); // Shuffle cafes
  return shuffled.slice(0, 3); // Get the first 3 cafes from the shuffled list
};

export default function ResultsPage() {
  const [randomCafes, setRandomCafes] = useState<typeof cafes>([]); // State for random cafes
  const router = useRouter();

  useEffect(() => {
    // Get 3 random cafes each time the component is mounted (this runs on every page load)
    const randomCafesList = getRandomCafes();
    setRandomCafes(randomCafesList); // Update state with random cafes
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Back button handler (always navigates back to the search page)
  const goBack = () => {
    router.push("/"); // Navigate to the search page (you can also use a path like `/search` if it's another route)
  };

  return (
    <main className="container mx-auto max-w-7xl pt-2 px-6 flex-grow">
      <section className="flex flex-col items-start justify-center gap-4 py-2 md:py-4">
        {/* Back Button */}
        <button
          onClick={goBack} // Navigates back to the search page
          className="w-full py-3 bg-transparent border border-gray-600 text-gray-600 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          ☕ Back to Search ☕
        </button>

        {/* Header for the List of Cafes */}
        <h1 className="text-2xl font-bold text-left mt-2">List of Cafes:</h1>

        {/* Map over cafes for the current page (only 3 random cafes) */}
        <div className="flex flex-col gap-4 mt-2">
          {randomCafes.map((cafe) => (
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
      </section>
    </main>
  );
}
