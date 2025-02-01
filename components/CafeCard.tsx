interface CafeCardProps {
  name: string;
  imageUrl: string;
  location: string;
  dineIn: boolean;
  delivery: boolean;
  aesthetic: string;
  hours: string;
  wifi: boolean;
  seating: string;
  noiseLevel: string;
}

export default function CafeCard({
  name,
  imageUrl,
  location,
  dineIn,
  delivery,
  aesthetic,
  hours,
  wifi,
  seating,
}: CafeCardProps) {
  return (
    <div className="border-b border-gray-300 py-3 w-full max-w-2xl">
      <div className="grid grid-cols-[auto,1fr] gap-3 items-center">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg object-cover"
          style={{ width: "140px", height: "140px" }}
        />
        <div>
          <div className="flex flex-row justify-between w-full">
            <h2 className="font-bold text-black flex flex-wrap items-center text-lg">
              {name}
            </h2>
          </div>
          <p className="text-gray-500 text-sm flex items-center">
            📍 {location}
          </p>
          <p className="text-sm">🎨 Aesthetic: {aesthetic}</p>
          <p className="text-sm">⏰ Hours: {hours}</p>
          <p className="text-sm">🪑 Seating: {seating}</p>
          <p className="text-sm">🍽️ Dine-in: {dineIn ? "Yes" : "No"}</p>
          <p className="text-sm">🚚 Delivery: {delivery ? "Yes" : "No"}</p>
          <p className="text-sm">📶 Wifi: {wifi ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
}
