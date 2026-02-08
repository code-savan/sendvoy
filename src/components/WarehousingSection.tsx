import React from 'react';
import { Package, Shield, BarChart, Check, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function WarehousingSection() {
  const services = [
    {
      title: 'Secure Warehousing',
      price: 'Starting at ₦10,000',
      period: '/sqm/month',
      features: [
        'Secure storage facilities',
        '24/7 security monitoring',
        'E-commerce focused warehousing options',
        'Flexible storage options'
      ],
      cta: 'Get Storage Quote',
      icon: Package,
      primary: true
    },
    {
      title: 'Pick & Pack Service',
      price: '₦1,000',
      period: 'per item',
      features: [
        'Professional packaging',
        'Quality control checks',
        'Same-day processing',
        'Branded packaging options'
      ],
      cta: 'Start Fulfillment',
      icon: Shield,
      primary: true
    }
  ];

  const managementFeatures = [
    {
      title: 'Complete Inventory Management',
      description: 'Monitor your inventory levels and movements in real-time',
      icon: BarChart
    },
    {
      title: 'Order Processing',
      description: 'Automated order processing and fulfillment workflows',
      icon: Package
    },
    {
      title: 'Analytics & Reports',
      description: 'Detailed reports on inventory and fulfillment performance',
      icon: BarChart
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="warehousing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Warehousing & Fulfillment Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Complete storage and order fulfillment services designed to scale your business operations
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                
                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-gray-50">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-orange-600">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {service.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:shadow-lg hover:shadow-orange-500/30">
                  {service.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Management Features */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <FadeIn delay={0.3}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Advanced Management Features
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-600/20 mx-auto">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
