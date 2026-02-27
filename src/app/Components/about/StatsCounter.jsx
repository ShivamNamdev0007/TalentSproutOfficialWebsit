"use client";
import { useEffect, useState } from "react";

const statsData = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Successful Projects" },
  { value: 80, suffix: "%", label: "Client Retention Rate" },
  { value: 50, suffix: "+", label: "Industries Served" },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animation duration
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </h2>
  );
}

export default function StatsCounter() {
  return (
    <section className="w-full bg-orange-600 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-sm sm:text-base md:text-lg text-white font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}