'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const features = [
  {
    icon: '🎥',
    title: 'YouTube Transcript',
    description: 'Extract subtitles and summarization in one click',
    free: true,
  },
  {
    icon: '📎',
    title: 'Web Clipping',
    description: 'Save web pages as clean markdown notes',
    free: true,
  },
  {
    icon: '💬',
    title: 'AI Chat (RAG)',
    description: 'Chat with AI based on your notes',
    free: '5/day',
  },
  {
    icon: '🧠',
    title: 'Spaced Repetition',
    description: 'Daily review with SM-2 algorithm',
    free: '50 cards',
  },
  {
    icon: '📰',
    title: 'RSS Reader',
    description: 'Subscribe to feeds and save articles',
    free: '3 feeds',
  },
  {
    icon: '📄',
    title: 'PDF Processing',
    description: 'Extract text with OCR support',
    free: true,
  },
  {
    icon: '🔗',
    title: 'External Sync',
    description: 'Todoist, Google Calendar, Readwise',
    free: false,
  },
  {
    icon: '🎧',
    title: 'Text-to-Speech',
    description: 'Listen to your notes',
    free: false,
  },
];

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
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <a href="https://github.com/naidis/naidis/releases/latest" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center gap-2 mb-6">
          <Badge variant="secondary">Free to Start</Badge>
          <Badge variant="outline" className="gap-1">
            <span className="text-green-500">●</span> Open Source
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          The ultimate plugin
          <br />
          for Obsidian
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Web Clipper, YouTube Transcript, AI Chat, RSS Reader — all in one unified command palette.
          100% local-first with a high-performance Rust backend.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-violet-600 hover:bg-violet-500 w-full sm:w-auto" asChild>
            <a href="https://github.com/naidis/naidis/releases/latest" target="_blank" rel="noopener noreferrer">
              Download Free
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <a href="/docs">
              Read the Docs
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <div className="rounded-xl border bg-card p-1 shadow-2xl">
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-100 dark:bg-violet-900/50">
                <span className="text-sm">🔍</span>
              </div>
              <span className="text-sm text-muted-foreground">Type a command...</span>
              <kbd className="ml-auto text-xs bg-muted px-2 py-0.5 rounded border">⌘K</kbd>
            </div>
            <div className="mt-3 space-y-1">
              {['📎 Clip URL', '🎥 YouTube', '💬 AI Chat', '🧠 Daily Review', '📰 RSS'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${
                    i === 0 ? 'bg-violet-100 dark:bg-violet-900/50' : 'hover:bg-muted'
                  }`}
                >
                  <span>{item.split(' ')[0]}</span>
                  <span>{item.split(' ').slice(1).join(' ')}</span>
                  {i === 0 && <span className="ml-auto text-xs text-muted-foreground">↵</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need in one place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Replace multiple plugins with a single, unified experience
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:border-violet-300 dark:hover:border-violet-700 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.free === true ? (
                    <Badge variant="secondary" className="text-xs">Free</Badge>
                  ) : feature.free === false ? (
                    <Badge className="bg-violet-600 text-xs">Pro</Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">{feature.free}</Badge>
                  )}
                </div>
                <CardTitle className="text-base mt-3">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, upgrade when you need more
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Free</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground ml-1">forever</span>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-8 w-full">
                Download Free
              </Button>
            </CardContent>
          </Card>

          <Card className="relative border-2 border-violet-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-violet-600">Popular</Badge>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>For power users</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">$3.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                or $39/year (save 18%)
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="space-y-3">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-violet-500 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-violet-600 hover:bg-violet-500">
                Upgrade to Pro
              </Button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                vs Readwise: $9.99/mo = $120/year
              </p>
            </CardContent>
          </Card>
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
            <Link href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">© 2026 Naidis</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
