import React from 'react';
import { Twitter, Linkedin, Github, Facebook, MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
export function Footer() {
  const links = {
    company: ['About Us', 'Careers', 'Blog', 'Contact'],
    services: ['Express Delivery', 'Standard Delivery', 'Interstate Shipping', 'Warehousing', 'Inventory Management', 'White-Label services'],
    product: ['Features', 'Pricing', 'API Docs', 'Integrations'],
    resources: ['Help Center', 'Status', 'Community'],
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
              Your trusted B2B logistics partner in Nigeria, providing reliable delivery and fulfillment solutions.
            </p>

          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link) =>
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

          {/* <div>
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
          </div> */}

          {/* <div>
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
          </div> */}

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

          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-0.5" />
                <a href="#" className="text-sm hover:text-white transition-colors">
                  C102 Zitel Plaza, P.O.W Mafemi crescent, Utako, Abuja
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <a href="tel:+2347073311531" className="text-sm hover:text-white transition-colors">
                  +234 707 331 1531
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-gray-400" />
                <a href="tel:+2349088596100" className="text-sm hover:text-white transition-colors">
                  +234 908 859 6100
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <a href="mailto:info@sendvoy.com" className="text-sm hover:text-white transition-colors">
                  info@sendvoy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col
        sm:flex-row justify-center items-center gap-4">
          <div className="text-sm text-center">
            © 2025 Sendvoy Logistics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>);

}
