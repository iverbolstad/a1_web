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
            <div className="flex items-center justify-center w-1/2 bg-opacity-80 px-6 py-2 text-5xl">
              {event.tekst}
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
      <div className="flex justify-center mb-5">
        <div className="w-2/3 my-10">
          {/* <p className="mt-10 text-3xl font-semibold">
            Oppdag våre unike landskapskunnskaper
          </p>
          <p className="mt-5 text-xl">
            Utforsk vårt utvalg av tjenester designet for å forvandle ditt
            utendørsområde til et vakkert og bærekraftig landskap, skreddersydd
            perfekt til dine behov og preferanser
          </p> */}
          {/* <p className="mt-10 text-3xl font-semibold">Om oss</p>
          <p className="mt-5 text-xl">
            Vi kan hjelpe deg med å ta vare på uteområder og parker. Vår
            ekspertise ligger i drift og vedlikehold av parker, hager og
            rekreasjonsområder. Vi tilbyr opparbeidelse av tomter,
            prosjektutvikling av uterom, levering av steinprodukter,
            anleggsarbeid m.m. Alt fra legging og vedlikehold av
            natursteinsarbeider i brostein, skifer, granitt og lignende utføres
            av våre dyktige fagarbeidere. Vi har gjort opparbeidelse og
            vedlikeholdsjobber i blant annet hageanlegg, parker, torg,
            kirkegårder og idrettsanlegg. En fast vedlikeholdsavtale med oss
            sikrer deg at grøntområder og uteanlegg alltid vil fremstå som
            ryddige, pene og trygge.
          </p> */}
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
      </div>
      {/* <div className="flex justify-center mb-5">
        <div className="border">hei</div>
        <div className="border">hei</div>
        <div className="border">hei</div>
      </div> */}
    </div>
  );
};

export default EventsPage;
