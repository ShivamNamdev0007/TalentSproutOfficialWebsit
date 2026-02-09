"use client";

import React from "react";
import Link from "next/link";
import {
  FiCode,
  FiBriefcase,
  FiUsers,
  FiShield,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";

const services = [
  {
    title: "IT & GCC Recruitment",
    desc: "We specialize in IT recruitment for Global Capability Centers (GCCs), startups, and enterprises.",
    icon: <FiCode />,
  },
  {
    title: "BFSI & Banking Recruitment",
    desc: "We provide specialized recruitment solutions for the BFSI sector with a strong focus on domain.",
    icon: <FiBriefcase />,
  },
  {
    title: "Staffing Solutions",
    desc: "Our staffing solutions are designed to support dynamic workforce needs with speed and efficiency.",
    icon: <FiUsers />,
  },
  {
    title: "POSH Training & Compliance",
    desc: "We deliver POSH (Prevention of Sexual Harassment) training aligned with statutory guidelines.",
    icon: <FiShield />,
  },
  {
    title: "Empathy & Personality",
    desc: "We design training programs that focus on emotional intelligence, communication, and personality development.",
    icon: <FiHeart />,
  },
];

export default function OurServices() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-orange-500 text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            From smart hiring to impactful training,<br/> we deliver solutions that
            empower organizations and individuals to succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-500 text-2xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {item.desc}
              </p>

              {/* Learn More */}
              <Link href="/" className=" flex items-center gap-2 text-orange-400 font-medium hover:text-orange-600 transition">
                Learn More <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
