"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// interface Logo {
//   title: string;
//   imageUrl: string;
// }

export const Header = () => {
  // const [logo, setLogo] = useState<Logo[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       // const data = await getLogo();
  //       // setLogo(data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     } finally {
  //     }
  //   }

  //   fetchEvents();
  // }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-10 text-center p-4">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          {/* <Link href={"/"}>
            {logo[1]?.imageUrl && (
              <Image src={logo[1].imageUrl} width={250} height={70} alt="Logo" className="max-w-[150px] md:max-w-[250px]" priority />
            )}
          </Link> */}
          <Link href={"/"}>
            <p className="text-white font-bold text-xl md:text-xl">
              Anleggsgartner 1
            </p>
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
        <div className="hidden md:flex items-center space-x-4">
          <Link href={"/"}>
            <Button variant="link" className="text-white">Hjem</Button>
          </Link>
          <Link href={"/tjenester"}>
            <Button variant="link" className="text-white">Tjenester</Button>
          </Link>
          <Link href={"/omoss"}>
            <Button variant="link" className="text-white">Om oss</Button>
          </Link>
          <Link href={"/kontakt"}>
            <Button variant="yellow" className="text-black bg-[#fbc91b]" arrow>Kontakt</Button>
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
