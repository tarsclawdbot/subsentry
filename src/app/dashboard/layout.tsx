import { AppHeader } from "@/components/shared/AppHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <AppHeader />
      <main className="container py-8">
        {children}
      </main>
    </div>
  );
}
