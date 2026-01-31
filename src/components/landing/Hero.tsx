"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
        >
          <ShieldCheck className="mr-2 h-4 w-4" />
          <span>Stop the subscription creep</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Guard your wallet from{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            forgotten charges
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-slate-600 sm:text-xl"
        >
          SubSentry tracks your recurring expenses, alerts you before renewals, and visualizes your spending habits. Stop paying for what you don't use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105" asChild>
            <Link href="/dashboard">
              Start Tracking Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base transition-all hover:scale-105" asChild>
            <Link href="#features">
              See How It Works
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70" />
      <div className="absolute -left-4 top-20 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-4 bottom-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    </section>
  );
}
