"use client";

import { Code2, Briefcase, Wallet, Cpu } from "lucide-react";

export default function BfsiExpertise() {
  const expertise = [
    {
      icon: <Code2 size={28} className="text-orange-500" />,
      title: "Retail Banking",
      desc: "Branch & Customer Services",
    },
    {
      icon: <Briefcase size={28} className="text-orange-500" />,
      title: "Investment Banking",
      desc: "Advisory & Capital Markets",
    },
    {
      icon: <Wallet size={28} className="text-orange-500" />,
      title: "Corporate Banking",
      desc: "Commercial & Treasury",
    },
    {
      icon: <Cpu size={28} className="text-orange-500" />,
      title: "Relationship Managers",
      desc: "Client-Facing Roles",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
          Our BFSI <span className="text-orange-500">Expertise</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 text-base md:text-lg">
          Specialized recruitment across banking and financial services
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-[#E8DAD2] rounded-2xl py-14 px-8 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-800">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}