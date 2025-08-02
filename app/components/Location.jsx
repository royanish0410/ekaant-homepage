"use client"
import { contentData } from '@/app/data/content';
import Image from 'next/image';

export default function LocationSection() {
  const { location } = contentData;

  return (
    <section className="w-full bg-gray-200 relative overflow-hidden">
      
      {/* Top Right Vector Image */}
      <Image 
        src="/sidevector.png" 
        width={100} 
        height={100} 
        alt="vector"
        className="absolute top-0 right-0 z-20 pointer-events-none w-12 sm:w-16 lg:w-20"
        priority
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* Left Side - Main Image */}
        <div className="flex justify-start pt-6 sm:pt-10">
          <div className="relative w-full sm:w-[80vw] lg:w-[50vw] max-w-full h-auto pr-4 sm:pr-8">
            <Image 
              src="/TracedImage.png"
              width={800}
              height={500}
              alt="How to reach Ekaant - Location illustration"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="pt-4 pb-10 container lg:px-12">
          <div className="space-y-6">
            {location.methods.map((method, index) => (
              <div key={index} className="space-y-3">
                
                {/* Method Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003e17]">
                  {method.type}
                </h3>

                {/* Method Details */}
                <ul className="space-y-3">
                  {method.details.map((detail, detailIndex) => (
                    <li 
                      key={detailIndex} 
                      className="flex items-start space-x-3 text-[#003e17] text-base sm:text-lg lg:text-xl leading-tight"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Dashed Divider */}
                {index < location.methods.length - 1 && (
                  <div className="border-t border-dashed border-gray-400 mt-6 pt-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}