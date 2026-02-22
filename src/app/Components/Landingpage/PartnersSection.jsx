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
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
          <span className="text-gray-500">We </span>
          <span className="text-orange-500">Partner With..</span>
        </h2>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <MobileCard title="Corporates" />
          <MobileCard title="Startups" />
          <MobileCard title="GCCs" />
          <MobileCard title="BFSI organizations" />
          <MobileCard title="Educational institutions" />
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:flex relative justify-center items-center">
          {/* Center Image */}
          <div className="relative w-[380px] h-[450px] lg:w-[500px] lg:h-[520px] rounded-full overflow-hidden z-10">
            <Image
              src="/herosBackgroundImg.png"
              alt="handshake"
              fill
              priority
              className="object-cover"
            />
          </div>

          <Card
            title="Corporates"
            position="top-5 -left-10"
            direction="left"
            visible={visible}
          />
          <Card
            title="Startups"
            position="top-5 -right-10"
            direction="right"
            visible={visible}
          />
          <Card
            title="GCCs"
            position="bottom-10 -left-10"
            direction="left"
            visible={visible}
          />
          <Card
            title="BFSI organizations"
            position="bottom-10 -right-10"
            direction="right"
            visible={visible}
          />
          <Card
            title="Educational institutions"
            position="-bottom-20 justify-center -translate-x-1/2"
            direction="bottom"
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}

/* ===== Desktop Card ===== */
function Card({ title, position, direction, visible }) {
  const base =
    "absolute bg-white w-[320px] lg:w-[380px] rounded-xl shadow-2xl p-6 z-30 m-10  transition-all duration-700 ease-out";

  const animation = {
    left: visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0",
    right: visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
    bottom: visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
  };

  return (
    <div className={`${base} ${position} ${animation[direction]}`}>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        Compliment interested discretion estimating on stimulated apartments oh.
      </p>
    </div>
  );
}

/* ===== Mobile Card ===== */
function MobileCard({ title }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-5 text-center">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        Compliment interested discretion estimating on stimulated apartments oh.
      </p>
    </div>
  );
}

export default PartnersSection;
