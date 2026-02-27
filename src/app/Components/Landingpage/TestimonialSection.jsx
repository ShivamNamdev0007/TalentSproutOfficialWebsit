"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "VP Engineering",
    company: "TechVision GCC",
    text: "TalentSprout transformed our hiring process. They understood our niche requirements and delivered exceptional DevOps talent within 2 weeks.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Talent Acquisition",
    company: "FinNext Solutions",
    text: "Working with TalentSprout has been a game-changer. Their deep understanding helped us scale quickly.",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudScale Startup",
    text: "Best IT recruitment agency we've partnered with. Highly recommended for startups!",
  },
   {
    id: 4,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudScale Startup",
    text: "Best IT recruitment agency we've partnered with. Highly recommended for startups!",
  },
   {
    id: 5,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudScale Startup",
    text: "Best IT recruitment agency we've partnered with. Highly recommended for startups!",
  },
   {
    id: 6,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudScale Startup",
    text: "Best IT recruitment agency we've partnered with. Highly recommended for startups!",
  },
  // Add more here anytime 👇
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6  text-justify">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          What Our <span className="text-orange-500">Clients Say</span>
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Trusted by leading companies for tech talent acquisition
        </p>

        {/* Slider */}
        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg h-75 flex flex-col justify-between">
      
      {/* Top Content */}
      <div>
        {/* Stars */}
        <div className="flex mb-4 text-orange-500 text-lg">
          {"★★★★★"}
        </div>

        {/* Text */}
        <p className="text-gray-600 leading-relaxed line-clamp-6">
          "{item.text}"
        </p>
      </div>

      {/* Bottom Profile Section */}
      <div className="flex items-center gap-4 mt-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 text-white font-semibold">
          {item.name.charAt(0)}
        </div>

        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p className="text-sm text-gray-500">
            {item.role}
          </p>
          <p className="text-sm text-orange-500">
            {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}