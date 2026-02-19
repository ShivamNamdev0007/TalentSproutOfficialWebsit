"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "IT & GCC Recruitment",
      image: "/services/it-gcc.jpg",
      desc: "We specialize in IT recruitment for Global Capability Centers (GCCs), startups, and enterprises. Our team connects organizations with highly skilled tech professionals across emerging and niche technologies.",
    },
    {
      title: "BFSI & Banking Recruitment",
      image: "/services/bfsi.jpg",
      desc: "Specialized hiring solutions for BFSI, banking, and financial institutions with a focus on compliance, agility, and leadership roles.",
    },
    {
      title: "Empathy & Personality Development",
      image: "/services/empathy.jpg",
      desc: "Training programs designed to enhance emotional intelligence, communication skills, and workplace leadership.",
    },
  ];

  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          From smart hiring to impactful training, we deliver solutions that
          empower organizations and individuals to succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
  key={index}
  className="group relative h-105 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300"
>
  {/* Image */}
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-900"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-all duration-300" />

  {/* CONTENT WRAPPER */}
  <div
    className="
      absolute inset-0 flex flex-col items-center text-center px-6
      justify-end
      group-hover:justify-center
      transition-all duration-500
    "
  >
    {/* Heading */}
    <h3
      className="
        text-white text-2xl font-semibold mb-4
        transition-all duration-500
        group-hover:-translate-y-6
      "
    >
      {service.title}
    </h3>

    {/* Hover Content */}
    <div
      className="
        opacity-0 max-h-0 overflow-hidden
        group-hover:opacity-100 group-hover:max-h-50
        transition-all duration-500 ease-out
      "
    >
      <p className="text-gray-200 text-sm mb-6 leading-relaxed line-clamp-5">
        {service.desc}
      </p>

        <button className="group relative overflow-hidden border border-orange-500 text-orange-500 px-10 py-3 rounded-lg transition hover:bg-orange-500">
      <span className="flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-black">
        Read More
        <ArrowRight className="w-4 h-4 opacity-0 translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
      </span>
    </button>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
