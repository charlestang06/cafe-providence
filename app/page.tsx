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
        <p className="text-center text-3xl sm:text-4xl font-bold text-black mt-2 leading-4">
          Find the best cafe for you, <br /> wherever you are.
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
        <div className="w-full max-w-xl flex flex-col items-start space-y-2">
          <h2 className="text-lg font-semibold text-black mt-[4rem]">
            🐻 Around Providence
          </h2>
          <div className="flex justify-center gap-2 w-full max-w-xl">
            <Button
              onClick={() => handleCategorySearch("Best study spots")}
              variant="light"
              className="flex-1 text-black text-sm py-[2rem] border border-black rounded-md border-[0.5px]"
            >
              <p className="text-left">
                💻 <br /> Best study spots
              </p>
            </Button>
            <Button
              onClick={() => handleCategorySearch("Best for hangouts")}
              variant="light"
              className="flex-1 text-black text-sm py-[2rem]   border border-black rounded-md border-[0.5px]"
            >
              <p className="text-left">
                🥳 <br /> Best for hangouts
              </p>
            </Button>
            <Button
              onClick={() => handleCategorySearch("Open on Christmas")}
              variant="light"
              className="flex-1 text-black text-sm py-[2rem] border border-black rounded-md border-[0.5px]"
            >
              <p className="text-left">
                🎄 <br /> Open on Christmas
              </p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
