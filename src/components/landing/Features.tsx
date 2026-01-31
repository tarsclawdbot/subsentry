"use client";

import { motion } from "framer-motion";
import { BarChart3, Bell, Wallet, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Smart Analytics",
    description: "Visualize your spending habits with beautiful charts and insights. Know exactly where your money goes.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Renewal Alerts",
    description: "Get notified before free trials end or annual subscriptions renew. Never pay an unexpected bill again.",
    icon: Bell,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Cost Tracking",
    description: "See your total monthly and yearly commit at a glance. Identify potential savings instantly.",
    icon: Wallet,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Lightning Fast",
    description: "Built for speed with local-first architecture. Your data stays on your device and loads instantly.",
    icon: Zap,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to regain control
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Powerful features wrapped in a simple, beautiful interface designed for modern financial mindfulness.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={item}>
              <Card className="h-full border-none shadow-md transition-shadow hover:shadow-xl">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
