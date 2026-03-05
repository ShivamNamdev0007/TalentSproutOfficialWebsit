"use client";

import {
  ClipboardCheck,
  Users,
  Presentation,
  Activity,
  Award,
} from "lucide-react";

export default function TrainingMethodology() {
  const steps = [
    {
      id: "01",
      title: "Assessment & Analysis",
      desc: "Initial skill gap analysis and training needs assessment to understand organizational requirements.",
      icon: <ClipboardCheck size={22} />,
    },
    {
      id: "02",
      title: "Customized Curriculum",
      desc: "Developing tailored training modules aligned with your industry, culture, and specific goals.",
      icon: <Users size={22} />,
    },
    {
      id: "03",
      title: "Interactive Sessions",
      desc: "Engaging workshops with role-plays, simulations, group activities, and real-world scenarios.",
      icon: <Presentation size={22} />,
    },
    {
      id: "04",
      title: "Practice & Application",
      desc: "Hands-on exercises, peer feedback, and practical assignments for skill reinforcement.",
      icon: <Activity size={22} />,
    },
    {
      id: "05",
      title: "Evaluation & Support",
      desc: "Post-training assessment, certification, and ongoing support for continuous improvement.",
      icon: <Award size={22} />,
    },
  ];

  return (
    <section className="bg-linear-to-r from-[#f3f4f6] to-[#f8ede6] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b]">
            Our Training{" "}
            <span className="text-[#F05A28]">Methodology</span>
          </h2>

          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A proven, experiential learning approach for lasting behavioral change
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-4 bottom-4 w-0.5 bg-orange-300"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="bg-[#0f2d4a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>

                  <div className="absolute -top-2 -right-2 bg-[#F05A28] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white shadow-md rounded-xl p-6 md:p-8 w-full">
                  <h3 className="text-lg md:text-xl font-semibold text-[#1e293b] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {step.desc}
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