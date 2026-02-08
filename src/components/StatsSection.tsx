import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
function Counter({
  from,
  to,
  duration = 2,
  label





}: {from: number;to: number;duration?: number;label: string;}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px'
  });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Easing function for smooth deceleration
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
      setCount(Math.floor(from + (to - from) * easeOutQuart(progress)));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
        {count.toLocaleString()}
        {label.includes('%') ? '%' : '+'}
      </div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {label.replace('%', '')}
      </div>
    </div>);

}
export function StatsSection() {
  const stats = [
  {
    value: 10000,
    label: 'Deliveries'
  },
  {
    value: 99,
    label: 'Uptime %'
  },
  {
    value: 150,
    label: 'Cities'
  },
  {
    value: 500,
    label: 'Partners'
  }];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-x-0 lg:divide-x divide-gray-200">
          {stats.map((stat, index) =>
          <Counter key={index} from={0} to={stat.value} label={stat.label} />
          )}
        </div>
      </div>
    </section>);

}