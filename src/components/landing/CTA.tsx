"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-2xl sm:px-16"
        >
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to take control of your finances?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Join thousands of users who are saving money every month with SubSentry. It's free to get started.
            </p>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-semibold text-primary transition-transform hover:scale-105" asChild>
              <Link href="/dashboard">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
