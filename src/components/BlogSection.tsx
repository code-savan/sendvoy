import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export function BlogSection() {
  const posts = [
    {
      title: 'The Future of Last-Mile Delivery in Nigeria',
      excerpt: 'Exploring how technology and innovation are reshaping the logistics landscape in Nigeria\'s growing e-commerce market.',
      category: 'Trends',
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
      date: 'March 15, 2024'
    },
    {
      title: '5 Ways to Optimize Your Business Logistics',
      excerpt: 'Practical tips for businesses looking to streamline their supply chain and reduce delivery costs.',
      category: 'Technology',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=2070',
      date: 'March 10, 2024'
    },
    {
      title: 'Understanding Shipping Costs in Nigeria',
      excerpt: 'A comprehensive guide to factors affecting shipping costs and how to optimize your delivery budget.',
      category: 'Sustainability',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?q=80&w=1974',
      date: 'March 5, 2024'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
              Latest from the blog
            </h2>
            <p className="text-gray-600">
              Insights and updates from the logistics world.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="hidden sm:block">
            <a
              href="#"
              className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-1 group">

              View all posts{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) =>
          <FadeIn key={index} delay={index * 0.1}>
              <article className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden relative mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    {post.date && (
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-orange-600 font-medium text-sm">
                    Read More{' '}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}
