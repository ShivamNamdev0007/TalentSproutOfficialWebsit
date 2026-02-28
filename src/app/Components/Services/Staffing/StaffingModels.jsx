"use client";

import { UserRound, Clock,MoveRight,UsersRound } from "lucide-react";

export default function StaffingModels() {
  const expertise = [
    {
      icon: <UserRound size={28} className="text-orange-500" />,
      title: "Permanent Hiring",
      desc: "Long-term talent acquisition for core business needs",
    },
    {
      icon: <Clock size={28} className="text-orange-500" />,
      title: "Contract Staffing",
      desc: "Flexible workforce for project-based and seasonal requirements",
    },
    {
      icon: <MoveRight size={28} className="text-orange-500" />,
      title: "Contract-to-Hire",
      desc: "Evaluate talent before making permanent commitments",
    },
    {
      icon: <UsersRound size={28} className="text-orange-500" />,
      title: "Bulk & Project-Based Hiring",
      desc: "Rapid team scaling for large-scale projects",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
          Staffing <span className="text-orange-500">Models</span>
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 text-base md:text-lg">
          Choose the staffing model that best fits your business needs and workforce strategy.
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