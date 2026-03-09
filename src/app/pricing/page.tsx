import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PricingSection } from '@/components/pricing-section';

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
          <h2 className="text-fluid-title font-bold tracking-tight">
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
          <h2 className="text-fluid-title font-bold tracking-tight">
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

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <PricingSection />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
