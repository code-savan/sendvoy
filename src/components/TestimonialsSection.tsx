import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function TestimonialsSection() {
  const testimonials = [
  {
    quote:
    'Sendvoy transformed our supply chain visibility. We went from guessing when shipments would arrive to knowing exactly where they are at all times.',
    author: 'Sarah Jenkins',
    role: 'VP of Operations',
    company: 'TechFlow Inc.'
  },
  {
    quote:
    'The API documentation is world-class. Our engineering team was able to integrate Sendvoy into our custom ERP in less than a week.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'GlobalTrade'
  },
  {
    quote:
    'Customer support that actually cares. When we had a critical shipment stuck in customs, the Sendvoy team worked through the night to resolve it.',
    author: 'Elena Rodriguez',
    role: 'Logistics Manager',
    company: 'FreshFoods'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by industry leaders
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
          <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col">
                <Quote className="w-10 h-10 text-orange-100 mb-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) =>
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                )}
                </div>
                <p className="text-gray-600 mb-6 flex-grow italic leading-relaxed">
                  "{item.quote}"
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-gray-900">{item.author}</div>
                  <div className="text-sm text-gray-500">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}
