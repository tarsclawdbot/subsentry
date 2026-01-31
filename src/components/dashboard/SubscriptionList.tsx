"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";
import { Trash2, Zap, Film, Activity, BookOpen, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSubscriptions } from "@/hooks/use-subscriptions";
import { EditSubscriptionModal } from "@/components/dashboard/EditSubscriptionModal";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Entertainment": return Film;
    case "Productivity": return Zap;
    case "Health": return Activity;
    case "Education": return BookOpen;
    default: return MoreHorizontal;
  }
};

const getCategoryColor = (category: string) => {
   switch (category) {
    case "Entertainment": return "bg-purple-100 text-purple-600";
    case "Productivity": return "bg-blue-100 text-blue-600";
    case "Health": return "bg-emerald-100 text-emerald-600";
    case "Education": return "bg-amber-100 text-amber-600";
    default: return "bg-slate-100 text-slate-600";
  }
};

export function SubscriptionList() {
  const { subscriptions, deleteSubscription } = useSubscriptions();

  if (subscriptions.length === 0) {
    return (
        <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <h3 className="text-lg font-medium text-slate-900">No subscriptions yet</h3>
            <p className="text-slate-500">Add your first subscription to get started.</p>
        </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {subscriptions.map((sub, index) => {
        const Icon = getCategoryIcon(sub.category);
        const colorClass = getCategoryColor(sub.category);
        
        return (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${colorClass}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">${sub.cost.toFixed(2)}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">/{sub.billingCycle}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-1 line-clamp-1">{sub.name}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                   <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                   Next: {format(new Date(sub.nextRenewal), 'MMM d, yyyy')}
                </div>

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 transform translate-x-4 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                    <EditSubscriptionModal subscription={sub} />
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-slate-400 hover:text-red-500 hover:bg-red-50"
                        onClick={() => deleteSubscription(sub.id)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
              </CardContent>
              <div className={`absolute bottom-0 left-0 w-full h-1 ${colorClass.split(" ")[0]}`} />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
