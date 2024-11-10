import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import Link from 'next/link';

const WhatIDo = () => {
  const services = [
    {
      title: "Editable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://cerulean-cannoli-2160ad.netlify.app",
    },
    {
      title: "Dynamic Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://bright-sable-90fd44.netlify.app",
    },
    {
      title: "Shareable Resume Builder",
      description: "Explore my portfolio of visually compelling and creative design projects.",
      link: "https://mellifluous-naiad-85705a.netlify.app",
    },
    {
      title: "Techinsights using Custom-CSS",
      description: "Simple multi-page website.",
      link: "https://stalwart-rugelach-b4fc2f.netlify.app",
    },
    {
      title: "Techinsights using Tailwind-CSS",
      description: "See my multi-page website.",
      link: "https://flourishing-meerkat-2290d5.netlify.app",
    },
    {
      title: "Simple E-commerce website using Next.js",
      description: "See my multi-page website.",
      link: "https://deluxe-jalebi-7783c9.netlify.app",
    },
    {
      title: "CLI Currency Converter",
      description: "View my Currency Converter projects.",
      link: "https://github.com/nadeemtahir/Currency-converter.git",
    },
    {
      title: "CLI Adventure Game",
      description: "View my CLI-based Adventure game.",
      link: "https://github.com/nadeemtahir/Adventure-game.git",
    },
    {
      title: "CLI Student Management System",
      description: "See my CLI student management project.",
      link: "https://github.com/nadeemtahir/Student-management-system.git",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-8">
        What I Do
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <RiLightbulbFlashLine className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>

            {service.link.startsWith("http") ? (
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View Projects
              </a>
            ) : (
              <Link href={service.link} className="text-blue-600 hover:underline">
                View Projects
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
