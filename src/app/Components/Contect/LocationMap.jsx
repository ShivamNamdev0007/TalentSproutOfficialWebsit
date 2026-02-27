"use client";
import React from "react";

export default function LocationMap() {
  return (
    <section className="w-full">
      
      {/* Map Container */}
      <div className="w-full h-75 sm:h-100 md:h-125 lg:h-137.5">
        <iframe
          src="https://www.google.com/maps?q=ATS+Dolce+Zeta+1+Greater+Noida&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

    </section>
  );
}