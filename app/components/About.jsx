'use client';
import { contentData } from '@/app/data/content';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const { about } = contentData;

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 h-full">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image with right-to-left scroll animation */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }} // only trigger once when 30% in view
            >
              <Image
                src={about.image}
                width={300}
                height={300}
                alt="Ekaant Resort Aerial View"
                className="w-full md:w-7/8 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Text content */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl text-[#131212] leading-tight">
                {about.title}
              </h2>

              <div className="space-y-2">
                {about.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#131212] text-base lg:text-lg font-semibold"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-4">
                <button className="cursor-pointer bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center gap-3 text-lg">
                  Explore More
                  <Image src={'/arrow.png'} width={20} height={20} alt="arrow" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
