"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`
          pointer-events-auto
          relative w-full  transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isScrolled 
            ? "py-2 px-3 bg-white/80 backdrop-blur-md shadow-prominent rounded-full border border-white/40 scale-95" 
            : "py-3 px-6 bg-white/60 backdrop-blur-sm shadow-sm rounded-full border border-white/20 scale-100"
          }
        `}
      >
        <div className="flex items-center border-black border-4 justify-between">
          {/* Logo - Compact & clean */}
          <Link href="/" className="flex items-center gap-2 group mr-8">
            <span className="text-xl font-bold tracking-tight text-secondary block">
              Freight Solutions
            </span>
          </Link>

          {/* Desktop Smart Nav */}
          <nav className="hidden lg:flex items-center bg-white/40 p-1.5 rounded-full border border-white/40 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                onMouseEnter={() => setActiveLink(link.name)}
                className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10"
              >
                {activeLink === link.name && (
                  <span className="absolute inset-0 bg-white rounded-full shadow-sm text-primary -z-10 animate-scale-in" style={{ animationDuration: '0.2s' }}></span>
                )}
                <span className={activeLink === link.name ? "text-primary" : "text-muted hover:text-secondary"}>
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Button 
              type="primary" 
              href="/contact"
              className={`rounded-full shadow-prominent hover:shadow-prominent-lg transition-all ${isScrolled ? 'h-10 px-5 text-sm' : 'h-11 px-6'}`}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-gray-100 text-secondary hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet - Slide Down */}
      <div 
        className={`
          pointer-events-auto
          absolute top-[calc(100%+8px)] left-4 right-4 max-w-5xl mx-auto
          bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMenuOpen ? "opacity-100 translate-y-0 max-h-[400px]" : "opacity-0 -translate-y-4 max-h-0"}
        `}
      >
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 text-secondary font-bold text-lg group transition-colors"
            >
              {link.name}
              <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
            </Link>
          ))}
          <div className="mt-4 p-4 rounded-2xl bg-gray-50 flex flex-col gap-4">
            <Button type="primary" href="/contact" className="w-max justify-center h-12 rounded-xl">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
