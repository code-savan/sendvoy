import React from 'react';
import {
  ArrowRight,
  Play,
  Package,
  MapPin,
  Truck,
  CheckCircle2 } from
'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-600 mr-2 animate-pulse"></span>
                New: Real-time global tracking API
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Logistics infrastructure for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-700">
                  modern businesses
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Sendvoy provides the API and dashboard to manage shipments,
                track deliveries in real-time, and automate your entire
                logistics workflow.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
                Start Shipping
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Demo
              </button>
            </FadeIn>

            <FadeIn
              delay={0.5}
              className="mt-10 flex items-center gap-4 text-sm text-gray-500">

              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) =>
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden`}>

                    <div
                    className={`w-full h-full bg-gradient-to-br from-gray-100 to-gray-300`} />

                  </div>
                )}
              </div>
              <p>Trusted by 500+ forward-thinking companies</p>
            </FadeIn>
          </div>

          {/* Right Content - CSS Dashboard Mockup */}
          <FadeIn
            delay={0.4}
            direction="left"
            className="relative lg:h-[600px] flex items-center justify-center">

            <div className="relative w-full max-w-[600px] aspect-[4/3] perspective-1000">
              {/* Main Dashboard Card */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
                {/* Dashboard Header */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-2 w-32 bg-gray-100 rounded-full"></div>
                </div>

                {/* Dashboard Body */}
                <div className="p-6 grid grid-cols-12 gap-6 h-[calc(100%-3.5rem)] bg-gray-50/50">
                  {/* Sidebar */}
                  <div className="col-span-3 space-y-3 hidden sm:block">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <div
                      key={i}
                      className={`h-8 w-full rounded-lg ${i === 2 ? 'bg-orange-50 text-orange-600' : 'hover:bg-gray-100'} flex items-center px-2`}>

                        <div
                        className={`w-4 h-4 rounded ${i === 2 ? 'bg-orange-200' : 'bg-gray-200'} mr-2`}>
                      </div>
                        <div
                        className={`h-2 w-16 rounded ${i === 2 ? 'bg-orange-200' : 'bg-gray-200'}`}>
                      </div>
                      </div>
                    )}
                  </div>

                  {/* Main Content */}
                  <div className="col-span-12 sm:col-span-9 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                      {
                        label: 'Active Shipments',
                        val: '1,248',
                        color: 'orange'
                      },
                      {
                        label: 'In Transit',
                        val: '842',
                        color: 'orange'
                      },
                      {
                        label: 'Delivered',
                        val: '12.4k',
                        color: 'green'
                      }].
                      map((stat, i) =>
                      <div
                        key={i}
                        className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">

                          <div className="h-2 w-16 bg-gray-100 rounded mb-3"></div>
                          <div className="text-xl font-bold text-gray-900">
                            {stat.val}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Map Area */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-1 h-48 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-orange-50/30"></div>
                      {/* Abstract Map Dots */}
                      {[...Array(10)].map((_, i) =>
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse"
                        style={{
                          top: `${Math.random() * 80 + 10}%`,
                          left: `${Math.random() * 80 + 10}%`,
                          animationDelay: `${Math.random() * 2}s`
                        }}>
                      </div>
                      )}
                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path
                          d="M 50 150 Q 150 50 300 100 T 500 80"
                          fill="none"
                          stroke="#FB923C"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="opacity-50" />

                      </svg>

                      {/* Floating Delivery Card */}
                      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100 w-48 transform transition-transform group-hover:scale-105">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-500">
                            #TRK-9281
                          </span>
                          <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                            On Time
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                          <div className="h-1 w-full bg-gray-100 rounded">
                            <div className="h-1 w-2/3 bg-orange-500 rounded"></div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400">
                          <span>NY</span>
                          <span>LDN</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent List */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      {[1, 2, 3].map((i) =>
                      <div
                        key={i}
                        className="p-3 border-b border-gray-50 flex items-center justify-between last:border-0">

                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                              <Package size={14} />
                            </div>
                            <div>
                              <div className="h-2 w-24 bg-gray-100 rounded mb-1"></div>
                              <div className="h-1.5 w-16 bg-gray-50 rounded"></div>
                            </div>
                          </div>
                          <div className="h-2 w-12 bg-gray-100 rounded"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements behind */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-br from-orange-100/50 to-orange-100/50 rounded-2xl transform rotate-6 scale-95 blur-sm"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}
