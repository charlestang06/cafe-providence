import React from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaStar,
  FaExternalLinkAlt,
  FaWifi,
} from "react-icons/fa";

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

const Chip = ({
  children,
  variant = "default",
  active = true,
  href,
  onClick,
  size = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "rating" | "link" | "subtle";
  active?: boolean;
  href?: string;
  onClick?: () => void;
  size?: "default" | "small";
}) => {
  const baseStyles = "rounded-full font-medium transition-all duration-200";
  const sizeStyles = {
    default: "px-4 py-2 text-base",
    small: "px-2 py-1 text-sm",
  };

  const variantStyles = {
    default: active
      ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
      : "bg-gray-50 text-gray-500 border border-gray-200",
    rating: "bg-amber-100 text-amber-600 flex items-center gap-2",
    link: "bg-gray-50 text-gray-500 hover:bg-gray-100 flex items-center gap-2",
    subtle: active
      ? "bg-blue-100 text-blue-600 flex items-center gap-1"
      : "bg-gray-50 text-gray-400 flex items-center gap-1",
  };

  const content = (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {children}
      {variant === "link" && <FaExternalLinkAlt className="w-3.5 h-3.5" />}
    </span>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
};

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
    <div className="p-6 hover:shadow-lg transition-shadow duration-200 w-full border-b border-gray-200 pb-8 last:border-b-0 bg-transparent">
      <div className="grid grid-cols-[auto,1fr] gap-8 items-start">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-lg object-cover w-64 h-64 shadow-md"
        />
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-gray-900 text-2xl">{name}</h2>
            <div className="flex items-center gap-2">
              <Chip variant="rating">
                <FaStar className="w-4 h-4" />
                {rating.toFixed(1)}
              </Chip>
              <Chip variant="subtle" size="small" active={wifi === "Yes"}>
                <FaWifi className="w-3.5 h-3.5" />
                {wifi === "Yes" ? "WiFi" : "No WiFi"}
              </Chip>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 text-lg">
            <FaMapMarkerAlt className="text-gray-400 w-4 h-4" />
            {location}
          </div>

          <div className="text-gray-600 text-lg">{vibe}</div>

          <div className="flex flex-wrap gap-3">
            <Chip>Hours: {hours}</Chip>
            <Chip>Seating: {seating}</Chip>

            <Chip active={dineIn === "Yes"}>
              {dineIn === "Yes" ? "Dine-in" : "No Dine-in"}
            </Chip>

            <Chip active={delivery === "Yes"}>
              {delivery === "Yes" ? "Delivery" : "No Delivery"}
            </Chip>

            {orderOnline ? (
              <Chip href={orderOnline} variant="link">
                Order Online
              </Chip>
            ) : (
              <Chip variant="default" active={false}>
                No Online Order
              </Chip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
