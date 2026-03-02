import {
  Code2,
  Building2,
  Heart,
  GraduationCap,
  ShoppingBag,
  Factory,
} from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "IT & Technology",
      description:
        "POSH training for software companies, startups, and tech organizations",
      icon: Code2,
      bg: "bg-blue-500",
    },
    {
      title: "Corporate & BFSI",
      description:
        "Banking, financial services, insurance, and corporate sector compliance",
      icon: Building2,
      bg: "bg-green-500",
    },
    {
      title: "Healthcare & Pharma",
      description:
        "Hospitals, clinics, pharmaceutical companies, and healthcare providers",
      icon: Heart,
      bg: "bg-red-500",
    },
    {
      title: "Education & Colleges",
      description:
        "Universities, colleges, schools, and educational institutions",
      icon: GraduationCap,
      bg: "bg-purple-500",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Retail chains, e-commerce platforms, and customer service centers",
      icon: ShoppingBag,
      bg: "bg-orange-500",
    },
    {
      title: "Manufacturing",
      description:
        "Industrial units, factories, and manufacturing organizations",
      icon: Factory,
      bg: "bg-gray-600",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2c4c]">
            Industries{" "}
            <span className="text-orange-500">We Serve</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Specialized POSH training programs across diverse sectors
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300 group"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white ${item.bg} mb-6`}
                >
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
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