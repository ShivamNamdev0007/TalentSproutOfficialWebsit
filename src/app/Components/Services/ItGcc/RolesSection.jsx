import {
  Code2,
  Layers,
  Cloud,
  Database,
  Cpu,
  Server,
} from "lucide-react";

const roles = [
  {
    icon: Code2,
    title: "ALL IT DEVELOPERS",
    description:
      "Frontend, Backend, Full Stack developers with expertise across modern tech stacks.",
  },
  {
    icon: Layers,
    title: "PRODUCT & ENGINEERING",
    description:
      "Product managers, engineering leads, architects, and technical project managers.",
  },
  {
    icon: Cloud,
    title: "CLOUD & DEVOPS",
    description:
      "AWS, Azure, GCP specialists, DevOps engineers, and SRE professionals.",
  },
  {
    icon: Database,
    title: "DATA & AI",
    description:
      "Data engineers, ML engineers, data scientists, and AI specialists.",
  },
  {
    icon: Cpu,
    title: "NICHE TECH SKILLS",
    description:
      "Blockchain, IoT, embedded systems, and other specialized technologies.",
  },
  {
    icon: Server,
    title: "INFRASTRUCTURE",
    description:
      "Network engineers, security specialists, and system administrators.",
  },
];

export default function RolesSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Roles <span className="text-orange-500">We Hire</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            From emerging tech to enterprise-grade positions
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 md:p-10 text-center border border-gray-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Orange Background Effect */}
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 transition-colors duration-500">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-orange-50 group-hover:bg-white/20 transition-all duration-500">
                      <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                    {role.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}