export default function HeroSection() {
    return (
      <section
        className="relative flex items-center justify-center w-full min-h-[90vh] md:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Text Container */}
        <div className="relative z-10 max-w-[1200px] px-6 text-center">
          <h1 className="text-white font-extrabold tracking-[-0.02em] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            WELCOME TO EKAANT—AGRO TOURISM RETREAT NEAR BOR TIGER RESERVE, MAHARASHTRA
          </h1>
          <p className="mt-4 text-white italic text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Where Silence Heals, And Nature Whispers.....
          </p>
        </div>
      </section>
    );
  }
  