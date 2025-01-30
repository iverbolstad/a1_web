"use client";

import { useEffect, useState } from "react";
import { getForside, getImage, getKundeLogo } from "../lib/sanity";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface Event {
  tekst: string;
  imageUrl: string;
}

interface Kunde {
  tekst: string;
  imageUrl: string;
}

interface Bilde {
  tekst: string;
  imageUrl: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [kunde, setKunde] = useState<Kunde[]>([]);
  const [bilde, setBilde] = useState<Bilde[]>([]);


  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getForside();
        const kunde = await getKundeLogo();
        const bilde = await getImage();
        setBilde(bilde);
        setKunde(kunde);
        setEvents(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="mt-10">
      <div className="my-20">
        {events.map((event, idx) => (
          <div className="flex w-full h-[70vh]" key={idx}>
            <div className="flex flex-col items-center justify-center w-1/2 bg-opacity-80 px-6 py-2">
              <div className="text-5xl">{event.tekst}</div>
              <Link href="/tjenester">
                <Button variant="outline" className="mt-8 bg-gray-800 text-white hover:bg-gray-700">
                  Utforsk våre tjenester
                </Button>
              </Link>
            </div>
            <div className="relative w-1/2 h-full">
              <Image
                src={event.imageUrl}
                fill={true}
                alt={""}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-16 bg-[#E8EDDF]">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Våre samarbeidspartnere</h2>
            <p className="text-gray-600">Vi er stolte av å samarbeide med disse fantastiske selskapene</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {kunde.map((kundeItem, index) => (
              <div 
                key={index} 
                className="relative group transition-transform hover:scale-105"
              >
                <Image
                  src={kundeItem.imageUrl}
                  width={120}
                  height={120}
                  alt={kundeItem.tekst || "Partner logo"}
                  className="object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <div className="w-2/3 my-10">
          {/* <Carousel className="w-full">
            <CarouselContent>
              {bilde.map((bildeItem, index) => (
                <CarouselItem key={index} className="flex items-center justify-center">
                  <div className="relative w-[400px] h-[300px]">
                    <Image
                      src={bildeItem.imageUrl}
                      alt={bildeItem.tekst}
                      fill={true}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
          <p>Her kommer pågående prosjekter</p>

        </div>
      </div>
    </div>
  );
};

export default EventsPage;
