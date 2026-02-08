import React from 'react';
import { FadeIn } from './ui/FadeIn';

export function CalculatorSection() {
  return (
    <section className="py-24 bg-gray-50" id="calculator">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Delivery Calculator
            </h2>
            <p className="text-lg text-gray-600">
              Get instant pricing for your delivery needs
            </p>
          </FadeIn>
        </div>

        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg p-6">
            <div className="mb-6">
            <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Location
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button className="w-full py-2 px-4 border border-orange-300 rounded-md text-orange-600 font-medium bg-orange-50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Select Area
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Use Map
              </button>
            </div>
            <select
              id="pickup-area"
              name="pickup-area"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              defaultValue="Select Area in Abuja"
            >
              <option>Select Area in Abuja</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="delivery-location" className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Location
            </label>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <button className="w-full py-2 px-4 border border-orange-300 rounded-md text-orange-600 font-medium bg-orange-50 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Select Area
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Use Map
              </button>
            </div>
            <select
              id="delivery-area"
              name="delivery-area"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              defaultValue="Select Area in Abuja"
            >
              <option>Select Area in Abuja</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="package-type" className="block text-sm font-medium text-gray-700 mb-2">
              Package Type Examples
            </label>
            <select
              id="package-type"
              name="package-type"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              defaultValue="Select Package Type"
            >
              <option>Select Package Type</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="delivery-priority" className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Priority
            </label>
            <select
              id="delivery-priority"
              name="delivery-priority"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
              defaultValue="Select Delivery Speed"
            >
              <option>Select Delivery Speed</option>
            </select>
          </div>

          <button className="w-full py-3 px-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-bold rounded-lg hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 shadow-lg">
            Calculate Price
          </button>
          </div>
        </div>
      </div>

    </section>
  );
}
