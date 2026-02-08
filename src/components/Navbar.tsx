import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Services',
    href: '#services'
  },
  {
    name: 'Warehousing',
    href: '#warehousing'
  },
  {
    name: 'Pricing',
    href: '#pricing'
  },
  {
    name: 'Calculator',
    href: '#calculator'
  },
  {
    name: 'Blog',
    href: '#blog'
  },
  {
    name: 'Contact',
    href: '#get-in-touch'
  }
];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Sendvoy
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >

                {link.name}
              </a>
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2">
              Log in
            </button>
            <button className="group relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900">

              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-gray-100 overflow-hidden">

            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >

                {link.name}
              </a>
            )}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="w-full text-center px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg">
                  Log in
                </button>
                <button className="w-full text-center px-4 py-3 text-base font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}
