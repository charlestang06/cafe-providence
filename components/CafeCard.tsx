import Link from "next/link";

interface CafeCardProps {
  name: string;
  imageUrl: string;
  location: string;
  dineIn: string;
  delivery: string;
  hours: string;
  orderOnline: string;
  wifi: string;
  seating: string;
  rating: number;
  vibe: string;
}

export default function CafeCard({
  name,
  imageUrl,
  location,
  dineIn,
  delivery,
  hours,
  orderOnline,
  wifi,
  seating,
  rating,
  vibe,
}: CafeCardProps) {
  return (
    <div className="border-b border-gray-300 py-3 w-full">
      <div className="grid grid-cols-[auto,1fr] gap-3 items-center">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg object-cover"
          style={{ width: "140px", height: "140px" }}
        />
        <div>
          <h2 className="font-bold text-black text-lg">{name}</h2>
          <p className="text-gray-500 text-sm">📍 {location}</p>
          <p className="text-sm">☕ Vibe: {vibe}</p>
          <p className="text-sm">⭐ Rating: {rating}</p>
          <p className="text-sm">⏰ Hours: {hours}</p>
          <p className="text-sm">🪑 Seating: {seating}</p>
          <p className="text-sm">🍽️ Dine-in: {dineIn}</p>
          <p className="text-sm">🚚 Delivery: {delivery}</p>
          <p className="text-sm">📶 Wi-Fi: {wifi}</p>
          {orderOnline && (
            <p className="text-sm">
              🛒 <Link href={orderOnline} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Order Online</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}