"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { SearchIcon } from "@/components/icons";

export default function App() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const [searchEmptyError, setSearchEmptyError] = useState<boolean>(false);

  useEffect(() => {
    setSearchEmptyError(false);
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/results?query=${encodeURIComponent(searchQuery)}`);
    } else {
      setSearchEmptyError(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategorySearch = (category: string) => {
    if (category === "Open after 4PM") {
      router.push(`/results?category=isOpenAfter5PM`);
    } else {
      router.push(`/results?query=${encodeURIComponent(category)}`);
    }
  };  

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col items-center justify-start min-h-5 space-y-5 px-4">
        <p className="text-center text-3xl sm:text-4xl font-bold text-black leading-4">
          Find the best cafe for you, <br /> wherever you are.
        </p>

        <div className="w-full rounded-lg p-2 flex items-center space-x-2">
          <Input
            isClearable={true}
            onClear={() => setSearchQuery("")}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={handleKeyPress}
            isInvalid={searchEmptyError}
            errorMessage={searchEmptyError ? "Please enter a search query" : ""}
            labelPlacement="outside"
            classNames={{
              label: "hidden",
              input: [
                "w-full",
                "text-black",
                "focus:ring-0",
                "placeholder:text-gray-500",
              ],
            }}
            label="Search"
            className="rounded-lg"
            placeholder="quiet spot with good matcha..."
            startContent={
              <SearchIcon className="text-black pointer-events-none flex-shrink-0" />
            }
          />
          <Button
            onClick={handleSearch}
            variant="light"
            className="text-black text-sm p-3 border border-black rounded-md mt-6"
          >
            Search
          </Button>
        </div>

        {/* Suggested searches */}
        <div className="items-start space-y-2">
          <div className="justify-center gap-2 flex flex-col">
            {[
              "matcha lattes in a cozy atmosphere",
              "espresso and coffee for studying in a pinch",
              "brunch and breakfast sandwiches in Providence",
            ].map((category) => (
              <Button
                key={category}
                onPress={() => handleCategorySearch(category)}
                variant="light"
                className="inline-flex items-center justify-center text-gray-600 text-sm border border-black rounded-[5rem] border-[0.5px] px-[1rem]"
              >
                <p className="text-left">{category}</p>
              </Button>
            ))}
          </div>
        </div>

        {/* Category Buttons */}
        <div className="w-full max-w-xl flex flex-col items-start space-y-2">
          <h2 className="text-lg font-semibold text-black mt-[4rem]">
            🐻 Around Providence
          </h2>
          <div className="flex justify-center gap-2 w-full max-w-xl">
            {[
              { label: "💻 Best study spots", value: "study" },
              { label: "🥳 Trending cafes", value: "trendy" },
              { label: "⏰ Open after 4PM", value: "Open after 4PM" },
            ].map((category) => (
              <Button
                key={category.value}
                onClick={() => handleCategorySearch(category.value)}
                variant="light"
                className="flex-1 text-black text-sm py-[2rem] border border-black rounded-md border-[0.5px]"
              >
                <p className="text-left">{category.label}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
