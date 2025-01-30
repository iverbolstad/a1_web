"use client";

import { useEffect } from "react";
import { useState } from "react";
import { getTjenester } from "../lib/sanity";

interface Tjeneste {
    imageUrl: string;
    beskrivelse: string;
    title: string;
}

export default function Tjenester() {
    const [tjenester, setTjenester] = useState<Tjeneste[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchTjenester() {
        try {
          const data = await getTjenester();
          setTjenester(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching tjenester:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchTjenester();
    }, []);

    return (
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-12 text-center">Våre tjenester</h1>
            <div className="space-y-12 md:space-y-16">
                {tjenester.map((tjeneste: Tjeneste, index: number) => (
                    <div 
                        key={index} 
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                    >
                        <div className="w-full md:w-1/2">
                            <img 
                                src={tjeneste.imageUrl} 
                                alt={tjeneste.title || 'Tjeneste bilde'} 
                                className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-1 sm:px-0">
                            <h2 className="text-2xl font-bold mb-4">{tjeneste.title}</h2>
                            <p className="text-lg">{tjeneste.beskrivelse}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}