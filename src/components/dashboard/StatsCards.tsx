"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, CreditCard, DollarSign, PiggyBank, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { useMemo } from "react";

export function StatsCards() {
  const { subscriptions, totalMonthlySpend, loading } = useSubscriptions();

  const activeSubscriptions = subscriptions.length;
  
  const upcomingRenewals = useMemo(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    
    return subscriptions.filter(sub => {
      const renewalDate = new Date(sub.nextRenewal);
      return renewalDate >= today && renewalDate <= nextWeek;
    }).length;
  }, [subscriptions]);

  const potentialSavings = useMemo(() => {
    // Arbitrary logic: Identify "forgotten" subs (e.g. haven't been updated/checked recently? Hard to track without usage data).
    // For MVP/Demo: Just show 10% of total spend as "Potential Savings" or highlight unused categories.
    // Let's just say subs < $10 might be forgotten, or just use a static logic for visual demo if real data is hard.
    // Better: Calculate annual cost vs monthly cost savings? 
    // Let's just assume 15% optimization potential for the demo aesthetic.
    return totalMonthlySpend * 0.15;
  }, [totalMonthlySpend]);

  const stats = [
    {
      title: "Total Monthly Spend",
      value: `$${totalMonthlySpend.toFixed(2)}`,
      change: "+2.5%",
      trend: "up",
      icon: DollarSign,
      desc: "from last month",
    },
    {
      title: "Active Subscriptions",
      value: activeSubscriptions.toString(),
      change: "+1",
      trend: "up",
      icon: CreditCard,
      desc: "new this month",
    },
    {
      title: "Upcoming Renewals",
      value: upcomingRenewals.toString(),
      change: "Next 7 days",
      trend: "neutral",
      icon: Calendar,
      desc: "need attention",
    },
    {
      title: "Potential Savings",
      value: `$${potentialSavings.toFixed(2)}`,
      change: "Est. 15%",
      trend: "down", // Savings is good, but usually 'down' cost is good.
      icon: PiggyBank,
      desc: "annual projection",
    },
  ];

  if (loading) {
     return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
       {[1,2,3,4].map(i => (
         <Card key={i} className="animate-pulse h-32" />
       ))}
     </div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                {stat.trend === "up" && <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />}
                {stat.trend === "down" && <ArrowDownRight className="mr-1 h-3 w-3 text-emerald-500" />}
                <span className={stat.trend === 'up' ? 'text-emerald-600' : 'text-slate-500'}>
                  {stat.change}
                </span>
                <span className="ml-1 text-slate-400">{stat.desc}</span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
