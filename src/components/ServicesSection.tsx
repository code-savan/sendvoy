import React from 'react';
import { Zap, Truck, Calendar, Package, MapPin, Check } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
const topServices = [
{
  title: 'Express Delivery',
  description:
  'Ultra-fast 2-hour delivery for time-sensitive packages within Abuja.',
  price: 'Starting at ₦5,000',
  originalPrice: '₦10,000',
  discount: '50% OFF',
  features: [
  '2-hour guaranteed delivery',
  'Live tracking',
  'Priority handling',
  'WhatsApp & In-app notifications'],

  cta: 'Book Now',
  primary: true,
  icon: Zap,
  color: 'blue'
},
{
  title: 'Standard Delivery',
  description:
  '4-8 hours delivery service for your important packages within Abuja.',
  price: 'Starting at ₦2,500',
  originalPrice: '₦5,000',
  discount: '50% OFF',
  features: [
  '4-8 hours delivery',
  'Order status notifications',
  'Delivery confirmation',
  'Email notifications'],

  cta: 'Book Now',
  primary: true,
  icon: Package,
  color: 'indigo'
},
{
  title: 'Scheduled Delivery',
  description:
  'Next-day or planned delivery for your non-urgent packages within Abuja.',
  price: 'Starting at ₦3,500',
  originalPrice: '₦7,000',
  discount: '50% OFF',
  features: [
  'Next-day delivery',
  'Flexible scheduling',
  'Delivery confirmation',
  'In-app order notifications'],

  cta: 'Book Now',
  primary: true,
  icon: Calendar,
  color: 'cyan'
}];

const bottomServices = [
{
  title: 'Bulk Business Delivery',
  description:
  'Custom logistics solutions for businesses with high-volume delivery needs.',
  price: 'Custom Pricing',
  originalPrice: null,
  discount: null,
  features: [
  'Volume discounts',
  'Dedicated account manager',
  'Customized delivery schedules',
  'Reporting and analytics'],

  cta: 'Send Us a Message',
  primary: false,
  icon: Truck,
  color: 'orange'
},
{
  title: 'Interstate Premium',
  description:
  'Door-to-door delivery services across all 36 states in Nigeria.',
  price: 'Starting at ₦5,000',
  originalPrice: null,
  discount: null,
  features: [
  'Nationwide coverage',
  'Door-to-door service',
  'Package insurance',
  'Tracking throughout journey'],

  cta: 'Send Us a Message',
  primary: false,
  icon: MapPin,
  color: 'green'
}];

function ServiceCard({ service }: {service: any;}) {
  return (
    <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={`p-3 rounded-xl bg-${service.color}-50 text-${service.color}-600`}>

          <service.icon className="w-6 h-6" />
        </div>
        {service.discount &&
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
            {service.discount}
          </span>
        }
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Pricing */}
      <div className="mb-6 pb-6 border-b border-gray-50">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-blue-600">
              {service.price}
            </span>
            {service.originalPrice &&
            <span className="text-sm text-gray-400 line-through decoration-gray-400">
                {service.originalPrice}
              </span>
            }
          </div>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {service.features.map((feature: string, i: number) =>
        <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        )}
      </ul>

      {/* CTA */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${service.primary ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/30' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>

        {service.cta}
      </button>
    </div>);

}
export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Logistics Services
            </h2>
            <p className="text-lg text-gray-600">
              Deliver Everywhere. Price Instantly. Scale Smart. Sendvoy's
              comprehensive B2B logistics network ensures your products reach
              every Nigerian customer. Calculate delivery costs in real-time,
              track every shipment, and empower your logistics operations with
              our fair, transparent platform.
            </p>
          </FadeIn>
        </div>

        {/* Top Row: 3 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topServices.map((service, index) =>
          <FadeIn key={index} delay={index * 0.1} className="h-full">
              <ServiceCard service={service} />
            </FadeIn>
          )}
        </div>

        {/* Bottom Row: 2 cards centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
          {bottomServices.map((service, index) =>
          <FadeIn key={index} delay={(index + 3) * 0.1} className="h-full">
              <ServiceCard service={service} />
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}