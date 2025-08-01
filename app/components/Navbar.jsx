'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="relative w-full">
      {/* Navbar Content (Logo + Links) */}
      <div className="flex justify-between items-center px-16 h-20 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>
        {/* Navigation Links */}
        <ul className="flex gap-10 font-bold text-black uppercase text-lg">
          <li>
            <Link href="#home" className="hover:text-green-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#amenities" className="hover:text-green-600">
              Amenities
            </Link>
          </li>
          <li>
            <Link href="#gallery" className="hover:text-green-600">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-600">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
