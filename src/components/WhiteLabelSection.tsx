import React from 'react';
import {
  Globe,
  Smartphone,
  Users,
  BarChart,
  CreditCard,
  Zap,
  CheckCircle2,
  ArrowRight } from
'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function WhiteLabelSection() {
  const features = [
  {
    title: 'Your Brand, One Technology',
    description: 'Complete white-label solution with your branding',
    icon: Globe
  },
  {
    title: 'Custom Technology Platform',
    description:
    'Branded web apps for your customers to book and track deliveries',
    icon: Smartphone
  },
  {
    title: 'Full Operational Support',
    description:
    'End-to-end logistics operations managed by our experienced team',
    icon: Users
  }];

  const benefits = [
  'Branded web apps',
  'Fleet management and logistics operations',
  'Dedicated account management',
  'Real-time analytics and reporting',
  'Payment processing and reconciliation',
  'No Revenue Sharing!'];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
              White Label Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Power your business with our logistics infrastructure in your
              brand name
            </h3>
            <p className="text-xl text-gray-600">
              Launch Your Logistics Service Today
            </p>
          </FadeIn>
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Value Prop & CTAs */}
          <div>
            <FadeIn>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Partner with Sendvoy to offer logistics services in your brand.
              </h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We provide the infrastructure and technology, while you focus on
                growing your customer base and building your brand.
              </p>

              <div className="space-y-8 mb-10">
                {features.map((feature, index) =>
                <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">
                  Become a Partner
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right: What You Get Card */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  What You Get
                </h4>

                <ul className="space-y-5">
                  {benefits.map((benefit, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${index === benefits.length - 1 ? 'text-yellow-400' : 'text-blue-400'}`} />

                      <span
                      className={`text-lg ${index === benefits.length - 1 ? 'font-bold text-yellow-400' : 'text-gray-200'}`}>

                        {benefit}
                      </span>
                    </li>
                  )}
                </ul>

                <div className="mt-10 pt-8 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) =>
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700">
                      </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">
                      Join 50+ white label partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}