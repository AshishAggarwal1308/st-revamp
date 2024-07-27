"use client"
import React, { useEffect, useState } from "react";
import HoverCard from "../HoverCard/HoverCard";
import LiveMC from "../../utils/LiveMC.gif";
import Bootcamp from "../../utils/Bootcamp.gif";
import VirtualTrading from "../../utils/VirtualTrading.gif";
import BootcampThumb from "../../utils/BootcampThumb.png";
import LiveMCThumb from "../../utils/LiveMCThumb.png";
import VirtualTradingThumb from "../../utils/VirtualTradingThumb.png";
import "@fontsource/alfa-slab-one";
import "./OfferingSection.css";

interface CardData {
  image: string;
  title: string;
  description: string;
  gifSrc: string;
}

const OfferingSection: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<any>(0);

  const cardsData: CardData[] = [
    {
      image: "LiveMCThumb.png",
      title: "LIVE MASTERCLASS",
      description: "Dive into the world of 'Derivatives' with our course designed for everyone",
      gifSrc: "LiveMC.gif",
    },
    {
      image: "VirtualTradingThumb.png",
      title: "VIRTUAL TRADING",
      description: "Dive into the world of 'Derivatives' with our course designed for everyone",
      gifSrc: "VirtualTrading.gif",
    },
    {
      image: "BootcampThumb.png",
      title: "7 DAYS BOOTCAMPS",
      description: "Dive into the world of 'Derivatives' with our course designed for everyone",
      gifSrc: "Bootcamp.gif",
    },
  ];

  useEffect(() => {
    setActiveCardIndex(0);
  }, []);

  const handleHover = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <div className="offering-section">
      <h1 className="app-heading" style={{ fontFamily: "Alfa Slab One" }}>OFFERING</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <HoverCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            gifSrc={card.gifSrc}
            isActive={index === activeCardIndex}
            onHover={() => handleHover(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferingSection;
