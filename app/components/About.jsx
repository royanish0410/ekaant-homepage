import { contentData } from '@/app/data/content';
import Image from 'next/image';

export default function AboutSection() {
  const { about } = contentData;

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50 h-full">
      <div className='container'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image - Show above text on small, right on large */}
            <div className="order-1 lg:order-2">
              <Image
                src={about.image}
                width={300}
                height={300}
                alt="Ekaant Resort Aerial View"
                className="w-full md:w-7/8 object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Text Content - Below image on small, left on large */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl text-black leading-tight">
                {about.title}
              </h2>

              <div className="space-y-2">
                <p className="text-gray-800 text-base lg:text-lg font-semibold">
                  <span className="font-semibold">Meaning Solitude In Sanskrit</span> — Was Born From A Simple Yet Powerful Vision: To Create A Space Where People Could Escape The Chaos Of Everyday Life And Experience True Peace In The Lap Of Nature.
                </p>

                <p className="text-gray-800 text-base lg:text-lg font-semibold">
                  Our Retreat Is Designed Around The Principles Of Sustainable Living, Mindful Travel, And Authentic Rural Experiences. At Ekaant, You'll Find No Loud Music, No Distractions — Only Nature's Rhythm, Traditional Hospitality, And The Gentle Hum Of Wildlife.
                </p>

                <p className="text-gray-800 text-base lg:text-lg font-semibold">
                  Whether You're A Solo Traveller Looking For Quiet, A Couple Seeking A Soulful Escape, Or A Family Wanting To Introduce Your Children To The Joys Of Rural India — Ekaant Welcomes You With Open Arms And A Calm Heart.
                </p>
              </div>

              <div className="pt-4">
                <button className="cursor-pointer bg-green-800 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center gap-3 text-lg">
                  Explore More
                  <Image src={'/arrow.png'} width={20} height={20} alt='arrow' />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
