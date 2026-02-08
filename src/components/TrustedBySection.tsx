import React from 'react';
import { FadeIn } from './ui/FadeIn';
const businesses = [
'Miala Beauty',
'DMY Global',
'BTO Limited',
'Yokoyo Joint',
'VSP Botanics',
'Amala Central',
'A.O.Stock',
'Simbi Props',
'Amala Maami',
'Feramone Beauty',
'Business Time',
'Organic Mediks',
'Dental Fix',
'G.O Larry & Associates'];

export function TrustedBySection() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Trusted By Leading Businesses
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Powering logistics for businesses across Nigeria
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {businesses.map((name, index) =>
          <FadeIn key={name} delay={index * 0.04}>
              <div className="flex items-center justify-center h-20 bg-white rounded-xl border border-gray-100 px-4 shadow-sm">
                <span className="text-sm font-semibold text-gray-700 text-center leading-tight">
                  {name}
                </span>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}