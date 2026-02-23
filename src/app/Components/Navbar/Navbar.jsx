"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

<<<<<<< HEAD:Components/Navbar/Navbar.jsx
export default function Navbar() {
=======
const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
];

function Navbar() {
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "IT & GCC Recruitment", path: "/he" },
        { name: "BFSI & Banking Recruitment", path: "" },
        { name: "Empathy & Personality", path: "/services/seo" },
        { name: "Staffing Solutions", path: "" },
        { name: "POSH Training & Compliance ", path: "" },
      ],
    },
    { name: "About", path: "/about" },
  ];

  return (
<<<<<<< HEAD:Components/Navbar/Navbar.jsx
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="bg-white shadow-md lg:rounded-full lg:px-6 px-4">
          <div className="flex items-center justify-between h-16">

=======
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="bg-white backdrop-blur-md shadow-md rounded-full px-6">
          <div className="flex items-center justify-between h-16">
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx
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
<<<<<<< HEAD:Components/Navbar/Navbar.jsx
            <div className="hidden md:flex items-center gap-10">

=======
            <div className="hidden md:flex items-center gap-8">
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                // Dropdown item (Services)
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        className={`font-bold ${
                          isActive ? "text-orange-500" : "text-gray-800"
                        }`}
                      >
                        {item.name}
                      </button>

                      {/* Dropdown */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 top-12 
                                   opacity-0 invisible 
                                   group-hover:opacity-100 
                                   group-hover:visible 
                                   transition-all duration-300"
                      >
                        <div
                          className="bg-white shadow-xl px-8 py-8 w-72 
                                     border border-orange-500 relative"
                          style={{
                            clipPath:
                              "polygon(0 10%, 45% 10%, 50% 0%, 55% 10%, 100% 10%, 100% 100%, 0% 100%)",
                          }}
                        >
                          <div className="flex flex-col gap-4 mt-4">
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

                // Normal items
                return (
                  <Link
                    key={item.name}
                    href={item.path}
<<<<<<< HEAD:Components/Navbar/Navbar.jsx
                    className={`font-bold ${
                      isActive ? "text-orange-500" : "text-gray-800"
                    }`}
                  >
                    {item.name}
=======
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
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx
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
<<<<<<< HEAD:Components/Navbar/Navbar.jsx
          {open && (
            <div className="md:hidden pb-4 flex flex-col gap-4">

              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="flex flex-col gap-2">
                      <span className="font-semibold text-gray-800">
                        {item.name}
                      </span>

                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onClick={() => setOpen(false)}
                          className={`pl-4 ${
                            pathname === sub.path
                              ? "text-orange-500"
                              : "text-gray-600"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
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
                );
              })}
=======
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-medium transition ${
                    pathname === item.path
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="bg-orange-500 text-white px-6 py-2 rounded-full w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
<<<<<<< HEAD:Components/Navbar/Navbar.jsx
}
=======
}

export default Navbar;
>>>>>>> 230eb28d2645576befcd0e854db9c0ba3757459a:src/app/Components/Navbar/Navbar.jsx
