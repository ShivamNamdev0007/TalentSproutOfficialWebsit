"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function WhyPoshMatters() {
  const cards = [
    {
      title: "Legal Compliance",
      description:
        "Meet statutory requirements under POSH Act 2013",
    },
    {
      title: "Safe Workplace",
      description:
        "Create a harassment-free environment for all employees",
    },
    {
      title: "Employee Well-being",
      description:
        "Foster respect, dignity, and psychological safety",
    },
    {
      title: "Organizational Culture",
      description:
        "Build a culture of accountability and ethics",
    },
    {
      title: "Risk Mitigation",
      description:
        "Reduce legal risks and reputational damage",
    },
  ];

  return (
    <section className="bg-[#f7f9fc] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2c4c]">
            Why POSH{" "}
            <span className="text-orange-500">Training Matters</span>
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md 
                              h-65
                              p-8 
                              flex flex-col justify-center items-center 
                              text-center 
                              transition duration-300 hover:shadow-xl">
                
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}