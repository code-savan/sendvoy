import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1646625573908-82208b03cfa4?q=80&w=2075"
          alt="Logistics background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-700/90"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to transform your logistics?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Join 500+ companies that trust Sendvoy to power their global supply
            chain operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-50 transition-colors shadow-lg shadow-black/10">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Talk to Sales <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>);

}
