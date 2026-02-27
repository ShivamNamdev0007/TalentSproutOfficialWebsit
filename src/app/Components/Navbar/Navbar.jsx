"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "IT & GCC Recruitment", path: "/services/it-gcc" },
        { name: "BFSI & Banking Recruitment", path: "/services/bfsi" },
        { name: "Empathy & Personality", path: "/services/seo" },
        { name: "Staffing Solutions", path: "/services/staffing" },
        { name: "POSH Training & Compliance", path: "/services/posh" },
      ],
    },
    { name: "About ", path: "/about" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto md:px-4 px-0 py-3">
        
        {/* Desktop rounded, Mobile normal */}
        <div className="bg-white shadow-md md:rounded-full rounded-none md:px-6 px-4">

          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Talent Sprout"
                width={120}
                height={50}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                if (item.dropdown) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        className={`relative font-semibold transition ${
                          isActive
                            ? "text-orange-500"
                            : "text-gray-700 hover:text-orange-500"
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                        )}
                      </button>

                      {/* Dropdown */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white shadow-xl px-8 py-8 w-72 border border-orange-500 rounded-xl">
                          <div className="flex flex-col gap-4">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                className={`font-medium transition ${
                                  pathname === sub.path
                                    ? "text-orange-500"
                                    : "text-gray-700 hover:text-orange-500"
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative font-semibold transition ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Contact Button */}
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              open ? "max-h-150 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center text-center gap-5 pb-6">

              {navItems.map((item) => (
                <div key={item.name} className="w-full">
                  
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block font-medium text-lg transition ${
                      pathname === item.path
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {item.dropdown && (
                    <div className="mt-3 flex flex-col items-center gap-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onClick={() => setOpen(false)}
                          className={`text-sm transition ${
                            pathname === sub.path
                              ? "text-orange-500"
                              : "text-gray-600"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-orange-500 text-white px-8 py-2 rounded-full"
              >
                Contact Us
              </Link>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}