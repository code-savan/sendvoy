import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function BlogSection() {
  const posts = [
  {
    title: 'The Future of Last-Mile Delivery',
    excerpt:
    'How autonomous vehicles and drones are reshaping the final leg of logistics.',
    category: 'Trends',
    color: 'orange'
  },
  {
    title: 'Optimizing Supply Chains with AI',
    excerpt:
    'Leveraging machine learning to predict demand and route shipments more efficiently.',
    category: 'Technology',
    color: 'purple'
  },
  {
    title: 'Sustainable Shipping Practices',
    excerpt:
    'Reducing carbon footprint in logistics without compromising on speed.',
    category: 'Sustainability',
    color: 'green'
  }];

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
                <div
                className={`aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 mb-6 overflow-hidden relative`}>

                  <div
                  className={`absolute inset-0 bg-gradient-to-br from-${post.color}-500/10 to-${post.color}-600/10 group-hover:scale-105 transition-transform duration-500`}>
                </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-orange-600 font-medium text-sm">
                  Read More{' '}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}
