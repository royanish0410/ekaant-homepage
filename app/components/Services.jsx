import { contentData } from '@/app/data/content';
import Image from 'next/image';

export default function ServicesSection() {
  const { services } = contentData;

  // Define the actual image paths for each service
  const serviceImages = [
    "/image1.png", // Boutique Farm Stay
    "/image2.png", // Agro-Tourism Activities  
    "/image3.png", // Forest & Wildlife Encounters
    "/image4.png", // Stargazing Nights
    "/image5.png", // Bonfire Evenings
    "/image6.png", // Digital Detox & Wellness
  ];

  return (
    <section className="w-full container py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Title */}
        <div
            className="w-full h-[50px] flex items-center justify-center text-center mb-14"
            style={{
                backgroundImage: "url('/whatweoffer.png')",
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
            >
            <h2 className="text-xl lg:text-2xl font-bold text-[#003e17] uppercase tracking-wide">
                {services.title}
            </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {services.items.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-4xl mb-4 aspect-[4/3]">
                <img 
                  src={serviceImages[index]}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-black text-center group-hover:text-green-700 transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Book Now Button */}
        <div className="text-center">
            <button className="cursor-pointer bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center gap-3 text-lg">
                Book Now
                <Image src={'/arrow.png'} width={20} height={20} alt='arrow'/>
            </button>
        </div>

      </div>
    </section>
  );
}