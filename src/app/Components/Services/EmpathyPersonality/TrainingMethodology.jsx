"use client";

import {
  ClipboardCheck,
  Users,
  Presentation,
  Activity,
  Award,
} from "lucide-react";
import Image from "next/image";

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
    <section className="bg-gradient-to-r from-[#f3f4f6] to-[#f8ede6] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE TIMELINE */}
          <div className="relative">
            <div className="hidden md:block absolute left-6 top-4 bottom-4 w-0.5 bg-orange-300"></div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#0f2d4a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                      {step.icon}
                    </div>

                    {/* Number Badge */}
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

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-[350px] sm:w-[400px] md:w-[450px]">
              
              {/* Arrow Border (Right side hidden) */}
              <div
                className="absolute inset-0 
                border-l-4 border-t-4 border-b-4 border-r-0 border-[#F05A28]
                translate-x-6 translate-y-6 hidden md:block
                [clip-path:polygon(25%_0%,100%_0%,100%_100%,25%_100%,0%_50%)]"
              ></div>

              {/* Image with same shape */}
              <div
                className="relative z-10 overflow-hidden
                [clip-path:polygon(25%_0%,100%_0%,100%_100%,25%_100%,0%_50%)]"
              >
                <Image
                  src="/EmapthyTraning.png"
                  alt="Training Methodology"
                  width={500}
                  height={550}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}