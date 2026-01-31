"use client";

import { useMemo } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { motion } from "framer-motion";

export function SpendingChart() {
  const { totalMonthlySpend } = useSubscriptions();

  const data = useMemo(() => {
    const currentMonth = new Date();
    const result = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - i, 1);
      const monthName = d.toLocaleString('default', { month: 'short' });
      // Simulate some variance
      const variance = Math.random() * 0.2 - 0.1; // +/- 10%
      const amount = totalMonthlySpend * (1 + (i === 0 ? 0 : variance));
      result.push({
        name: monthName,
        total: Math.round(amount),
      });
    }
    return result;
  }, [totalMonthlySpend]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Spending Overview</CardTitle>
          <CardDescription>
            Your monthly subscription costs over the last 6 months.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
