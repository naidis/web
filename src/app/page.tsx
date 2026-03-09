import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { InstallBlock } from '@/components/install-block';

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
  {
    icon: '📧',
    title: 'Newsletter Import',
    description: 'Save email newsletters directly to your vault',
    free: false,
  },
  {
    icon: '🎙️',
    title: 'Audio Transcription',
    description: 'Whisper-powered speech-to-text for voice notes',
    free: false,
  },
  {
    icon: '📚',
    title: 'EPUB & Kindle',
    description: 'Import highlights from e-books and readers',
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

function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="secondary">Free to Start</Badge>
          <Badge variant="outline" className="gap-1">
            <span className="text-green-500">●</span> Open Source
          </Badge>
          <Badge variant="outline" className="gap-1">
            <span className="text-blue-500">●</span> Local-First
          </Badge>
        </div>
        <h1 className="text-fluid-hero font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          Ultimate Plugin for Obsidian
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Stop juggling 10 plugins. Web Clipper, YouTube Transcript, AI Chat, RSS Reader, Spaced Repetition —
          all in one unified command palette. 100% local, zero cloud, high-performance Rust backend.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <InstallBlock />
          <div className="mt-4 flex items-center justify-center gap-4 text-sm">
            <a href="https://github.com/naidis/release/releases/latest" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              Manual download
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              Documentation
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground text-center">Compatible with Obsidian 1.0+</p>
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
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${i === 0 ? 'bg-violet-100 dark:bg-violet-900/50' : 'hover:bg-muted'
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
    <section id="features" className="px-6 py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-fluid-title font-bold tracking-tight">
            Everything you need in one place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Replace multiple plugins with a single, unified experience
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          <h2 className="text-fluid-title font-bold tracking-tight">
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
              <Button variant="outline" className="mt-8 w-full" asChild>
                <a href="https://github.com/naidis/release/releases/latest" target="_blank" rel="noopener noreferrer">
                  Install Free
                </a>
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
                <span className="text-4xl font-bold">$39</span>
                <span className="text-muted-foreground">/year</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                2 months free vs monthly · or $3.99/mo
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

const faqItems = [
  {
    question: 'What is Naidis?',
    answer: 'The ultimate plugin for Obsidian that combines Web Clipping, YouTube Transcripts, AI Chat, RSS Reader, and more into a single unified interface.',
  },
  {
    question: 'How much does it cost?',
    answer: '$3.99/month or $39/year for Pro features. Core features are free forever with generous limits.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'All data is stored locally on your device. No cloud sync, no tracking. Your notes stay in your Obsidian vault.',
  },
  {
    question: 'Why is the core open source?',
    answer: 'For technical trust and community continuity. You can verify the engine code yourself, and fork it if needed.',
  },
  {
    question: 'Which AI model is used?',
    answer: 'Local LLM via Ollama (llama3.2 by default). All AI processing happens on your machine.',
  },
  {
    question: 'Can I get a refund?',
    answer: '14-day full refund for any reason, no questions asked.',
  },
];

const testimonials = [
  {
    quote: "Finally, one plugin that does everything. I replaced 5 different tools with Naidis and my vault is so much cleaner now.",
    name: "Alex Chen",
    role: "PhD Researcher",
    avatar: "🎓",
  },
  {
    quote: "The YouTube transcript feature alone is worth it. I save hours every week on research. The AI chat is just icing on the cake.",
    name: "Sarah Mitchell",
    role: "Content Creator",
    avatar: "🎬",
  },
];

function SocialProof() {
  return (
    <section className="px-6 py-8 border-b">
      <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="text-green-500">●</span>
          <span>Open Source Core</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🔒</span>
          <span>100% Local Processing</span>
        </div>
        <div className="flex items-center gap-2">
          <span>⚡</span>
          <span>High-Performance Rust Backend</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🤖</span>
          <span>Local AI via Ollama</span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-muted-foreground italic mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-fluid-title font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/docs/faq">View all FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const comparisonData = [
  { feature: 'Price/year', naidis: '$39', readwise: '$120', smartConnections: 'Free', omnivore: 'Discontinued' },
  { feature: 'Web Clipping', naidis: true, readwise: true, smartConnections: false, omnivore: true },
  { feature: 'YouTube Transcripts', naidis: true, readwise: false, smartConnections: false, omnivore: false },
  { feature: 'AI Chat (RAG)', naidis: true, readwise: false, smartConnections: true, omnivore: false },
  { feature: 'RSS Reader', naidis: true, readwise: true, smartConnections: false, omnivore: true },
  { feature: 'Spaced Repetition', naidis: true, readwise: true, smartConnections: false, omnivore: false },
  { feature: 'Local-First', naidis: true, readwise: false, smartConnections: true, omnivore: false },
  { feature: 'Open Source Core', naidis: true, readwise: false, smartConnections: true, omnivore: true },
];

function Comparison() {
  return (
    <section id="comparison" className="px-6 py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-fluid-title font-bold tracking-tight">
            Why Naidis?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare the alternatives
          </p>
        </div>

        <p className="md:hidden text-center text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
          <span>←</span>
          <span>Swipe to see all competitors</span>
          <span>→</span>
        </p>

        <div className="relative">
          <div className="overflow-x-auto scroll-smooth [-webkit-overflow-scrolling:touch]">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-4 text-left font-medium">Feature</th>
                  <th className="py-4 px-4 text-center font-medium text-violet-600">Naidis</th>
                  <th className="py-4 px-4 text-center font-medium text-muted-foreground">Readwise</th>
                  <th className="py-4 px-4 text-center font-medium text-muted-foreground hidden md:table-cell">Smart Connections</th>
                  <th className="py-4 px-4 text-center font-medium text-muted-foreground hidden md:table-cell">Omnivore</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature} className="border-b">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.naidis === 'boolean' ? (
                        row.naidis ? <span className="text-green-500">✓</span> : <span className="text-muted-foreground">—</span>
                      ) : (
                        <span className="font-semibold text-violet-600">{row.naidis}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {typeof row.readwise === 'boolean' ? (
                        row.readwise ? <span className="text-green-500">✓</span> : <span className="text-muted-foreground">—</span>
                      ) : (
                        <span className="text-muted-foreground">{row.readwise}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center hidden md:table-cell">
                      {typeof row.smartConnections === 'boolean' ? (
                        row.smartConnections ? <span className="text-green-500">✓</span> : <span className="text-muted-foreground">—</span>
                      ) : (
                        <span className="text-muted-foreground">{row.smartConnections}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center hidden md:table-cell">
                      {typeof row.omnivore === 'boolean' ? (
                        row.omnivore ? <span className="text-green-500">✓</span> : <span className="text-muted-foreground">—</span>
                      ) : (
                        <span className="text-red-400">{row.omnivore}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none md:hidden" />
        </div>

        <div className="mt-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Save <span className="font-semibold text-green-500">$81/year</span> compared to Readwise Reader
          </p>
          <Button className="bg-violet-600 hover:bg-violet-500" asChild>
            <a href="https://github.com/naidis/release/releases/latest" target="_blank" rel="noopener noreferrer">
              Start saving now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    icon: '🔬',
    title: 'Researchers & Academics',
    description: 'Clip papers, extract highlights, and chat with your research corpus. Build your literature review faster.',
  },
  {
    icon: '🎬',
    title: 'Content Creators',
    description: 'Save inspiration, transcribe YouTube videos, and organize ideas. Never lose a reference again.',
  },
  {
    icon: '💼',
    title: 'Knowledge Workers',
    description: 'RSS feeds, newsletters, web clips — all searchable in Obsidian. Your second brain, unified.',
  },
  {
    icon: '📚',
    title: 'Lifelong Learners',
    description: 'YouTube transcripts, spaced repetition, daily review. Learn and retain with science-backed methods.',
  },
];

function UseCases() {
  return (
    <section id="use-cases" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-fluid-title font-bold tracking-tight">
            Built for how you work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One tool that adapts to your workflow
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="text-center">
              <CardHeader>
                <span className="text-4xl mb-4 block">{useCase.icon}</span>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="px-6 py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
          <span className="text-3xl">🔒</span>
        </div>
        <h2 className="text-fluid-title font-bold tracking-tight">
          Your Data Never Leaves Your Device
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          100% local-first. No cloud. No tracking. Just your notes.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
          <div className="p-4">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold mb-1">High-Performance Rust</h3>
            <p className="text-sm text-muted-foreground">All processing happens locally with blazing-fast Rust backend</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold mb-1">Local AI via Ollama</h3>
            <p className="text-sm text-muted-foreground">Your AI queries never leave your machine</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🔓</div>
            <h3 className="font-semibold mb-1">Open Source Core</h3>
            <p className="text-sm text-muted-foreground">Full transparency — verify the code yourself</p>
          </div>
          <div className="p-4">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-semibold mb-1">Your Vault, Your Rules</h3>
            <p className="text-sm text-muted-foreground">Data stays in your Obsidian vault forever</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="px-6 py-24 bg-violet-50 dark:bg-violet-950/20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-fluid-subtitle font-bold tracking-tight">
          Stay in the loop
        </h2>
        <p className="mt-4 text-muted-foreground">
          Get notified about new features, tips, and Obsidian workflows. No spam, unsubscribe anytime.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="you@example.com"
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-violet-600 hover:bg-violet-500">
            Subscribe
          </Button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground">
          Join 500+ Obsidian enthusiasts
        </p>
      </div>
    </section>
  );
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Naidis',
      description: 'Ultimate Plugin for Obsidian — Unified PKM Workstation with Web Clipper, YouTube Transcript, AI Chat, RSS Reader, and Spaced Repetition.',
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Windows, macOS, Linux',
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          name: 'Free',
        },
        {
          '@type': 'Offer',
          price: '3.99',
          priceCurrency: 'USD',
          name: 'Pro',
          billingIncrement: 'P1M',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'WebSite',
      name: 'Naidis',
      url: 'https://naidis.dev',
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Testimonials />
        <Features />
        <Privacy />
        <Comparison />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
