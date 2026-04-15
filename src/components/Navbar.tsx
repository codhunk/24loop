"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Collection", href: "/shop" },
    { name: "Atelier", href: "/contact" },
    { name: "Stories", href: "/categories" },
    { name: "Journal", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-black/10 shadow-sm">
      {/* Brand bar */}
      <div className="h-0.5 w-full bg-black"></div>

      <div className="flex justify-between items-center w-full px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        {/* Logo - Font Black and Bold */}
        <Link className="group flex items-center space-x-2" href="/">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-serif text-xl transition-transform">
            24
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-3xl font-black text-black group-hover:text-primary transition-colors">Loop</span>
            <span className="text-[8px] capitalize font-black text-black opacity-50">Studio</span>
          </div>
        </Link>

        {/* Navigation - Font Black Bold, Active Color */}
        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                className={`${
                  isActive ? "text-primary" : "text-black"
                } hover:text-primary font-black text-base capitalize transition-all relative group`}
                href={link.href}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Refined Actions */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden lg:flex items-center text-black/60 hover:text-black transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-xl">search</span>
          </div>

          <Link href="/wishlist" className="text-black/60 hover:text-primary transition-all">
            <span className="material-symbols-outlined text-[26px]">favorite</span>
          </Link>

          <Link href="/cart" className="relative text-black hover:text-primary transition-all">
            <span className="material-symbols-outlined text-[26px]">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-black">2</span>
          </Link>

          <Link href="/orders" className="hidden md:block text-black/60 hover:text-black transition-all">
            <span className="material-symbols-outlined text-[26px]">account_circle</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center space-y-1.5"
          >
            <div className={`h-1 bg-black transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></div>
            <div className={`h-1 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></div>
            <div className={`h-1 bg-black transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-6'}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-black/5 py-12' : 'max-h-0 py-0'}`}>
        <div className="px-10 space-y-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                className={`block text-4xl font-black transition-colors ${
                  isActive ? "text-primary" : "text-black"
                } hover:text-primary`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            onClick={() => setIsOpen(false)}
            className="block text-4xl font-black text-black hover:text-primary transition-colors"
            href="/orders"
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
