"use client";

import { useEffect, useState } from "react";
import { getForside, getKundeLogo, getEvents } from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceCard from "./serviceCard";

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

const FrontPage = () => {
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
          <div className="relative w-full h-screen" key={idx}>
            {/* Background Image */}
            <Image
              src={event.imageUrl}
              fill={true}
              alt="Background Image"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f08] to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-8">
              <div className="text-3xl md:text-5xl text-left font-semibold">
                {event.tekst}
              </div>
              <div className="flex space-x-4 mt-8">
                <Link href="/tjenester">
                  <Button variant="green" arrow>Våre tjenester</Button>
                </Link>
                <Link href="/omoss">
                  <Button variant="yellow" arrow>Om oss</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div>
            {/* Servicecards */}
            <ServiceCard title="Test" imageUrl="test" text="Hej" />
        </div>
      </div>
    </>
  );
};

export default FrontPage;
