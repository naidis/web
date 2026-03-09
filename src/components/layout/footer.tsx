import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-semibold">
            <img src="/logo.svg" alt="" width={24} height={24} className="h-6 w-6" aria-hidden="true" /> Naidis
          </div>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground transition-colors py-2 px-2">
              Documentation
            </Link>
            <Link href="/pricing" className="hover:text-foreground transition-colors py-2 px-2">
              Pricing
            </Link>
            <a href="https://github.com/naidis/release" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors py-2 px-2">
              GitHub
            </a>
            <Link href="/docs/terms" className="hover:text-foreground transition-colors py-2 px-2">
              Terms
            </Link>
            <Link href="/docs/privacy" className="hover:text-foreground transition-colors py-2 px-2">
              Privacy
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">&copy; 2026 Naidis</p>
        </div>
      </div>
    </footer>
  );
}
