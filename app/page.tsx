"use client"; 

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { Button, Card, CardHeader, CardBody, CardFooter, Divider, Image, Input } from "@heroui/react";

export const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1.5em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.5em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default function App() {
  return (
    <div className="flex flex-col items-center justify-start mt-28 min-h-5 space-y-5 px-4">
      {/* Big Tagline - Centered */}
      <p className="text-center text-3xl sm:text-4xl font-bold text-black max-w-2xl mt-2">
        Helping you find the best cafes in Providence 🍵
      </p>

      <div className="w-full max-w-xl rounded-md p-2">
        <Input
          isClearable
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

      <div className="w-full max-w-xl flex flex-col items-start space-y-2">
        <h2 className="text-lg font-semibold text-black">
          🐻 Drinking Providence
        </h2>

        <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl">
          <Button variant="light" className="w-full text-black text-sm p-3 border border-black rounded-md">
            💻 Best Cafes for Co-working
          </Button>
          <Button variant="light" className="w-full text-black text-sm p-3 border border-black rounded-md">
            🥳 Best for Large Groups
          </Button>
          <Button variant="light" className="w-full text-black text-sm p-3 border border-black rounded-md">
            🎄 Open on Christmas
          </Button>
        </div>
      </div>
    </div>
  );
}