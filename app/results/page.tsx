"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import CafeCard from "@/components/CafeCard";
import cafes from "@/public/cafes.json"; 

const thayerStreetCafes = [
  {
    name: "Aroma Joe's",
    "dine in": "Yes",
    "take out": "Yes",
    delivery: "Yes",
    "hours open": "7:00 - 21:00",
    "online ordering": "aromajoes.com",
    address: "257 Thayer St, Providence, RI 02906",
    rating: 4.8,
    wifi: "Yes",
    seating: "5-8",
    vibe: "Small, popular cafe for regulars on Thayer serving drinks and breakfast foods.",
    "image link":
      "https://snworksceo.imgix.net/bdh/194c13c9-1d94-453f-b06a-387c35168a7c.sized-1000x1000.jpeg?w=800&dpr=2&ar=16%3A9&fit=crop&crop=faces",
  },
  {
    name: "Sydney Cafe (Thayer)",
    "dine in": "Yes",
    "take out": "Yes",
    delivery: "No",
    "hours open": "8:00 - 18:30",
    "online ordering": "https://www.sydneypvd.com/",
    address: "300 Thayer St, Providence, RI 02912",
    rating: 3.6,
    wifi: "Yes",
    seating: "15-20",
    vibe: "Australian-inspired café serving expertly brewed coffee, fresh pastries, and wholesome brunch options in a stylish, airy space.",
    "image link":
      "https://static.wixstatic.com/media/6c3b8b_33392a3fa22941cc93c02e05ccfd6c30~mv2.jpg/v1/fill/w_266,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/6c3b8b_33392a3fa22941cc93c02e05ccfd6c30~mv2.jpg",
  },
  {
    name: "Starbucks (Thayer)",
    "dine in": "Yes",
    "take out": "Yes",
    delivery: "No",
    "hours open": "8:00 - 16:00",
    "online ordering": "starbucks.com",
    address: "1 Financial Plaza, Providence, RI 02903",
    rating: 4.0,
    wifi: "Yes",
    seating: "15-20",
    vibe: "A busy, familiar chain location on Thayer Street, popular among students and locals for reliable coffee and a place to study.",
    "image link":
      "https://snworksceo.imgix.net/bdh/7c5c8758-8011-43d3-9f32-775ce3a0ad34.sized-1000x1000.JPG?w=800",
  },
];

const getRandomCafes = (cafes: any[]) => {
  const shuffled = cafes.sort(() => 0.5 - Math.random()); 
  return shuffled.slice(0, 3);
};

export default function ResultsPage() {
  const [cafesToShow, setCafesToShow] = useState<typeof cafes>([]); 
  const router = useRouter();

  const searchQuery = "cafes on Thayer Street"; 

  useEffect(() => {
    if (searchQuery.toLowerCase() === "cafes on thayer street") {
      setCafesToShow(thayerStreetCafes);
    } else {
      const randomCafesList = getRandomCafes(cafes);
      setCafesToShow(randomCafesList);
    }
  }, [searchQuery]); 

  const goBack = () => {
    router.push("/"); 
  };

  return (
    <main className="container mx-auto max-w-7xl pt-2 px-6 flex-grow">
      <section className="flex flex-col items-start justify-center gap-4 py-2 md:py-4">
        <button
          onClick={goBack} 
          className="w-full py-3 bg-transparent border border-gray-600 text-gray-600 rounded-md hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          ☕ Back to Search ☕
        </button>

        <h1 className="text-2xl font-bold text-left mt-2">
          {searchQuery.toLowerCase() === "cafes on thayer street"
            ? "Cafes on Thayer Street"
            : "Random Cafes:"}
        </h1>

        <div className="flex flex-col gap-4 mt-2">
          {cafesToShow.map((cafe) => (
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
              noiseLevel={""} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}
