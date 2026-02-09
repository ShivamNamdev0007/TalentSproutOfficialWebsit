import {
  Heart,
  Layers,
  Target,
  ShieldCheck,
  Rocket,
  MapPin,
} from "lucide-react";

const features = [
  {
    title: "People-First Approach",
    desc: "We believe successful organizations are built by empowered people.",
    icon: Heart,
  },
  {
    title: "Multi-Domain Expertise",
    desc: "From IT & BFSI hiring to POSH and empathy training—we understand people across functions and industries.",
    icon: Layers,
  },
  {
    title: "Quality Over Volume",
    desc: "We focus on right-fit talent, not just quick closures.",
    icon: Target,
  },
  {
    title: "Compliance & Ethics Driven",
    desc: "Our POSH and BFSI practices are aligned with statutory and ethical standards.",
    icon: ShieldCheck,
  },
  {
    title: "Startup Agility, Corporate Mindset",
    desc: "Fast, flexible, and responsive—without compromising professionalism.",
    icon: Rocket,
  },
  {
    title: "Pan-India Reach",
    desc: "Strong talent networks across key locations in India.",
    icon: MapPin,
  },
];

export default function WhyTalentSprout() {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
          Why Talent Sprout
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          We’re more than a recruitment agency—we’re your people partner
          committed to building workplaces where talent thrives.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {features.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl border-l-4 border-orange-500 p-6 flex gap-4 shadow-md hover:shadow-lg transition"
            >
              <div className="shrink-0 bg-orange-100 text-orange-500 p-3 rounded-lg">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-500">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
