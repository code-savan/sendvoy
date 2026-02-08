import React from 'react';
import { Shield, Zap, Code, Headphones, MapPin, BarChart } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function WhyChooseSection() {
  const features = [
    {
      title: 'Nationwide Coverage',
      desc: 'Door-to-door delivery to all 36 states, including remote locations other companies won\'t serve.',
      icon: MapPin
    },
    {
      title: 'Transparent Pricing',
      desc: 'Real-time cost calculator with no hidden fees. Know exactly what you\'ll pay before you book.',
      icon: BarChart
    },
    {
      title: 'Scale Your Business',
      desc: 'White-label solutions and subscription plans that grow with your business needs.',
      icon: Zap
    },
    {
      title: 'Customer Support',
      desc: 'Dedicated WhatsApp support and account managers for seamless communication.',
      icon: Headphones
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Choose Us Built for Nigerian Businesses
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We understand the unique challenges of logistics in Nigeria. That's why we've built solutions that actually work for your business.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, i) =>
              <FadeIn
                key={i}
                delay={i * 0.1}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 transition-colors">

                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-600/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
