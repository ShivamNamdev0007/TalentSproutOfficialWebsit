"use client";

import { Search, FileText, Target, Users, CheckCircle } from "lucide-react";

export default function RecruitmentProcess() {
  const steps = [
    {
      id: 1,
      title: "Requirement Analysis & Workforce Planning",
      description:
        "Understanding your unique hiring needs and building a strategic recruitment plan.",
      icon: <Search size={20} />,
      align: "left",
    },
    {
      id: 2,
      title: "Talent Sourcing & Resume Screening",
      description:
        "Leveraging our extensive network and databases to identify qualified candidates.",
      icon: <FileText size={20} />,
      align: "right",
    },
    {
      id: 3,
      title: "Skill Assessment & Technical Interviews",
      description:
        "Rigorous evaluation to ensure candidates meet your technical and cultural requirements.",
      icon: <Target size={20} />,
      align: "left",
    },
    {
      id: 4,
      title: "Client Shortlisting & Interview Coordination",
      description:
        "Presenting pre-vetted candidates and managing the entire interview process.",
      icon: <Users size={20} />,
      align: "right",
    },
    {
      id: 5,
      title: "Offer Management & Onboarding Support",
      description:
        "Facilitating smooth offer negotiations and seamless onboarding experiences.",
      icon: <CheckCircle size={20} />,
      align: "left",
    },
  ];

  return (
    <section className="bg-[#f6f7fb] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a]">
          Our Proven{" "}
          <span className="text-[#f97316]">Recruitment Process</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Our structured talent acquisition process ensures quality hiring and
          faster placement.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-blue-400 h-full hidden md:block"></div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center ${
                step.align === "left"
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`bg-white shadow-md rounded-xl p-8 w-full md:w-[420px] ${
                  step.align === "left"
                    ? "md:mr-auto"
                    : "md:ml-auto"
                }`}
              >
                <p className="text-blue-500 text-sm font-semibold mb-2">
                  Step {step.id}
                </p>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Icon Circle */}
              <div className="absolute md:left-1/2 md:-translate-x-1/2 bg-[#0f172a] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}