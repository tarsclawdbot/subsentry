export interface Subscription {
  id: string;
  name: string;
  cost: number;
  billingCycle: 'monthly' | 'yearly' | 'weekly';
  category: string;
  nextRenewal: string; // ISO Date string for serialization
  notes?: string;
}

export type SubscriptionContextType = {
  subscriptions: Subscription[];
  addSubscription: (subscription: Omit<Subscription, 'id'>) => void;
  updateSubscription: (id: string, subscription: Partial<Subscription>) => void;
  deleteSubscription: (id: string) => void;
  totalMonthlySpend: number;
};
