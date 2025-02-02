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
    <HeroUINavbar maxWidth="xl" position="sticky">
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
                ⬅ Back to Search
              </Button>
            </NextLink>
          )}
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
