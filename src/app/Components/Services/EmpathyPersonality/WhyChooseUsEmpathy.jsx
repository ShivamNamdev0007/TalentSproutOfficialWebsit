"use client";

export default function WhyChooseUsEmpathy() {
  const features = [
    {
      title: "Better Teams",
      description: "Improved collaboration and team dynamics",
    },
    {
      title: "Enhanced Communication",
      description: "Clearer, more effective workplace interactions",
    },
    {
      title: "Cultural Transformation",
      description: "Build empathetic and inclusive workplaces",
    },
  ];

  return (
    <section className="relative">
      {/* Top Orange Section */}
      <div className="bg-[#F05A28] pt-16 pb-32 text-center px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          <span className="text-[#0f172a]">Training</span>{" "}
          Impact
        </h2>

        {/* Cards */}
        <div className="absolute left-0 right-0 top-full -translate-y-1/2 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-white h-40 md:h-52"></div>
    </section>
  );
}