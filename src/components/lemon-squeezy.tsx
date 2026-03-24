'use client';

import { useEffect } from 'react';

/**
 * Lemon Squeezy checkout URLs
 * Replace with actual URLs from Lemon Squeezy dashboard after creating products.
 */
export const CHECKOUT_URLS = {
  monthly: 'https://noveling.lemonsqueezy.com/checkout/buy/2c396d31-415b-43f7-b913-7d12c7187d4c',
  yearly: 'https://noveling.lemonsqueezy.com/checkout/buy/a12a6cd2-dcdb-4ec2-8c9e-2b7089b7808d',
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
