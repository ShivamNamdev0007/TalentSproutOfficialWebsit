"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 pt-4">

        {/* Navbar Container */}
        <div className="
          bg-white backdrop-blur shadow-md
          lg:rounded-full lg:px-6
          rounded-none px-4
        ">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}  
            <Link href="/" className="flex items-center">
              <img
                src="/logo.jpg"
                alt="Talent Sprout"
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative font-bold ${
                      isActive ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-medium ${
                    pathname === item.path
                      ? "text-orange-500"
                      : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-orange-500 text-white px-6 py-2 rounded-full w-fit"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
