"use client";
import React from "react";
import {
  FileText,
  Users,
  ClipboardCheck,
  Handshake,
  UserCheck,
  Headphones,
} from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Requirement Analysis",
    desc: "Understanding your BFSI talent needs, compliance requirements, and organizational culture.",
    time: "1–2 Days",
    icon: <FileText size={22} />,
  },
  {
    step: "Step 2",
    title: "Talent Sourcing",
    desc: "Accessing our exclusive database of verified BFSI professionals and active candidate outreach.",
    time: "3–5 Days",
    icon: <Users size={22} />,
  },
  {
    step: "Step 3",
    title: "Screening & Assessment",
    desc: "Technical evaluation, compliance checks, regulatory verification, and background screening.",
    time: "3–4 Days",
    icon: <ClipboardCheck size={22} />,
  },
  {
    step: "Step 4",
    title: "Client Presentation",
    desc: "Shortlisting top 3–5 candidates with detailed profiles and assessment reports.",
    time: "1–2 Days",
    icon: <Handshake size={22} />,
  },
  {
    step: "Step 5",
    title: "Interview & Selection",
    desc: "Coordinating interviews, collecting feedback, and salary negotiations.",
    time: "5–7 Days",
    icon: <UserCheck size={22} />,
  },
  {
    step: "Step 6",
    title: "Onboarding Support",
    desc: "Post-placement support, documentation assistance, and 90-day performance tracking.",
    time: "Ongoing",
    icon: <Headphones size={22} />,
  },
];

export default function BFSIRecruitmentProcess() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-orange-500">BFSI Recruitment</span> Process
          </h2>
          <p className="text-gray-600 mt-3">
            Streamlined compliance recruitment services ensuring quality hires in 15–20 days
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 w-1 h-full bg-linear-to-b from-orange-500 to-gray-300"></div>

          <div className="space-y-12">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-start">

                {/* Icon */}
                <div className="relative z-10 shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-orange-500 shadow-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="mt-4 md:mt-0 md:ml-10 bg-white p-6 rounded-xl shadow-md w-full hover:shadow-lg transition">
                  
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <div>
                      <p className="text-sm text-orange-500 font-semibold">
                        {item.step}
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-1">
                        {item.title}
                      </h3>
                    </div>

                    <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-3 text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}