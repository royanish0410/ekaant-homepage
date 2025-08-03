"use client";
import { useState } from 'react';
import { contentData } from '@/app/data/content';

export default function FAQSection() {
  const { faqs } = contentData;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

       {/* Section Title with Background Image */}
        <div
          className="w-full min-h-[80px] px-4 flex items-center justify-center text-center mb-14 bg-center bg-contain bg-no-repeat"
          style={{
            backgroundImage: "url('/whatweoffer.png')",
          }}
        >
          <h2 className="text-[10px] sm:text-sm lg:text-xl font-bold text-[#003e17] uppercase tracking-widest leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start container">
        {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
            <div
                key={index}
                className="flex flex-col rounded-2xl border border-[#003E17] overflow-hidden transition-shadow duration-300"
            >
                <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center">
                    <span className="text-[#003e17] text-base font-bold">Q.</span>
                    </div>
                    <h3 className="text-sm sm:text-lg font-semibold text-[#003e17] leading-snug pr-2">
                    {faq.question}
                    </h3>
                </div>

                <div className="flex-shrink-0">
                    <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                    </svg>
                </div>
                </button>

                {/* Answer */}
                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                }`}
                >
                <div className="px-6">
                    <p className="text-[#003e17] text-base leading-relaxed">
                    {faq.answer}
                    </p>
                </div>
                </div>
            </div>
            );
        })}
        </div>
      </div>
    </section>
  );
}
