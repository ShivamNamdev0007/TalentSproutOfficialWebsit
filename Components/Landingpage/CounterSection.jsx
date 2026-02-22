"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { id: 1, value: 10, suffix: "+", label: "We Have Year Of Experience" },
  { id: 2, value: 300, suffix: "+", label: "Innovation-Driven Companies" },
  { id: 3, value: 1000, suffix: "+", label: "Employees On Worldwide" },
  { id: 4, value: 75, suffix: "%", label: "Percentage Of Success" },
];

export default function CounterSection() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
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
    <section ref={sectionRef} className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <CounterCard key={item.id} item={item} start={start} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({ item, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const incrementTime = 20;
    const step = Math.ceil(item.value / (duration / incrementTime));

    const timer = setInterval(() => {
      startValue += step;

      if (startValue >= item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else {
        setCount(startValue);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, item.value]);

  return (
    <div className="text-center py-12 border-r border-gray-200 last:border-r-0">
      <h2 className="text-5xl font-bold text-black">
        {count}
        {item.suffix}
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        {item.label}
      </p>
    </div>
  );
}