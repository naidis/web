'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { getCheckoutUrl, LemonSqueezyProvider } from '@/components/lemon-squeezy';

const freeFeatures = [
  'YouTube transcript extraction',
  'Web clipping to markdown',
  '5 AI queries per day',
  '5 RAG queries per day',
  '50 spaced repetition cards',
  '3 RSS feed subscriptions',
  'Basic PDF text extraction',
  'Command palette interface',
];

const proFeatures = [
  'Everything in Free',
  'Unlimited AI & RAG queries',
  'Unlimited spaced repetition cards',
  'Unlimited RSS feeds',
  'PDF OCR & table extraction',
  'YouTube batch processing',
  'Wallabag, Hoarder, Readwise sync',
  'Todoist & Google Calendar sync',
  'Text-to-Speech (TTS)',
  'EPUB & Kindle import',
  'Priority support',
];

export function PricingToggle() {
  const [isYearly, setIsYearly] = useState(true);

  const monthlyPrice = 3.99;
  const yearlyPrice = 39;
  const yearlyMonthly = (yearlyPrice / 12).toFixed(2);
  const savings = Math.round((1 - yearlyPrice / (monthlyPrice * 12)) * 100);

  const checkoutUrl = getCheckoutUrl(isYearly ? 'yearly' : 'monthly');

  return (
    <LemonSqueezyProvider>
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-fluid-title font-bold tracking-tight">
              Simple pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free, upgrade when you need more
            </p>
          </div>

          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-violet-600"
            />
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-green-500 text-white">Save {savings}%</Badge>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Free Card */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-1">forever</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Separator className="mb-6" />
                <ul className="space-y-3 flex-1">
                  {freeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 w-full" asChild>
                  <a href="https://github.com/naidis/release/releases/latest" target="_blank" rel="noopener noreferrer">
                    Install Free
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Card */}
            <Card className="relative border-2 border-violet-500 flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-violet-600">Popular</Badge>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For power users</CardDescription>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ${isYearly ? yearlyMonthly : monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {isYearly ? (
                    <>Billed ${yearlyPrice}/year</>
                  ) : (
                    <>or ${yearlyPrice}/year (save {savings}%)</>
                  )}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Separator className="mb-6" />
                <ul className="space-y-3 flex-1">
                  {proFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-violet-500 mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full bg-violet-600 hover:bg-violet-500 lemonsqueezy-button" asChild>
                  <a href={checkoutUrl}>
                    Upgrade to Pro
                  </a>
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  vs Readwise: $9.99/mo = $120/year
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </LemonSqueezyProvider>
  );
}
