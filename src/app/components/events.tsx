"use client";

import { useEffect, useState } from "react";
import { getForside, getKundeLogo, getEvents } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface HomePage {
  tekst: string;
  imageUrl: string;
}

interface Kunde {
  tekst: string;
  imageUrl: string;
}

interface Event {
  title: string;
  tekst: string;
  imageUrl: string;
}

const EventsPage = () => {
  const [homePage, setHomePage] = useState<HomePage[]>([]);
  const [loading, setLoading] = useState(true);
  const [kunde, setKunde] = useState<Kunde[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getForside();
        const kunde = await getKundeLogo();
        const events = await getEvents();
        setKunde(kunde);
        setHomePage(data);
        setEvents(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Laster...</p>;
  }

  return (
    <>
      <div className="">
        {homePage.map((event, idx) => (
          <div className="flex flex-col md:flex-row w-full min-h-[50vh] md:h-[70vh]" key={idx}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={event.imageUrl}
                fill={true}
                alt={""}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-8">
                <div className="text-3xl md:text-5xl text-left font-semibold">{event.tekst}</div>
                <div className="flex space-x-4 mt-8">
                  <Link href="/tjenester">
                    <Button variant="green" className="">
                      Våre tjenester
                    </Button>
                  </Link>
                  <Link href="/omoss">
                    <Button variant="yellow" className="">
                      Om oss
                    </Button>
                  </Link>
                </div>
              </div>
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
      <div className="container mx-auto px-4 my-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Pågående prosjekter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
