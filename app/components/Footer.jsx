"use client";
import { contentData } from '@/app/data/content';

export default function Footer() {
  const { footer } = contentData;

  return (
    <footer className="w-full py-10 bg-[#003E17]">
      <div className="container">
        {/* Two-Part Horizontal Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-white">

          {/* Left Part: Message */}
          <div className="lg:w-1/2 pr-8">
            <h2 className="text-xl lg:text-2xl leading-relaxed whitespace-pre-line text-center md:text-left">
              {footer.leftText}
            </h2>
          </div>

          {/* Right Part: Contact Info */}
          <div className="lg:w-1/2 px-4 flex justify-center">
            <div className="text-sm sm:text-base lg:text-lg text-left uppercase whitespace-pre-line">
              <p>Call/WhatsApp: {footer.contact.phone}</p>
              <p>Email: {footer.contact.email}</p>
              <p>Instagram: {footer.contact.instagram}</p>
              <p>Location: {footer.contact.location}</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
