"use client";

import { Target, Users, Clock, Headphones, Award } from "lucide-react";

export default function WhyChooseTalentSprout() {
  const features = [
    {
      icon: <Target size={28} />,
      title: "Specialized IT Recruitment Experts",
      desc: "Deep expertise in tech hiring with industry-specific knowledge and insights.",
    },
    {
      icon: <Users size={28} />,
      title: "Pre-Screened Tech Talent Pool",
      desc: "Access to thoroughly vetted professionals ready to join your team immediately.",
    },
    {
      icon: <Clock size={28} />,
      title: "Faster Time-to-Hire",
      desc: "40% reduction in hiring time through our streamlined recruitment process.",
    },
    {
      icon: <Headphones size={28} />,
      title: "End-to-End Hiring Support",
      desc: "Complete recruitment lifecycle management from sourcing to onboarding.",
    },
    {
      icon: <Award size={28} />,
      title: "Industry-Specific Recruitment Solutions",
      desc: "Customized hiring strategies tailored to your industry and business needs.",
    },
  ];

  return (
    <section className="bg-linear-to-b from-gray-100 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
          Why Choose <span className="text-orange-500">TalentSprout</span>?
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
          Partner with India's leading IT recruitment company for unmatched tech staffing solutions
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-left"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}