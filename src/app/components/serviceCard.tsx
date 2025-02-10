import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  imageUrl: string;
  title: string;
  text: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, text }) => {
  return (
    <div className="rounded-xl shadow-lg p-4 bg-[#206306] text-white">
      <div className="relative overflow-hidden rounded-t-lg aspect-[3/2]">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-bold mt-4 mb-2">{title}</h2>
      <p className="text-lg border-t pt-3">{text}</p>
    </div>
  );
};

export default ServiceCard;
