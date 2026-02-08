import React from 'react';
import { Shield, Zap, Code, Headphones } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why leading companies choose Sendvoy
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've rebuilt logistics from the ground up with a technology-first
              approach. No more phone calls, paper trails, or guessing games.
            </p>
            <div className="prose prose-blue text-gray-600">
              <p>
                Our platform integrates directly with your existing ERP and
                e-commerce stacks, providing a single source of truth for all
                your shipping operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
            {
              title: 'Real-Time Visibility',
              desc: 'Track every shipment down to the meter with our GPS-enabled fleet.',
              icon: Zap
            },
            {
              title: 'Enterprise Security',
              desc: 'SOC2 Type II certified platform ensuring your data is always protected.',
              icon: Shield
            },
            {
              title: 'API-First Platform',
              desc: 'Modern REST & GraphQL APIs that developers love to build with.',
              icon: Code
            },
            {
              title: 'Dedicated Support',
              desc: '24/7 priority support from logistics experts who know your business.',
              icon: Headphones
            }].
            map((item, i) =>
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
    </section>);

}
