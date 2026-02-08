import React from 'react';
import { Twitter, Linkedin, Github, Facebook } from 'lucide-react';
export function Footer() {
  const links = {
    company: ['About', 'Careers', 'Press', 'News'],
    product: ['Features', 'Pricing', 'API Docs', 'Integrations'],
    resources: ['Blog', 'Help Center', 'Status', 'Community'],
    legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold text-white">Sendvoy</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Modern infrastructure for global logistics. We make shipping
              simple, transparent, and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm hover:text-white transition-colors">

                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {links.product.map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm hover:text-white transition-colors">

                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm hover:text-white transition-colors">

                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm hover:text-white transition-colors">

                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Sendvoy Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
