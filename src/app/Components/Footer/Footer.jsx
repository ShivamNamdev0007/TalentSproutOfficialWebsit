"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C2F34] text-white relative overflow-hidden">
      {/* Top Orange Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 z-0">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,80 C240,140 480,20 720,60 C960,100 1200,140 1440,90 L1440,0 L0,0 Z"
            fill="#F05A28"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10">
          
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md px-4 py-2">
                <img
                  src="/logo.jpg"
                  alt="Talent Sprout"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-6 max-w-xs">
              Growing Talent. Building Future-Ready Workplaces.
            </p>

            <div className="flex gap-4">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#1877F2] cursor-pointer transition hover:scale-105">
                <FaFacebookF size={14} />
              </div>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#0A66C2] cursor-pointer transition hover:scale-105">
                <FaLinkedinIn size={14} />
              </div>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#E1306C] cursor-pointer transition hover:scale-105">
                <FaInstagram size={14} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-wide uppercase relative inline-block cursor-pointer
after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
after:bg-[#F05A28] after:transition-all after:duration-300 
hover:after:w-full">
              Services
            </h3>

            <ul className="space-y-3">
              {[
                "IT & GCC Recruitment",
                "BFSI & Banking Recruitment",
                "Staffing Solutions",
                "POSH Training & Compliance",
                "Empathy & Personality Development",
                "Corporate Training",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-2 cursor-pointer overflow-hidden"
                >
                  {/* Arrow */}
                  <span className="text-[#F05A28] text-sm transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    &gt;
                  </span>

                  {/* Text */}
                  <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-[#F05A28] group-hover:translate-x-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-wide uppercase relative inline-block cursor-pointer
after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
after:bg-[#F05A28] after:transition-all after:duration-300 
hover:after:w-full">
              Company
            </h3>

            <ul className="space-y-3">
              {["Home", "About Us", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-2 cursor-pointer overflow-hidden"
                >
                  <span className="text-[#F05A28] text-sm transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    &gt;
                  </span>

                  <span className="text-gray-400 text-sm transition-all duration-300 group-hover:text-[#F05A28] group-hover:translate-x-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold tracking-wide uppercase relative inline-block cursor-pointer
after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
after:bg-[#F05A28] after:transition-all after:duration-300 
hover:after:w-full">
              Contact Us
            </h3>

            <div className="space-y-4">
              {[
                {
                  icon: <FiMapPin size={18} className="text-[#F05A28] mt-1" />,
                  text: "6193 ATS Dolce Zeta 1, Greater Noida 201306",
                },
                {
                  icon: <FiMail size={18} className="text-[#F05A28]" />,
                  text: "chhavi.sharma@talentsprout.in",
                },
                {
                  icon: <FiPhone size={18} className="text-[#F05A28]" />,
                  text: "+91 70424 17450",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-2 cursor-pointer overflow-hidden"
                >
                  {item.icon}

                  <span className="text-[#F05A28] text-sm transform -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    &gt;
                  </span>

                  <p className="text-gray-400 text-sm transition-all duration-300 group-hover:text-[#F05A28] group-hover:translate-x-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>© 2026 Talent Sprout. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
