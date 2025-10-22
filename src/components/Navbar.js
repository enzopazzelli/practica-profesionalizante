'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/santiago", label: "Sobre Santiago" },
    { href: "/organizacion", label: "Organización" },
    { href: "/entrevistas", label: "Entrevistas" },
    { href: "/problematica", label: "Problemática" },
    { href: "/analisis", label: "Análisis" },
    { href: "/conclusiones", label: "Conclusiones" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Título */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-neutral-900 text-lg hidden md:block">
              Práctica Profesionalizante – ITSE
            </span>
            <span className="font-bold text-neutral-900 text-lg md:hidden">
              PP – ITSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-neutral-900'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-neutral-900'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}