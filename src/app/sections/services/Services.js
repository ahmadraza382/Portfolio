"use client";

import React, { useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import Button from '@/app/components/botton/Button';
import Subtitle from '@/app/components/subtitle/Subtitle';
import Title from '@/app/components/title/Title';
import { useInView } from '@/app/hooks/useInView';

export default function Services() {
  const [more1, setMore1] = useState(false);
  const [more2, setMore2] = useState(false);
  const [sectionRef, inView] = useInView();

  const cards = [
    {
      id: 1,
      icon: <FaCode className="h-full w-full p-3" />,
      heading: <Subtitle subtitle="Front-end Development" />,
      detail:
        "I develop fully responsive and dynamic websites using cutting-edge technologies such as React.js and Next.js. Whether it’s a single-page application (SPA) or a multi-page website, I ensure seamless navigation and smooth performance across all devices.",
      more1:
        " My goal is to create web experiences that captivate users while maintaining clean and efficient code.",
    },
    {
      id: 2,
      icon: <MdOutlineDesignServices className="h-full w-full p-2" />,
      heading: <Subtitle subtitle="UI/UX Implementation" />,
      detail:
        "A great design deserves a flawless implementation. I specialize in converting Figma, Adobe XD, and Sketch designs into functional, pixel-perfect web applications. I focus on maintaining design integrity while ensuring usability and interactivity.",
      more2:
        "Additionally, I integrate modern UI libraries and frameworks to enhance the user experience.",
    },
  ];

  return (
    <div className="bg-gray text-white py-16">
      <div
        ref={sectionRef}
        id="services"
        className={`2xl:w-[96rem] 2xl:m-auto px-1 text-justify transition-all duration-700 ${
          inView ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center">
          <Title title1="Our" title2="Services" />
        </div>

        <div className="md:flex justify-evenly mt-11 flex-wrap gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              style={{ animationDelay: `${index * 200}ms` }}
              className={`flex flex-col justify-evenly items-center shadow-effect lg:p-11 cursor-pointer rounded-xl w-[90%] m-auto sm:px-11 md:px-3 mb-6 md:w-[44%] lg:w-[38%] p-3 py-11 transition-transform duration-300 hover:scale-105 hover:rotate-1 animate-fade-in-up opacity-0`}
            >
              {/* Icon */}
              <div className="h-[70px] w-[70px] border md:my-3 text-blue rounded-lg hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              <h1>{card.heading}</h1>
              <p className="text-slate-200 text-sm sm:text-base">{card.detail}</p>

              {more1 && card.more1 && (
                <p className="text-slate-300 text-sm sm:text-base mt-2 transition-all duration-500 opacity-100 translate-y-0">
                  <br /> {card.more1}
                </p>
              )}
              {more2 && card.more2 && (
                <p className="text-slate-300 text-sm sm:text-base mt-2 transition-all duration-500 opacity-100 translate-y-0">
                  <br /> {card.more2}
                </p>
              )}

              <button
                onClick={() => {
                  if (card.id === 1) setMore1(!more1);
                  if (card.id === 2) setMore2(!more2);
                }}
                className="p-2 px-4 mt-7 hover:text-white shadow-blue shadow-effect bg-blue text-black rounded-full transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
              >
                {card.id === 1 ? (more1 ? 'Show Less' : 'Read More') : (more2 ? 'Show Less' : 'Read More')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
