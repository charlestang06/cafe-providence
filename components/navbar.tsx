"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@heroui/react";

export const Navbar = () => {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="bg-background">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo className="mt-[0.8rem]" />
            <p className="font-bold text-inherit">Cafe Providence</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          {!isRoot && (
            <NextLink className="flex" href="/">
              <Button
                className="text-black text-sm p-3 border border-black rounded-md"
                variant="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>{" "}
                Back to Search
              </Button>
            </NextLink>
          )}
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
