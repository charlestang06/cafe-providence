"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import CafeCard from "@/components/CafeCard";
import cafes from "@/public/cafes.json";
import { Suspense } from "react";
import { Spinner } from "@heroui/spinner";
import ReactConfetti from "react-confetti";

function Results() {
  const { width, height } = useWindowSize();
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const category = searchParams.get("category")?.toLowerCase() || "";
  const [filteredResults, setFilteredResults] = useState<typeof cafes>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!query && category !== "isopenafter5pm") {
      setFilteredResults([]);
      return;
    }

    const results = cafes.filter((cafe) => {
      const hours = cafe["hours open"].toLowerCase();
      const isOpenAfter5pm =
        /(\d{2}):(\d{2})-(\d{2}):(\d{2})/.test(hours) &&
        parseInt(hours.split("-")[1].split(":")[0]) >= 17;

      const matchesQuery =
        cafe["address"].toLowerCase().includes(query) ||
        cafe["vibe"].toLowerCase().includes(query) ||
        cafe["seating"].toLowerCase().includes(query) ||
        cafe["wifi"].toLowerCase().includes(query) ||
        cafe["rating"].toString().includes(query) ||
        cafe["keywords"]?.toLowerCase().includes(query) ||
        cafe["keywords"]
          .split(", ")
          .some((keyword) => query.toLowerCase().includes(keyword)) ||
        (category && cafe["vibe"].toLowerCase().includes(category));

      // const matchesCategory =
      //   category === "isopenafter5pm" ? isOpenAfter5pm : false;

      // return (
      //   matchesQuery && (category !== "isopenafter5pm" ? matchesCategory : true)
      // );
      return matchesQuery;
    });

    setFilteredResults(results);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  }, [query, category]);

  return (
    <div className="pb-[5rem] relative">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>

      {filteredResults.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {showConfetti && <ReactConfetti width={width} height={height} />}
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
        <div className="flex justify-center py-6">
          <Spinner color="warning" label="Loading..." />
        </div>
      )}
    </div>
  );
}

export default function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 10);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center py-6">
          {isLoading && <Spinner color="warning" label="Loading..." />}
          {!isLoading && <p>Please refine your search query.</p>}
        </div>
      }
    >
      <Results />
    </Suspense>
  );
}
