"use client";

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CafeCard from "@/components/CafeCard";

export default function Home() {
  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      {/* Header for the List of Cafes */}
      <h1 className="text-2xl font-bold mt-12 text-left">List of Cafes:</h1>
      {/* Cafe Cards */}
      <CafeCard
        name="Cafe Placeholder 1"
        imageUrl="https://via.placeholder.com/150"
        website="#"
        location="Location"
        dineIn={true}
        delivery={false}
        aesthetic="Cozy and Rustic"
        hours="8:00 AM - 10:00 PM" wifi={false} outlets={false} foodLink={""} matcha={false} seating={""} noiseLevel={""} instagram={""}      />
    </section>
  );
}
