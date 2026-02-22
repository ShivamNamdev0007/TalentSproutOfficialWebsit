"use client";

import {
  Users,
  GraduationCap,
  Volume2,
  ShieldCheck,
  Building2,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "People-First Approach",
    description:
      "We believe successful organizations are built by empowered people.",
  },
  {
    icon: GraduationCap,
    title: "Multi-Domain Expertise",
    description:
      "From IT & BFSI hiring to POSH and empathy training—we understand people across functions and industries.",
  },
  {
    icon: Volume2,
    title: "Quality Over Volume",
    description:
      "We focus on right-fit talent, not just quick closures.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Ethics Driven",
    description:
      "Our POSH and BFSI practices are aligned with statutory and ethical standards.",
  },
  {
    icon: Building2,
    title: "Startup Agility, Corporate Mindset",
    description:
      "Fast, flexible, and responsive—without compromising professionalism.",
  },
  {
    icon: MapPin,
    title: "Pan-India Reach",
    description:
      "Strong talent networks across key locations in India.",
  },
];

export default function WhyChooseTalentSprout() {
  return (
    <section className="bg-[#e6dbd2] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why Organizations{" "}
          <span className="text-[#e8642a]">Choose Talent Sprout</span>
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
          We bring together expertise, empathy, and execution to help you build
          better teams and workplaces.
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-10 rounded-3xl text-center transition-all duration-300
                           hover:bg-[#e8642a]"
              >
                {/* Icon Circle */}
                <div
                  className="w-20 h-20 mx-auto flex items-center justify-center
                             rounded-full bg-white shadow-lg text-[#e8642a]
                             transition-all duration-300
                             group-hover:bg-gray-300
                             group-hover:text-[#e8642a]"
                >
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3
                  className="mt-6 text-xl font-semibold text-gray-800
                             transition-colors duration-300
                             group-hover:text-white"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs mx-auto
                             transition-colors duration-300
                             group-hover:text-white/90"
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}