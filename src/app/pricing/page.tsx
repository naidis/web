'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const freeFeatures = [
  { name: 'YouTube transcript extraction', included: true },
  { name: 'Web clipping to markdown', included: true },
  { name: '5 AI queries per day', included: true },
  { name: '5 RAG queries per day', included: true },
  { name: '50 spaced repetition cards', included: true },
  { name: '3 RSS feed subscriptions', included: true },
  { name: 'Basic PDF text extraction', included: true },
  { name: 'Command palette interface', included: true },
];

const proFeatures = [
  { name: 'Unlimited AI & RAG queries', included: true },
  { name: 'Unlimited spaced repetition cards', included: true },
  { name: 'Unlimited RSS feeds', included: true },
  { name: 'PDF OCR & table extraction', included: true },
  { name: 'YouTube batch processing', included: true },
  { name: 'Wallabag, Hoarder, Readwise sync', included: true },
  { name: 'Todoist & Google Calendar sync', included: true },
  { name: 'Text-to-Speech (TTS)', included: true },
  { name: 'EPUB & Kindle import', included: true },
  { name: 'Priority support', included: true },
];

const faqs = [
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data stays in your Obsidian vault. Naidis is local-first, so all your notes, transcripts, and clips remain as markdown files even without a subscription.',
  },
  {
    question: 'Can I use Naidis offline?',
    answer: 'Yes! Core features work offline. AI features require your configured LLM (local Ollama works offline, cloud APIs need internet).',
  },
  {
    question: 'Is there a free trial?',
    answer: 'The Free tier is permanent, not a trial. You can use core features forever. Pro unlocks unlimited usage and advanced features.',
  },
  {
    question: 'What LLM providers are supported?',
    answer: 'OpenAI, Anthropic Claude, and local models via Ollama. You use your own API keys, no markup.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 14-day refund policy for annual subscriptions. Monthly subscriptions can be canceled anytime.',
  },
];

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-violet-600">◆</span> Naidis
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-foreground font-medium">
              Pricing
            </Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="bg-violet-600 hover:bg-violet-500" asChild>
            <a href="https://github.com/naidis/core/releases/latest" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const monthlyPrice = 3.99;
  const yearlyPrice = 39;
  const yearlyMonthly = (yearlyPrice / 12).toFixed(2);
  const savings = Math.round((1 - yearlyPrice / (monthlyPrice * 12)) * 100);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need unlimited access and pro features.
          </p>
        </div>

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

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
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
                  <li key={feature.name} className="flex items-start gap-3 text-sm">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-muted-foreground">{feature.name}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full" asChild>
                <a href="https://github.com/naidis/core/releases/latest" target="_blank" rel="noopener noreferrer">
                  Download Free
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-2 border-violet-500 flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-violet-600">Recommended</Badge>
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
              <p className="text-sm text-muted-foreground mb-4">
                Everything in Free, plus:
              </p>
              <ul className="space-y-3 flex-1">
                {proFeatures.map((feature) => (
                  <li key={feature.name} className="flex items-start gap-3 text-sm">
                    <span className="text-violet-500 mt-0.5">✓</span>
                    <span className="text-muted-foreground">{feature.name}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-violet-600 hover:bg-violet-500">
                Upgrade to Pro
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                14-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Compare: Readwise costs $9.99/mo ($120/year). Obsidian Copilot costs $14.99/mo.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const features = [
    { name: 'AI Chat (RAG)', free: '5/day', pro: 'Unlimited' },
    { name: 'RAG Queries', free: '5/day', pro: 'Unlimited' },
    { name: 'Spaced Repetition Cards', free: '50', pro: 'Unlimited' },
    { name: 'RSS Feeds', free: '3', pro: 'Unlimited' },
    { name: 'YouTube Transcripts', free: '✓', pro: '✓ + Batch' },
    { name: 'Web Clipping', free: '✓', pro: '✓' },
    { name: 'PDF Text Extraction', free: '✓', pro: '✓ + OCR + Tables' },
    { name: 'External Sync', free: '—', pro: '✓' },
    { name: 'Kindle/EPUB Import', free: '—', pro: '✓' },
    { name: 'Text-to-Speech', free: '—', pro: '✓' },
    { name: 'Priority Support', free: '—', pro: '✓' },
  ];

  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Feature comparison
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 font-medium">Feature</th>
                <th className="text-center py-4 font-medium">Free</th>
                <th className="text-center py-4 font-medium text-violet-600">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-b">
                  <td className="py-4 text-sm">{feature.name}</td>
                  <td className="py-4 text-center text-sm text-muted-foreground">{feature.free}</td>
                  <td className="py-4 text-center text-sm font-medium">{feature.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b pb-6">
              <h3 className="font-medium mb-2">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-violet-600">◆</span> Naidis
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 Naidis</p>
        </div>
      </div>
    </footer>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PricingSection />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
