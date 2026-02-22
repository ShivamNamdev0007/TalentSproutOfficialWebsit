"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function OurServices() {
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Our Services
        </h2>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          From smart hiring to impactful training, we deliver solutions that
          empower organizations and individuals to succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-orange-500 transition-all duration-300"
          >
            <div className="relative h-64 sm:h-72 md:h-80">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-6 py-8">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-6 py-2 rounded-lg text-sm font-medium transition hover:bg-orange-500 hover:text-white"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
