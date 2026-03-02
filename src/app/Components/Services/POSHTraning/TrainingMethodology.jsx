import Image from "next/image";
import {
  ClipboardCheck,
  Users,
  Presentation,
  MessageSquare,
  Award,
} from "lucide-react";

export default function TrainingMethodology() {
  const steps = [
    {
      number: "01",
      title: "Needs Assessment",
      description:
        "Understanding your organization size, culture, industry requirements, and specific POSH compliance gaps.",
      icon: ClipboardCheck,
    },
    {
      number: "02",
      title: "Customized Content",
      description:
        "Developing tailored training modules with industry-specific scenarios and real-world examples.",
      icon: Users,
    },
    {
      number: "03",
      title: "Interactive Sessions",
      description:
        "Conducting engaging workshops with case studies, role-plays, and group discussions.",
      icon: Presentation,
    },
    {
      number: "04",
      title: "Q&A and Support",
      description:
        "Dedicated session for clarifications, doubts, and specific organizational queries.",
      icon: MessageSquare,
    },
    {
      number: "05",
      title: "Certification & Follow-up",
      description:
        "Issuing compliance certificates and providing ongoing support for POSH implementation.",
      icon: Award,
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2c4c]">
            Our Training{" "}
            <span className="text-orange-500">Methodology</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A structured, engaging approach to effective POSH training
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Timeline */}
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden sm:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative flex items-start gap-6">
                    
                    {/* Icon Circle */}
                    <div className="relative shrink-0">
                      
                      {/* Main Blue Circle */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0f2c4c] text-white shadow-lg relative z-10">
                        <Icon size={24} />
                      </div>

                      {/* Orange Number Badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center text-xs font-semibold bg-orange-500 text-white rounded-full shadow-md z-10">
                        {step.number}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl shadow-md p-6 w-full hover:shadow-xl transition duration-300">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Orange Border Shape */}
              <div className="absolute -right-8 -bottom-8 w-full h-full border-4 border-orange-500 rounded-lg hidden lg:block"></div>

              <Image
                src="/EmapthyTraning.png" 
                alt="Training Methodology"
                width={500}
                height={600}
                className="rounded-lg object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}