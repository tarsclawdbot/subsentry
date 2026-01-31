import { StatsCards } from "@/components/dashboard/StatsCards";
import { SpendingChart } from "@/components/dashboard/SpendingChart";
import { SubscriptionList } from "@/components/dashboard/SubscriptionList";
import { AddSubscriptionModal } from "@/components/dashboard/AddSubscriptionModal";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <AddSubscriptionModal />
      </div>
      
      <StatsCards />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
         <SpendingChart />
         {/* Could add another widget here, or just let Chart take full width or 4 cols and something else 3 cols */}
         {/* For now, let's keep chart wide or adjust grid. The chart component is set to col-span-4. 
             We can add "Recent Activity" or similar if needed, or just leave as is. 
             The chart is responsive. */}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Your Subscriptions</h2>
        </div>
        <SubscriptionList />
      </div>
    </div>
  );
}
