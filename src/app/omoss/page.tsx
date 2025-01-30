"use client"

import Image from "next/image";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getImage } from "../lib/sanity";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Bilde {
    imageUrl: string;
    tekst: string;
}

export default function OmOss() {

    const [bilde, setBilde] = useState<Bilde[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const bilde = await getImage();
                setBilde(bilde);
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
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <h1 className="text-4xl font-bold text-gray-900">Om oss</h1>

            <div className="mt-8 lg:flex lg:gap-8">
                <div className="space-y-8 lg:w-1/2">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            Oppdag våre unike landskapskunnskaper
                        </h2>
                        <p className="text-xl text-gray-600">
                            Utforsk vårt utvalg av tjenester designet for å forvandle ditt
                            utendørsområde til et vakkert og bærekraftig landskap, skreddersydd
                            perfekt til dine behov og preferanser
                        </p>
                    </section>

                    <section className="space-y-6">
                        <p className="text-xl leading-relaxed text-gray-700">
                            Vi kan hjelpe deg med å ta vare på uteområder og parker. Vår
                            ekspertise ligger i drift og vedlikehold av parker, hager og
                            rekreasjonsområder. Vi tilbyr opparbeidelse av tomter,
                            prosjektutvikling av uterom, levering av steinprodukter,
                            anleggsarbeid m.m. Alt fra legging og vedlikehold av
                            natursteinsarbeider i brostein, skifer, granitt og lignende utføres
                            av våre dyktige fagarbeidere.
                        </p>
                    </section>
                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        {bilde.map((bildeItem, index) => (
                            <div key={index} className="relative aspect-square">
                                <Image
                                    src={bildeItem.imageUrl}
                                    alt={bildeItem.tekst}
                                    fill={true}
                                    className="object-cover rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}