'use client';
import { motion } from 'framer-motion';
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-end w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        paddingTop: '0',
      }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[2320px] px-4 sm:px-6 lg:px-8 text-center mx-auto mb-12">
        <motion.div
          className="pt-32 lg:pt-48"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Heading */}
          <h1 className="text-white font-bold uppercase leading-[110%] tracking-tight drop-shadow-2xl mb-2 mx-auto max-w-[90%] text-[32px] md:text-[45px] lg:text-[40px] xl:text-[40.65px]">
            WELCOME TO EKAANT—AGRO TOURISM RETREAT <br className="hidden md:block" /> NEAR BOR TIGER RESERVE, MAHARASHTRA
          </h1>

          {/* Subtitle */}
          <p className="text-white font-light drop-shadow-lg leading-relaxed text-xs md:text-md lg:text-lg xl:text-xl px-4 md:px-0">
            Where Silence Heals, And Nature Whispers.....
          </p>
        </motion.div>
      </div>
    </section>
  );
}
