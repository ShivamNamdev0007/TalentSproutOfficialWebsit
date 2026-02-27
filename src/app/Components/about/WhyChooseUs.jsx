"use client";
import { Plus } from "lucide-react";

const features = [
  "Trusted recruitment agency with industry expertise",
  "Customized hiring and staffing solutions",
  "Fast turnaround time with quality talent delivery",
  "Strong talent network across domains",
  "Focus on long-term employee retention",
  "Trusted recruitment agency with industry expertise",
];

export default function WhyChooseUs() {
  return (
    <section className="w-ful text-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black">Why</span>{" "}
              <span className="text-orange-500">Choose Us</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Talent Sprout stands out as a recruitment company
              that delivers measurable hiring outcomes aligned with
              business objectives.
            </p>

            <div className="w-full overflow-hidden rounded-lg">
              <img
                src="/WhyChose.jpg" // replace with your image path
                alt="Corporate building"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-6">
                <div className="flex items-center gap-4">
                  <div className="text-orange-500">
                    <Plus size={22} strokeWidth={2} />
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg">
                    {item}
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