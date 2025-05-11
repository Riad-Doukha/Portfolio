"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const cards = [
  {
    title: "Skilled Professional",
    description: "Gain access to top-tier talent with deep experience, ensuring flawless execution.",
  },
  {
    title: "Future-Ready Websites",
    description: "Crafting modern, scalable websites that grow with your business and stay ahead of trends.",
  },
  {
    title: "Client-Centric Collabs",
    description: "Your vision leads the way, I work closely with you to bring ideas to life with precision and creativity.",
  },
  {
    title: "Real-time Features",
    description: "Enable dynamic features like live chat and notifications using WebSockets.",
  },
  {
    title: "Timely Project Tracking",
    description: "Stay informed with regular progress updates and timely deliverables.",
  },
];

export default function DraggableCardStack() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialStyles = useMemo(() => {
    const offset = isSmallScreen ? -12 : 0; // -10vw if small screen
    const calcLeft = (vw: number) => `calc(${vw + offset}vw)`;

    return [
      {
        top: "20vh",
        left: calcLeft(43),
        transform: "translateX(-50%) rotate(-5deg)",
        zIndex: 5,
      },
      {
        top: "30vh",
        left: calcLeft(18),
        transform: "translateX(-50%) rotate(3deg)",
        zIndex: 3,
      },
      {
        top: "48vh",
        left: calcLeft(40),
        transform: "translateX(-50%) rotate(5deg)",
        zIndex: 4,
      },
      {
        top: "10vh",
        left: calcLeft(30),
        transform: "translateX(-50%) rotate(2deg)",
        zIndex: 2,
      },
      {
        top: "50vh",
        left: calcLeft(23),
        transform: "translateX(-50%) rotate(-3deg)",
        zIndex: 1,
      },
    ];
  }, [isSmallScreen]);

  return (
    <div className="relative min-h-[85vh] pt-10 overflow-x-hidden overflow-y-hidden">
      {cards.map((card, idx) => (
        <DraggableCardContainer key={idx}>
          <DraggableCardBody
            className="absolute border border-[#ffffff27] hover:border-white bg-[#111111] text-center px-4 py-4 w-[20vw] [@media(max-width:600px)]:w-[37vw] [@media(max-width:1000px)]:w-[30vw] md:px-6 md:py-6"
            style={{
              top: initialStyles[idx].top,
              left: initialStyles[idx].left,
              transform: initialStyles[idx].transform,
              zIndex: initialStyles[idx].zIndex,
            }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2 text-white">{card.title}</h2>
            <p className="text-xs md:text-sm">{card.description}</p>
          </DraggableCardBody>
        </DraggableCardContainer>
      ))}
    </div>
  );
}

