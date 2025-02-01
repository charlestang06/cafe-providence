import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

interface CafeCardProps {
  name: string;
  imageUrl: string;
  website: string;
  location: string;
  dineIn: boolean;
  delivery: boolean;
  aesthetic: string;
  hours: string;
  wifi: boolean;
  outlets: boolean;
  foodLink: string;
  matcha: boolean;
  seating: string;
  noiseLevel: string;
  instagram: string;
}

export default function CafeCard({
  name,
  imageUrl,
  website,
  location,
  dineIn,
  delivery,
  aesthetic,
  hours,
  wifi,
  outlets,
  foodLink,
  matcha,
  seating,
  noiseLevel,
  instagram,
}: CafeCardProps) {
  return (
    <div className="border-b border-gray-300 py-5 w-full max-w-2xl">
      <div className="grid grid-cols-[auto,1fr] gap-4 items-center">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg object-cover"
          style={{ width: "90px", height: "90px" }}
        />
        <div>
          <div className="flex flex-row justify-between w-full">
            <h2 className="font-bold text-black flex flex-wrap items-center text-lg">
              <Link href={website} className="hover:underline">
                {name}
              </Link>
            </h2>
          </div>
          <p className="text-gray-500 text-sm flex items-center">
            📍 {location}
          </p>
          <p className="text-sm">Aesthetic: {aesthetic}</p>
          <p className="text-sm">Hours: {hours}</p>
          <p className="text-sm">Seating: {seating}</p>
          <p className="text-sm">Noise Level: {noiseLevel}</p>
          <p className="text-sm">
            Dine-in: {dineIn ? "Yes" : "No"}, Delivery:{" "}
            {delivery ? "Yes" : "No"}
          </p>

          {/* Icons section */}
          <div className="mt-4 flex flex-wrap gap-3 text-black">
            {wifi && (
              <span className="inline-flex items-center text-xs">📶 Wifi</span>
            )}
            {outlets && (
              <span className="inline-flex items-center text-xs">
                🔌 Outlets
              </span>
            )}
            {foodLink && (
              <a
                href={foodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-black underline hover:text-gray-600"
              >
                🍽️ Food Menu
              </a>
            )}
            {matcha && (
              <span className="inline-flex items-center text-xs text-green-700">
                🍵 Matcha Available
              </span>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-blue-500 underline hover:text-blue-700"
              >
                📸 Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
