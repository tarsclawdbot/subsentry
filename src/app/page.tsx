import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Stats } from "@/components/landing/Stats";
import { CTA } from "@/components/landing/CTA";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">S</div>
            SubSentry
          </div>
          <nav className="flex items-center gap-4">
             {/* Add nav items here if needed later */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>
      <footer className="border-t py-12 text-center text-sm text-slate-500">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SubSentry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
