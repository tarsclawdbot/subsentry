"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: "10,000+", delay: 0 },
  { label: "Money Saved", value: "$2M+", delay: 0.1 },
  { label: "Subscriptions Tracked", value: "150k+", delay: 0.2 },
  { label: "App Store Rating", value: "4.9/5", delay: 0.3 },
];

export function Stats() {
  return (
    <section className="border-y bg-white py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="text-center"
            >
              <div className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
