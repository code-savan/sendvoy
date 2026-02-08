import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Sendvoy has transformed our delivery operations. Their express delivery service in combination with their pick and pack services and warehousing are incredibly reliable, and our customers love the real-time tracking. Professional service every time!",
      author: 'Miala Beauty',
      role: 'Beauty & Cosmetics',
      company: 'M'
    },
    {
      quote: "Outstanding service! Their bulk delivery solutions have streamlined our supply chain significantly. The dedicated account manager ensures everything runs smoothly.",
      author: 'DMY Global',
      role: 'Import & Export',
      company: 'D'
    },
    {
      quote: "Their warehousing and fulfillment services have been a game-changer for our e-commerce business. Excellent inventory management and fast order processing.",
      author: 'A.O.Stock',
      role: 'E-commerce',
      company: 'B'
    },
    {
      quote: "A very reliable delivery service. Our products reach customers across safely and on time. Great communication throughout the process.",
      author: 'VSP Botanics',
      role: 'Health & Wellness',
      company: 'V'
    },
    {
      quote: "Professional service with competitive pricing. Their scheduled delivery option works perfectly for our regular supply deliveries. Highly recommended!",
      author: 'Amala Central Foods',
      role: 'Fast Food Services',
      company: 'A'
    },
    {
      quote: "Excellent customer service and fast delivery times. Their WhatsApp support makes communication seamless. Perfect partner for growing businesses.",
      author: 'Feramone Beauty',
      role: 'Beauty & Personal Care',
      company: 'F'
    }
  ];

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
