"use client";

import { useState, useEffect } from 'react';
import { Subscription } from '@/types';

const STORAGE_KEY = 'subsentry-subscriptions';

export function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  // Load from LocalStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSubscriptions(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse subscriptions", e);
      }
    }
    setLoading(false);
  }, []);

  // Save to LocalStorage whenever subscriptions change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
    }
  }, [subscriptions, loading]);

  const addSubscription = (sub: Omit<Subscription, 'id'>) => {
    const newSub: Subscription = {
      ...sub,
      id: crypto.randomUUID(),
    };
    setSubscriptions(prev => [...prev, newSub]);
  };

  const updateSubscription = (id: string, updates: Partial<Subscription>) => {
    setSubscriptions(prev => prev.map(sub => sub.id === id ? { ...sub, ...updates } : sub));
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(prev => prev.filter(sub => sub.id !== id));
  };

  const totalMonthlySpend = subscriptions.reduce((acc, sub) => {
    let monthlyCost = sub.cost;
    if (sub.billingCycle === 'yearly') monthlyCost = sub.cost / 12;
    if (sub.billingCycle === 'weekly') monthlyCost = sub.cost * 4.33;
    return acc + monthlyCost;
  }, 0);

  return {
    subscriptions,
    addSubscription,
    updateSubscription,
    deleteSubscription,
    totalMonthlySpend,
    loading
  };
}
