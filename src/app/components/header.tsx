"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getLogo } from "../lib/sanity";
import { usePathname } from "next/navigation";

interface Logo {
  title: string;
  imageUrl: string;
}

export const Header = () => {
  const [logo, setLogo] = useState<Logo[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getLogo();
        setLogo(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    }

    fetchEvents();
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-10 text-center p-4 transition-all duration-300 bg-transparent`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            {logo[1]?.imageUrl && (
              <div
                className={isHomePage ? "" : "bg-[#206306]/60 p-2 rounded-lg"}
              >
                <Image
                  src={logo[1].imageUrl}
                  width={70}
                  height={70}
                  alt="Logo"
                  className="max-w-[150px] md:max-w-[250px]"
                  priority
                />
              </div>
            )}
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          <Link href={"/"}>
            <Button
              variant="link"
              className={isHomePage ? "text-white" : "text-black"}
            >
              Hjem
            </Button>
          </Link>
          <Link href={"/tjenester"}>
            <Button
              variant="link"
              className={isHomePage ? "text-white" : "text-black"}
            >
              Tjenester
            </Button>
          </Link>
          <Link href={"/omoss"}>
            <Button
              variant="link"
              className={isHomePage ? "text-white" : "text-black"}
            >
              Om oss
            </Button>
          </Link>
          <Link href={"/kontakt"}>
            <Button
              variant="yellow"
              className={`bg-[#fbc91b] text-black`}
              arrow
            >
              Kontakt
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 flex flex-col space-y-2">
          <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="w-full">
              Hjem
            </Button>
          </Link>
          <Link href={"/tjenester"} onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="w-full">
              Tjenester
            </Button>
          </Link>
          <Link href={"/omoss"} onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="w-full">
              Om oss
            </Button>
          </Link>
          <Link href={"/kontakt"} onClick={() => setIsMenuOpen(false)}>
            <Button variant="link" className="w-full">
              Kontakt
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
