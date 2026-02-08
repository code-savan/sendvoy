import React from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Truck, MapPin, Home, Clock } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function TrackingSection() {
  const steps = [
  {
    id: 1,
    title: 'Order Placed',
    date: 'Oct 24, 09:30 AM',
    status: 'completed',
    icon: Package
  },
  {
    id: 2,
    title: 'Picked Up',
    date: 'Oct 24, 02:15 PM',
    status: 'completed',
    icon: Clock
  },
  {
    id: 3,
    title: 'In Transit',
    date: 'Oct 25, 08:00 AM',
    status: 'completed',
    icon: Truck
  },
  {
    id: 4,
    title: 'Out for Delivery',
    date: 'Today, 07:30 AM',
    status: 'active',
    icon: MapPin
  },
  {
    id: 5,
    title: 'Delivered',
    date: 'Estimated 02:00 PM',
    status: 'pending',
    icon: Home
  }];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Real-time tracking, reimagined
            </h2>
            <p className="text-lg text-gray-600">
              Give your customers the transparency they deserve with our
              granular, real-time event updates.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          {/* Desktop Stepper */}
          <div className="hidden lg:flex items-center justify-between relative z-10">
            {steps.map((step, index) =>
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10 w-48">

                <motion.div
                initial={
                step.status === 'completed' ?
                {
                  scale: 0.8,
                  opacity: 0
                } :
                {}
                }
                whileInView={
                step.status === 'completed' ?
                {
                  scale: 1,
                  opacity: 1
                } :
                {}
                }
                transition={{
                  delay: index * 0.2
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${step.status === 'completed' ? 'bg-blue-600 border-blue-600 text-white' : step.status === 'active' ? 'bg-white border-blue-600 text-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)]' : 'bg-white border-gray-200 text-gray-300'}`}>

                  {step.status === 'completed' ?
                <Check className="w-6 h-6" /> :

                <step.icon className="w-5 h-5" />
                }
                </motion.div>

                <div className="mt-4 text-center">
                  <h3
                  className={`text-sm font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>

                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                </div>
              </div>
            )}

            {/* Connecting Line Background */}
            <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-100 -z-10" />

            {/* Connecting Line Active Progress */}
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: '75%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="absolute top-6 left-0 h-0.5 bg-blue-600 -z-10" />

          </div>

          {/* Mobile Vertical Stepper */}
          <div className="lg:hidden space-y-8 relative pl-4">
            <div className="absolute top-2 bottom-2 left-[27px] w-0.5 bg-gray-100" />
            {steps.map((step, index) =>
            <div
              key={step.id}
              className="flex items-start gap-4 relative z-10">

                <div
                className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${step.status === 'completed' ? 'bg-blue-600 border-blue-600 text-white' : step.status === 'active' ? 'bg-white border-blue-600 text-blue-600' : 'bg-white border-gray-200 text-gray-300'}`}>

                  {step.status === 'completed' && <Check className="w-3 h-3" />}
                </div>
                <div>
                  <h3
                  className={`text-sm font-bold ${step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'}`}>

                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>);

}