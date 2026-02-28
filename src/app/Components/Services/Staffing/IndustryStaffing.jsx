"use client";

import {
  Code2,
  Building2,
  Heart,
  Settings,
  Globe,
  Rocket,
} from "lucide-react";

export default function IndustryStaffing() {
  const services = [
    {
      title: "IT & Software Development Staffing",
      icon: <Code2 className="text-blue-600" size={22} />,
      bg: "bg-blue-100",
    },
    {
      title: "BFSI Recruitment Services",
      icon: <Building2 className="text-green-600" size={22} />,
      bg: "bg-green-100",
    },
    {
      title: "Healthcare & Pharma Staffing",
      icon: <Heart className="text-red-500" size={22} />,
      bg: "bg-red-100",
    },
    {
      title: "Engineering & Manufacturing Recruitment",
      icon: <Settings className="text-orange-500" size={22} />,
      bg: "bg-orange-100",
    },
    {
      title: "GCC Talent Acquisition",
      icon: <Globe className="text-indigo-600" size={22} />,
      bg: "bg-indigo-100",
    },
    {
      title: "Startup Hiring Solutions",
      icon: <Rocket className="text-purple-600" size={22} />,
      bg: "bg-purple-100",
    },
  ];

  return (
    <section className="bg-[#f3f4f6] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] leading-tight">
            Industry-Specific{" "}
            <span className="text-[#F05A28]">Staffing Services</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            As a trusted staffing agency in India, we deliver tailored
            recruitment solutions for:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex items-center gap-4 hover:shadow-md transition duration-300"
            >
              <div
                className={`${item.bg} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                {item.icon}
              </div>

              <h3 className="text-base md:text-lg font-semibold text-[#1e293b] leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}