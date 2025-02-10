import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  imageUrl: string;
  title: string;
  text: string;
  ongoing?: boolean;
};

const ProjectCard: React.FC<ServiceCardProps> = ({ imageUrl, title, text, ongoing }) => {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-[2/3]">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f08] to-transparent"></div>
      {ongoing && (
        <div className="absolute top-3 right-3 bg-[#7f56d8] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg">
          Pågående
        </div>
      )}
      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg mt-2">{text}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
