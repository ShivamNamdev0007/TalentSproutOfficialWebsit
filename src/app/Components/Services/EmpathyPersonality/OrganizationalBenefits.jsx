"use client";

import { Check } from "lucide-react";

export default function OrganizationalBenefits() {
  const benefits = [
    "Enhanced workplace communication and reduced conflicts",
    "Improved leadership capabilities at all organizational levels",
    "Stronger team collaboration and problem-solving skills",
    "Higher employee morale and job satisfaction",
    "Better customer service and client relationships",
    "Increased adaptability to change and innovation",
  ];

  return (
    <section className="bg-[#eef0f3] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f3447]">
            Key Organizational{" "}
            <span className="text-[#F05A28]">Benefits</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl 
                         shadow-sm hover:shadow-md 
                         transition duration-300 
                         p-6 md:p-8 
                         flex items-start gap-4"
            >
              {/* Icon */}
              <div className="shrink-0 w-8 h-8 rounded-full 
                              bg-linear-to-br 
                              from-[#3b5aa3] to-[#F05A28] 
                              flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}