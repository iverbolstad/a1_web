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
      <div className="flex w-full h-[20vh] bg-[#E8EDDF] items-center justify-center space-x-36">
        {kunde.map((kundeItem, index) => (
          <div key={index} className="relative">
            <Image
              src={kundeItem.imageUrl}
              width={100}
              height={100}
              alt={""}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mb-5">
        <div className="w-2/3 my-10">
          <Carousel className="w-full">
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
          </Carousel>

        </div>
      </div> */}
    </div>
  );
};

export default EventsPage;
