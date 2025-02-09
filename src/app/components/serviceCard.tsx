import React from "react";

type ServiceCardProps = {
    imageUrl: string;
    title: string;
    text: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, text }) => {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-green-700 text-white max-w-sm">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default ServiceCard;