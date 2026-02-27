'use client';

import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Deep Dive Analysis',
    description: 'Tech & company culture'
  },
  {
    number: 2,
    title: 'Talent Sourcing',
    description: 'Pre-vetted pool & networks'
  },
  {
    number: 3,
    title: 'Technical Screening',
    description: 'Pre-vetted pool & networks'
  },
  {
    number: 4,
    title: 'Rigorous Assessments',
    description: 'Validation processes & assessments'
  },
  {
    number: 5,
    title: 'Interview Coordination',
    description: 'With your team'
  }
];

const RecruitmentProcess = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
          Our Recruitment Process
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A streamlined 5-step approach to finding your perfect tech talent
        </p>
      </div>

      <div className="relative">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-center">
          {steps.map((step, index) => (
            <div
              key={step.number}
           className={`relative z-10 flex flex-col items-center p-6 lg:p-8 transition-all duration-300 group ${
  index === 0 || index === 4 
    ? 'lg:translate-y-12'
    : index === 1 || index === 3
    ? 'lg:-translate-y-12'
    : 'lg:translate-y-0'
}`} 
            >
              {/* Circle number */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-white border-4 border-blue-200 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" />
                <div className="relative bg-linear-to-r from-blue-600 to-indigo-700 text-white text-2xl sm:text-3xl lg:text-4xl font-bold rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shadow-2xl">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="text-center max-w-xs mx-auto">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Person image placeholder - replace with actual images */}
              <div className="mt-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full shadow-lg flex items-center justify-center mx-auto">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
