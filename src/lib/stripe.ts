declare global {
  interface Window {
    Stripe?: (publishableKey: string) => StripeInstance;
  }
}

interface StripeInstance {
  redirectToCheckout: (options: {
    sessionId: string;
  }) => Promise<{ error?: { message: string } }>;
}

const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

let stripeLoaded = false;
let stripeLoading: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (stripeLoaded && window.Stripe) return Promise.resolve();
  if (stripeLoading) return stripeLoading;

  stripeLoading = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.async = true;
    script.onload = () => {
      if (!window.Stripe) {
        reject(new Error("Stripe.js loaded but not available"));
        return;
      }
      stripeLoaded = true;
      resolve();
    };
    script.onerror = () => {
      stripeLoading = null;
      reject(new Error("Failed to load Stripe.js"));
    };
    document.head.appendChild(script);
  });

  return stripeLoading;
}

export async function openCheckout(plan: "monthly" | "yearly"): Promise<void> {
  if (!STRIPE_PUBLISHABLE_KEY) {
    throw new Error("Stripe publishable key not configured");
  }

  if (!API_URL) {
    throw new Error("API URL not configured");
  }

  const response = await fetch(`${API_URL}/api/create-checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan }),
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout session");
  }

  const { sessionId } = await response.json() as { sessionId: string };

  await loadScript();

  if (!window.Stripe) {
    throw new Error("Stripe not initialized");
  }

  const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
  const { error } = await stripe.redirectToCheckout({ sessionId });

  if (error) {
    throw new Error(error.message);
  }
}
