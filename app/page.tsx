"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importing useRouter for navigating
import { Button, Input } from "@heroui/react";
import { SearchIcon } from "@/components/icons"; // Make sure this path matches where your SearchIcon is located

export default function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const router = useRouter();

  // Handle search submission
  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Redirect to the results page with the search query as part of the URL (or can use query params)
      router.push(`/results?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Handle category button click
  const handleCategorySearch = (category: string) => {
    router.push(`/results?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center justify-start mt-28 min-h-5 space-y-5 px-4">
        {/* Big Tagline - Centered */}
        <p className="text-center text-3xl sm:text-4xl font-bold text-black max-w-2xl mt-2">
          Helping you find the best cafes in Providence 🍵
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl rounded-md p-2">
          <Input
            isClearable
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
            classNames={{
              label: "hidden",
              input: [
                "w-full",
                "bg-transparent",
                "text-black",
                "focus:ring-0",
                "placeholder:text-gray-500",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: "bg-transparent",
            }}
            label="Search"
            placeholder="quiet spot with good matcha..."
            radius="none"
            startContent={
              <SearchIcon className="text-black pointer-events-none flex-shrink-0" />
            }
          />
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          variant="light"
          className="w-full text-black text-sm p-3 border border-black rounded-md"
        >
          Search
        </Button>

        {/* Category Buttons */}
        <div className="w-full max-w-xl flex flex-col items-start space-y-2 mt-4">
          <h2 className="text-lg font-semibold text-black">
            🐻 Drinking Providence
          </h2>
          <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl">
            <Button
              onClick={() => handleCategorySearch("Best Cafes for Co-working")}
              variant="light"
              className="w-full text-black text-sm p-3 border border-black rounded-md"
            >
              💻 Best Cafes for Co-working
            </Button>
            <Button
              onClick={() => handleCategorySearch("Best for Large Groups")}
              variant="light"
              className="w-full text-black text-sm p-3 border border-black rounded-md"
            >
              🥳 Best for Large Groups
            </Button>
            <Button
              onClick={() => handleCategorySearch("Open on Christmas")}
              variant="light"
              className="w-full text-black text-sm p-3 border border-black rounded-md"
            >
              🎄 Open on Christmas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
