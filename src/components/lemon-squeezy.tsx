'use client';

import { useEffect } from 'react';

/**
 * Lemon Squeezy checkout URLs
 * Replace with actual URLs from Lemon Squeezy dashboard after creating products.
 */
export const CHECKOUT_URLS = {
  monthly: 'https://naidis.lemonsqueezy.com/checkout/buy/TODO_MONTHLY_VARIANT_ID',
  yearly: 'https://naidis.lemonsqueezy.com/checkout/buy/TODO_YEARLY_VARIANT_ID',
} as const;

/**
 * Loads the Lemon Squeezy lemon.js script and initializes it.
 * This enables the checkout overlay when clicking links with
 * the `lemonsqueezy-button` class.
 */
export function LemonSqueezyProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Skip if already loaded
    if (document.querySelector('script[src*="lemonsqueezy"]')) {
      (window as any).createLemonSqueezy?.();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.lemonsqueezy.com/lemon.js';
    script.defer = true;
    script.onload = () => {
      (window as any).createLemonSqueezy?.();
    };
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
}

/**
 * Returns the checkout URL for the given plan.
 */
export function getCheckoutUrl(plan: 'monthly' | 'yearly'): string {
  return CHECKOUT_URLS[plan];
}
