"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            text-center
            sm:text-left
          "
        >

          {/* BRAND */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/logo.jpg"
                alt="Talent Sprout"
                width={160}
                height={80}
                className="h-14 sm:h-16 lg:h-20 w-auto"
                priority
              />
            </Link>

            <p className="text-sm max-w-xs text-gray-900">
              Growing Talent. Building Future-Ready Workplaces.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-black font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "IT & GCC Recruitment", href: "/services/it-gcc" },
                { label: "BFSI & Banking Recruitment", href: "/services/bfsi" },
                { label: "Staffing Solutions", href: "/services/staffing" },
                { label: "POSH Training & Compliance", href: "/services/posh" },
                { label: "Empathy & Personality Development", href: "/services/personality" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="block hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-black font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">

              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                <Link
                  href="https://maps.google.com/?q=ATS+Dolce+Zeta+1+Greater+Noida"
                  target="_blank"
                  className="hover:text-orange-500 text-center sm:text-left"
                >
                  6183 ATS Dolce Zeta 1, <br />
                  Greater Noida 201306
                </Link>
              </li>

              <li className="flex justify-center sm:justify-start items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <Link href="tel:7042417450" className="hover:text-orange-500">
                  7042417450
                </Link>
              </li>

              <li className="flex justify-center sm:justify-start items-center gap-2 break-all">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <Link
                  href="mailto:chhavi.sharma@talentsprout.in"
                  className="hover:text-orange-500"
                >
                  chhavi.sharma@talentsprout.in
                </Link>
              </li>

            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-gray-200 mt-10 pt-5 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Talent Sprout. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
