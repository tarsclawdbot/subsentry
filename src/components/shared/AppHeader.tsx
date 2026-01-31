"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, CreditCard } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  // { name: "Subscriptions", href: "/subscriptions", icon: CreditCard }, // Merged into Dashboard for now as per simple spec
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-md">S</div>
            <span className="hidden sm:inline-block">SubSentry</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-accent shadow-md" />
        </div>
      </div>
    </header>
  );
}
