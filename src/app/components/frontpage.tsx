"use client";

import { useEffect, useState } from "react";
import {
  getForside,
  getEvents,
  getTjenester,
} from "../lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceCard from "./cards/serviceCard";
import ProjectCard from "./cards/projectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HomePage {
  tekst: string;
  imageUrl: string;
}

// interface Kunde {
//   tekst: string;
//   imageUrl: string;
// }

interface Event {
  title: string;
  tekst: string;
  imageUrl: string;
  ongoing: boolean;
}

interface Service {
  imageUrl: string;
  beskrivelse: string;
  title: string;
}

const FrontPage = () => {
  const [homePage, setHomePage] = useState<HomePage[]>([]);
  const [loading, setLoading] = useState(true);
  // const [kunde, setKunde] = useState<Kunde[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await getForside();
        // const kunde = await getKundeLogo();
        const events = await getEvents();
        const services = await getTjenester();
        // setKunde(kunde);
        setHomePage(data);
        setEvents(events);
        setServices(services);
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
                  <Button variant="green" arrow>
                    Våre tjenester
                  </Button>
                </Link>
                <Link href="/omoss">
                  <Button variant="yellow" arrow>
                    Om oss
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Services */}
        <div className="relative m-20 space-y-10">
          <Link href="/tjenester">
            <Button variant="greenoutline" size="bigdef" className="">
              Våre tjenester
            </Button>
          </Link>
          <div className="">
            <p className="text-5xl font-bold">
              Vi tilbyr ulike tjenester basert på ditt behov
            </p>
          </div>
          <Carousel className="items-center justify-center">
            <CarouselContent className="">
              {services.map((service, idx) => (
                <CarouselItem className="md:basis-1/3 p-6" key={idx}>
                  <ServiceCard
                    title={service.title}
                    imageUrl={service.imageUrl}
                    text={service.beskrivelse}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Projects */}
        <div className="space-y-10 bg-[#fef4d1]">
          <div className="m-20 space-y-10 py-20">
            <Link href="/tjenester">
              <Button variant="greenoutline" size="bigdef" className="">
                Pågående og tidligere prosjekter
              </Button>
            </Link>
            <div className="flex justify-between items-center w-full">
              <p className="text-5xl font-bold flex-1">Våre prosjekter</p>
              <p className="text-[#767873] flex-1 max-w-[50%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veni.
              </p>
            </div>
            <div>
              {/* prosjekter carousel */}
              <Carousel className="items-center justify-center">
                <CarouselContent className="">
                  {[...events]
                    .sort((a, b) => (b.ongoing ? 1 : 0) - (a.ongoing ? 1 : 0))
                    .map((event, idx) => (
                      <CarouselItem className="md:basis-1/4 p-6" key={idx}>
                        <ProjectCard
                          title={event.title}
                          imageUrl={event.imageUrl}
                          text={event.tekst}
                          ongoing={event.ongoing}
                        />
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
