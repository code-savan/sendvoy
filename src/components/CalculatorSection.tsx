import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
export function CalculatorSection() {
  const [result, setResult] = useState<{
    cost: number;
    days: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate calculation
    setTimeout(() => {
      setResult({
        cost: 125.5,
        days: 2
      });
      setLoading(false);
    }, 800);
  };
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Estimate your shipping costs
            </h2>
            <p className="text-lg text-gray-600">
              Get an instant quote for your next shipment.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <form
              onSubmit={handleCalculate}
              className="grid md:grid-cols-4 gap-4 items-end">

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  From
                </label>
                <input
                  type="text"
                  placeholder="City or Zip"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required />

              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  To
                </label>
                <input
                  type="text"
                  placeholder="City or Zip"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required />

              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                  <option>0-5 kg</option>
                  <option>5-20 kg</option>
                  <option>20-100 kg</option>
                  <option>100+ kg</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all">

                  {loading ? 'Calculating...' : 'Calculate'}
                </button>
              </div>
            </form>

            <AnimatePresence>
              {result && !loading &&
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                className="mt-8 pt-8 border-t border-gray-100 overflow-hidden">

                  <div className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 rounded-xl p-6">
                    <div>
                      <div className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-1">
                        Estimated Cost
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        ${result.cost.toFixed(2)}
                      </div>
                    </div>
                    <div className="hidden sm:block h-10 w-px bg-blue-200 mx-6"></div>
                    <div className="mt-4 sm:mt-0 text-center sm:text-left">
                      <div className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-1">
                        Delivery Time
                      </div>
                      <div className="text-3xl font-bold text-gray-900">
                        {result.days} Days
                      </div>
                    </div>
                    <button className="mt-4 sm:mt-0 px-6 py-2 bg-white text-blue-600 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>);

}