'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLinksData from "@/data/NavLinksData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-11/12 lg:w-4/5 max-w-7xl mx-auto border border-white/20 bg-white/80 backdrop-blur-md text-black shadow-lg rounded-2xl transition-all duration-300">
      <nav className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image src="/gakis-front-red.png" alt="logo Gakis ee" width={200} height={60} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {NavLinksData.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href 
                  ? "bg-[#ba283d] text-white shadow-md" 
                  : "hover:bg-gray-200 text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t rounded-b-2xl overflow-hidden animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col p-4 space-y-2">
            {NavLinksData.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;