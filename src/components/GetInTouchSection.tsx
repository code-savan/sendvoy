import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Building } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function GetInTouchSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
    className="py-24 bg-gradient-to-br from-gray-50 via-white
    to-orange-50/30 relative overflow-hidden"
    id="get-in-touch"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-orange-400/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to streamline your logistics? Contact us today for a customized solution tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className=" backdrop-blur-sm p-8 ">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                        <Mail className="w-6 h-6 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Email</p>
                          <a href="mailto:info@sendvoy.com" className="text-orange-600 hover:text-orange-700 transition-colors">
                            info@sendvoy.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                        <Phone className="w-6 h-6 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Phone</p>
                          <a href="tel:+2347073311531" className="text-orange-600 hover:text-orange-700 transition-colors">
                            +234 707 331 1531
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl">
                        <MessageCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                          <a href="https://wa.me/23409088596100" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">
                            09088596100
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-white/60 rounded-xl lg:col-span-2">
                        <Building className="w-6 h-6 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Address</p>
                          <p className="text-gray-700 leading-relaxed">
                            C102 Zitel Plaza<br />
                            P.O.W Mafemi Crescent<br />
                            Utako, Abuja
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div>
              <FadeIn delay={0.2}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                      <Send className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="express">Express Delivery</option>
                        <option value="standard">Standard Delivery</option>
                        <option value="warehousing">Warehousing & Fulfillment</option>
                        <option value="bulk">Bulk Business Delivery</option>
                        <option value="white-label">White Label Solutions</option>
                        <option value="tracking">Real-time Tracking</option>
                      </select>
                    </div>

                    <div className="lg:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your logistics needs...
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none bg-white/80 backdrop-blur-sm"
                        placeholder="Describe your logistics requirements..."
                        required
                      />
                    </div>


                    <button
                      type="submit"
                      className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
