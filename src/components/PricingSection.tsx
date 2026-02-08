import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function PricingSection() {
  const plans = [
  {
    name: 'SME Subscription',
    price: '₦4,000',
    period: ' per Delivery',
    desc: 'Perfect for growing businesses with regular delivery needs',
    features: [
    '20-49 deliveries per month',
    'Priority customer support',
    'Real-time tracking',
    'Monthly analytics report'],

    cta: 'Subscribe Now',
    highlight: false
  },
  {
    name: 'Professional Subscription',
    price: '₦3,000',
    period: ' per Delivery',
    desc: 'Perfect for businesses with regular delivery needs',
    features: [
    '50-99 deliveries per month',
    'Priority customer support',
    'Real-time tracking',
    'Monthly analytics report'],

    cta: 'Subscribe Now',
    highlight: true
  },
  {
    name: 'Business Subscription',
    price: '₦2,500',
    period: ' per Delivery',
    desc: 'Ideal for established businesses with high-volume needs',
    features: [
    '100+ deliveries per month',
    'Dedicated account manager',
    'Custom delivery schedules',
    'Advanced reporting & analytics'],

    cta: 'Contact Sales',
    highlight: false
  }];

  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Subscription Plans
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your business logistics needs. Fixed
              prices regardless of the location within Abuja.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) =>
          <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div
              className={`relative h-full bg-white rounded-2xl p-8 ${plan.highlight ? 'ring-2 ring-orange-600 shadow-xl scale-105 z-10' : 'border border-gray-200 shadow-sm'}`}>

                {plan.highlight &&
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
              }

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) =>
                <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                )}
                </ul>

                <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${plan.highlight ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:shadow-lg hover:shadow-orange-500/30' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>

                  {plan.cta}
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}
