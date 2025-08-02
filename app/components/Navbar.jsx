'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'AMENITIES', href: '#amenities' },
    { name: 'PHOTO GALLERY', href: '#gallery' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const linkClasses =
    'text-black uppercase hover:text-green-600 transition-colors duration-300 whitespace-nowrap';

  return (
    <>
      {/* Spacer */}
      <div className="h-12 bg-transparent" />

      {/* Navbar Wrapper */}
      <div className="absolute top-12 left-0 w-full z-50">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between bg-white shadow-lg h-28 px-[80px] max-w-[2400px] mx-auto items-center">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Ekaant Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side - Nav Links (taking half width) */}
          <nav className="flex justify-end items-center gap-10 xl:gap-16 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${linkClasses} text-base xl:text-lg mx-10 font-semibold tracking-wide`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden bg-white shadow-lg px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Ekaant Logo"
            width={50}
            height={50}
            className="object-contain"
          />

          {/* Hamburger Icon */}
          <button
            className="focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-md px-4 pb-4">
            <nav className="flex flex-col gap-2 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${linkClasses} text-sm py-2 border-b border-gray-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
