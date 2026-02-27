"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function OurServices() {
  const services = [
    {
      title: "IT & GCC Recruitment",
      image: "/it&Gcc.jpg",
      desc: "We specialize in IT recruitment for Global Capability Centers (GCCs), startups,and enterprises Our team connects organizations with highly skilled tech professionals across emerging and niche technologies.",
    },
    {
      title: "BFSI & Banking Recruitment",
      image: "/BFSI.jpg",
      desc: "We provide specialized recruitment solutions for the BFSI sector with a strong focus on domain expertise. Our team sources highly qualified professionals across banking, financial services, insurance, and fintech roles.",
    },
    {
      title: "Empathy & Personality Development",
      image: "/Emapthy.jpg",
      desc: "Training programs designed to enhance emotional intelligence, communication skills, and workplace leadership.",
    },
    {
      title: "Staffing Solutions",
      image: "/Staffing.jpg",
      desc: "Our staffing solutions are designed to support dynamic workforce needs with speed and efficiency. We offer flexible staffing models including temporary, contract, and permanent hiring.",
    },
    {
      title: "POSH Traning & Compliance",
      image: "/PoshTraning.jpg",
      desc: "We deliver POSH (Prevention of Sexual Harassment) training aligned with statutory guidelines.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          From smart hiring to impactful training, we deliver solutions that
          empower organizations and individuals to succeed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-105 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-all duration-300" />

                <div className="absolute inset-0 flex flex-col items-center text-center px-6 justify-end group-hover:justify-center transition-all duration-500">
                  <h3 className="text-white text-2xl font-semibold mb-4 transition-all duration-500 group-hover:-translate-y-6">
                    {service.title}
                  </h3>

                  <div className="opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-125 transition-all duration-500 ease-out">
                    <p className="text-gray-200 text-sm mb-6 leading-relaxed line-clamp-5">
                      {service.desc}
                    </p>

                    <button className="relative overflow-hidden border border-orange-500 text-orange-500 px-8 py-3 rounded-lg transition hover:bg-orange-500 hover:text-black">
                      <span className="flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-12 flex justify-center"></div>
      </div>

      {/* Normal style tag instead of styled-jsx */}
      <style>
        {`
          .custom-pagination {
            position: relative;
            z-index: 50;
          }

          .custom-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background-color: #6b7280 !important;
            opacity: 1 !important;
            margin: 0 6px !important;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #f97316 !important;
          }
        `}
      </style>
    </section>
  );
}