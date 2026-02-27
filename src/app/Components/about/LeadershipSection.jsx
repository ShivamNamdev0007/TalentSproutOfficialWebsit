"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const leadershipData = [
  {
    name: "Jane Doe",
    role: "Chief Executive",
    image: "/JaniDoe.jpg",
  },
  {
    name: "John Smith",
    role: "Chief Operating Officer",
    image: "/ema.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Financial Officer",
    image: "/Sara.jpg",
  },
  {
    name: "Emma Thompson",
    role: "Senior Business Consultant",
    image: "/john.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white -text-black">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Meet Our{" "}
          <span className="text-orange-500">Leadership Team</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto mb-16 md:mb-20 leading-relaxed">
          Our leadership team consists of seasoned professionals with expertise
          in recruitment consulting, staffing strategy, and workforce planning.
          Their industry knowledge enables Talent Sprout to deliver reliable and
          scalable hiring solutions to our clients.
        </p>

        {/* White Ellipse Section */}
        <div className="relative flex justify-center items-center">

          {/* Top Curve */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-24 md:h-32 bg-white rounded-[100%] z-50 pointer-events-none"></div>

          {/* Slider */}
          <div className="relative z-20 py-16 md:py-24 w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              grabCursor={true}
              autoplay={{ delay: 2500 }}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {leadershipData.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center">

                    {/* Image Box Responsive */}
                    <div className="relative w-44 h-60 sm:w-52 sm:h-72 md:w-60 md:h-80 bg-white overflow-hidden shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="mt-5 text-base md:text-lg font-semibold text-[#0E2A47]">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-gray-500 italic text-xs md:text-sm">
                      {member.role}
                    </p>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}