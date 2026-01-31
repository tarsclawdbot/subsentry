"use client";

import { useState, useEffect } from "react";
import { Edit2 } from "lucide-react";
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
import { Subscription } from "@/types";

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

interface EditSubscriptionModalProps {
  subscription: Subscription;
}

export function EditSubscriptionModal({ subscription }: EditSubscriptionModalProps) {
  const { updateSubscription } = useSubscriptions();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    billingCycle: "monthly",
    category: "Other",
    nextRenewal: "",
    notes: "",
  });

  useEffect(() => {
    if (open) {
      setFormData({
        name: subscription.name,
        cost: subscription.cost.toString(),
        billingCycle: subscription.billingCycle,
        category: subscription.category,
        nextRenewal: subscription.nextRenewal,
        notes: subscription.notes || "",
      });
    }
  }, [open, subscription]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSubscription(subscription.id, {
      name: formData.name,
      cost: parseFloat(formData.cost),
      billingCycle: formData.billingCycle as 'monthly' | 'yearly' | 'weekly',
      category: formData.category,
      nextRenewal: formData.nextRenewal,
      notes: formData.notes,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-slate-400 hover:text-primary hover:bg-blue-50"
        >
            <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Subscription</DialogTitle>
          <DialogDescription>
            Update subscription details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-cost">Cost</Label>
                <div className="relative">
                    <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                    <Input
                        id="edit-cost"
                        type="number"
                        step="0.01"
                        className="pl-7"
                        value={formData.cost}
                        onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
                        required
                    />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-cycle">Cycle</Label>
                <Select
                    value={formData.billingCycle}
                    onValueChange={(val) => setFormData({ ...formData, billingCycle: val })}
                >
                  <SelectTrigger id="edit-cycle">
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
              <Label htmlFor="edit-category">Category</Label>
              <Select
                  value={formData.category}
                  onValueChange={(val) => setFormData({ ...formData, category: val })}
              >
                <SelectTrigger id="edit-category">
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
              <Label htmlFor="edit-renewal">Next Renewal</Label>
              <Input
                id="edit-renewal"
                type="date"
                value={formData.nextRenewal}
                onChange={(e) => setFormData({ ...formData, nextRenewal: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-notes">Notes</Label>
              <Input
                id="edit-notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
