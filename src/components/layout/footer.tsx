import Link from 'next/link';

export function Footer() {
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
            <Link href="/docs/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="/docs/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; 2026 Naidis</p>
        </div>
      </div>
    </footer>
  );
}
