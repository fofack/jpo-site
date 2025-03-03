"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              GOOD HEALTH CENTER
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className="hover:bg-green-700 px-3 py-2 rounded-md text-white"
              >
                Accueil
              </Link>
              <Link 
                href="/services" 
                className="hover:bg-green-700 px-3 py-2 rounded-md text-white"
              >
                Services
              </Link>
              <Link 
                href="/products" 
                className="hover:bg-green-700 px-3 py-2 rounded-md text-white"
              >
                Produits
              </Link>
              <Link 
                href="/indications" 
                className="hover:bg-green-700 px-3 py-2 rounded-md text-white"
              >
                Indications
              </Link>
              <Link 
                href="/contact" 
                className="hover:bg-green-700 px-3 py-2 rounded-md text-white"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-700"
            >
              <span className="sr-only">Menu principal</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/products"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/indications"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Indications
            </Link>
            <Link
              href="/contact"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
