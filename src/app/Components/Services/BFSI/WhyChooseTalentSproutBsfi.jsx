"use client";
import React from "react";
import { Shield, Users, ClipboardCheck, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Regulatory Compliance Expertise",
    desc: "Deep understanding of RBI, SEBI, and IRDAI guidelines ensuring compliant hiring across all financial services domains.",
    icon: <Shield size={26} />,
  },
  {
    title: "Domain-Specific Talent Pool",
    desc: "Exclusive network of pre-vetted BFSI professionals with verified credentials and industry certifications.",
    icon: <Users size={26} />,
  },
  {
    title: "Rigorous Screening Process",
    desc: "Multi-layer verification including background checks, compliance screening, and technical assessments.",
    icon: <ClipboardCheck size={26} />,
  },
  {
    title: "Proven Track Record",
    desc: "95% placement retention rate with leading banks, NBFCs, and fintech companies across India.",
    icon: <TrendingUp size={26} />,
  },
];

export default function WhyChooseTalentSproutBsfi() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Why Choose{" "}
            <span className="text-orange-500">TalentSprout for BFSI Recruitment?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Leading BFSI recruitment company in India with specialized expertise in banking
            staffing and financial services recruitment
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-900 text-orange-500 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="w-12 h-1 bg-orange-500 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}