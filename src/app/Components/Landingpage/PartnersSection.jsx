"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function PartnersSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
          <span className="text-gray-700">We </span>
          <span className="text-orange-500">Partner With..</span>
        </h2>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <MobileCard title="Corporates" image="/icons/corporate.png" />
          <MobileCard title="Startups" image="/icons/startup.png" />
          <MobileCard title="GCCs" image="/icons/gcc.png" />
          <MobileCard title="BFSI organizations" image="/icons/bfsi.png" />
          <MobileCard
            title="Educational institutions"
            image="/icons/education.png"
          />
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:flex relative justify-center items-center">
          {/* Center Image */}
          <div
           className="relative 
  w-72 h-96 
  md:w-80 md:h-112 
  lg:w-md lg:h-140 
  overflow-hidden z-10 shadow-2xl
  rounded-[58%_42%_45%_55%/65%_60%_40%_35%]"
          >
            <Image
              src="/image1.png"
              alt="handshake"
              fill
              priority
              className="object-cover"
            />
          </div>

          <Card
            title="Corporates"
            image="/corporate.png"
            position="top-5 -left-10"
            direction="left"
            visible={visible}
          />

          <Card
            title="Startups"
            image="/startups.png"
            position="top-5 -right-10"
            direction="right"
            visible={visible}
          />

          <Card
            title="GCCs"
            image="/gcc.png"
            position="bottom-10 -left-10"
            direction="left"
            visible={visible}
          />

          <Card
            title="BFSI organizations"
            image="/BFSI.png"
            position="bottom-10 -right-10"
            direction="right"
            visible={visible}
          />

          <Card
            title="Educational institutions"
            image="/education.png"
            position="bottom-[-120px] left-1/2"
            direction="bottom"
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Desktop Card ===== */

function Card({ title, image, position, direction, visible }) {
  const base =
    "absolute bg-gray-100 w-[320px] lg:w-[380px] rounded-2xl shadow-xl px-6 py-5 m-10 flex items-center gap-5 z-30 transform transition-all duration-700 ease-out";

  const animation = {
    left: visible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0",

    right: visible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0",

    bottom: visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0",
  };

  return (
    <div
      className={`${base} ${position} ${
        direction === "bottom" ? "-translate-x-1/2" : ""
      } ${animation[direction]}`}
    >
      {/* Icon */}
      <div className="relative w-12 h-12">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      {/* Divider */}
      <div className="w-px h-12 bg-gray-300"></div>

      {/* Text */}
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">
          Compliment interested discretion estimating on stimulated apartments
          oh.
        </p>
      </div>
    </div>
  );
}
/* ===== Mobile Card ===== */

function MobileCard({ title, image }) {
  return (
    <div className="w-full bg-gray-100 rounded-2xl shadow-md px-6 py-5 flex items-center gap-4">
      <div className="relative w-8 h-8">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="w-px h-10 bg-gray-300"></div>

      <div>
        <h3 className="font-semibold text-lg text-black">{title}</h3>
        <p className="text-sm text-gray-700">
          Compliment interested discretion estimating on stimulated apartments
          oh.
        </p>
      </div>
    </div>
  );
}

export default PartnersSection;
