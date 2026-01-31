"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubscriptions } from "@/hooks/use-subscriptions";

const CATEGORIES = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Productivity", label: "Productivity" },
  { value: "Utilities", label: "Utilities" },
  { value: "Health", label: "Health & Fitness" },
  { value: "Education", label: "Education" },
  { value: "Other", label: "Other" },
];

const CYCLES = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
  { value: "weekly", label: "Weekly" },
];

export function AddSubscriptionModal() {
  const { addSubscription } = useSubscriptions();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    billingCycle: "monthly",
    category: "Other",
    nextRenewal: new Date().toISOString().split('T')[0],
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubscription({
      name: formData.name,
      cost: parseFloat(formData.cost),
      billingCycle: formData.billingCycle as 'monthly' | 'yearly' | 'weekly',
      category: formData.category,
      nextRenewal: formData.nextRenewal, // In real app, might want full ISO string
      notes: formData.notes,
    });
    setOpen(false);
    setFormData({
      name: "",
      cost: "",
      billingCycle: "monthly",
      category: "Other",
      nextRenewal: new Date().toISOString().split('T')[0],
      notes: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
          <Plus className="h-4 w-4" /> Add Subscription
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Subscription</DialogTitle>
          <DialogDescription>
            Add a new recurring expense to your dashboard.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Netflix, Spotify, etc."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cost">Cost</Label>
                <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                    <Input
                        id="cost"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="pl-7"
                        value={formData.cost}
                        onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                        required
                    />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cycle">Cycle</Label>
                <Select
                    value={formData.billingCycle}
                    onValueChange={(val) => setFormData({ ...formData, billingCycle: val })}
                >
                  <SelectTrigger id="cycle">
                    <SelectValue placeholder="Select cycle" />
                  </SelectTrigger>
                  <SelectContent>
                    {CYCLES.map((cycle) => (
                        <SelectItem key={cycle.value} value={cycle.value}>{cycle.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                  value={formData.category}
                  onValueChange={(val) => setFormData({ ...formData, category: val })}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="renewal">Next Renewal</Label>
              <Input
                id="renewal"
                type="date"
                value={formData.nextRenewal}
                onChange={(e) => setFormData({ ...formData, nextRenewal: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Input
                id="notes"
                placeholder="Shared with family, etc."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Subscription</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
