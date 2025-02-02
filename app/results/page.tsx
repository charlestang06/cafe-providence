"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CafeCard from "@/components/CafeCard";
import cafes from "@/public/cafes.json";
import { Button } from "@heroui/react";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const category = searchParams.get("category")?.toLowerCase() || "";
  const [filteredResults, setFilteredResults] = useState<typeof cafes>([]);

  useEffect(() => {
    if (!query && !category) {
      setFilteredResults([]);
      return;
    }

    const results = cafes.filter(
      (cafe) =>
        cafe["address"].toLowerCase().includes(query) ||
        cafe["vibe"].toLowerCase().includes(query) ||
        cafe["seating"].toLowerCase().includes(query) ||
        cafe["wifi"].toLowerCase().includes(query) ||
        cafe["hours open"].toLowerCase().includes(query) ||
        cafe["rating"].toString().includes(query) ||
        (category && cafe["vibe"].toLowerCase().includes(category))
    );

    setFilteredResults(results);
  }, [query, category]);

  return (
    <div className="p-6">
      <Button
        onClick={() => router.push("/")}
        variant="light"
        className="text-black text-sm p-3 border border-black rounded-md mb-4"
      >
        ⬅ Back to Search
      </Button>

      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {filteredResults.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {filteredResults.map((cafe) => (
            <CafeCard
              key={cafe.name}
              name={cafe.name}
              imageUrl={cafe["image link"]}
              location={cafe.address}
              dineIn={cafe["dine in"]}
              delivery={cafe.delivery}
              hours={cafe["hours open"]}
              orderOnline={cafe["online ordering"] || ""}
              wifi={cafe.wifi}
              seating={cafe.seating}
              rating={cafe.rating}
              vibe={cafe.vibe}
            />
          ))}
        </div>
      ) : (
        <p>No results found for &quot;{query || category}&quot;.</p>
      )}
    </div>
  );
}
