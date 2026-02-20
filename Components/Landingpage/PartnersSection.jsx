"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-28 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">
          <span className="text-gray-500">We </span>
          <span className="text-orange-500">Partners With..</span>
        </h2>

        <div className="relative flex justify-center items-center">

          {/* Center Image */}
          <div className="relative w-[520px] h-[520px] md:w-[420px] md:h-[550px] rounded-full overflow-hidden z-10">
            <Image
              src="/herosBackgroundImg.png"
              alt="handshake"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* LEFT TOP */}
          <Card
            title="Corporates"
            position="top-10 left-0 md:-left-14"
            direction="left"
            visible={visible}
          />

          {/* RIGHT TOP */}
          <Card
            title="Startups"
            position="top-10 right-0 md:-right-14"
            direction="right"
            visible={visible}
          />

          {/* LEFT BOTTOM */}
          <Card
            title="GCCs"
            position="bottom-32 left-0 md:-left-14"
            direction="left"
            visible={visible}
          />

          {/* RIGHT BOTTOM */}
          <Card
            title="BFSI organizations"
            position="bottom-32 right-0 md:-right-14"
            direction="right"
            visible={visible}
          />

          {/* CENTER BOTTOM */}
          <Card
            title="Educational institutions"
            position="-bottom-16 left-1/2 -translate-x-1/2"
            direction="bottom"
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}

function Card({ title, position, direction, visible }) {
  const base =
    "absolute bg-white w-[480px] rounded-xl shadow-2xl p-6 z-20 transition-all duration-700 ease-out";

  const animation = {
    left: visible
      ? "translate-x-0 opacity-100"
      : "-translate-x-20 opacity-0",
    right: visible
      ? "translate-x-0 opacity-100"
      : "translate-x-20 opacity-0",
    bottom: visible
      ? "translate-y-0 opacity-100"
      : "translate-y-20 opacity-0",
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