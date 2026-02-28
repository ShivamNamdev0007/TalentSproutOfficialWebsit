"use client";

import { Heart,Sparkles,Database,TrendingUp } from "lucide-react";

export default function ProgramWeOffer() {
    const expertise = [
        {
            icon: <Heart size={28} className="text-orange-500" />,
            title: "Empathy & Sensitization Workshops",
            desc: "Interactive workshops that build emotional awareness and sensitivity towards diverse perspectives.",
        },
        {
            icon: <Sparkles size={28} className="text-orange-500" />,
            title: "Personality Development Programs",
            desc: "Comprehensive programs focused on personal growth,confidence building, and professional presence.",
        },
        {
            icon: <Database size={28} className="text-orange-500" />,
            title: "Soft Skills & Communication Training",
            desc: "Training on effective communication, interpersonal skills,and professional etiquette.",
        },
        {
            icon: <TrendingUp size={28} className="text-orange-500" />,
            title: "College-to-Corporate Readiness",
            desc: "Programs designed to help students transition smoothly from academics to professional environments.",
        },
    ];

    return (
        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                    Programs  <span className="text-orange-500"> We Offer</span>
                </h2>

                {/* Subheading */}
                <p className="mt-4 text-gray-500 text-base md:text-lg">
                    Our programs are designed to develop the human skills that drive workplace
                    success and personal growth.
                </p>

                {/* Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#E8DAD2] rounded-2xl py-14 px-8 flex flex-col items-center text-center transition hover:shadow-lg"
                        >
                            {/* Icon Circle */}
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-slate-800">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}