'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
];

function getNavHref(item: (typeof navItems)[number], pathname: string) {
  if (item.href === '/features') {
    return pathname === '/' ? '#features' : '/#features';
  }
  if (item.href === '/pricing') {
    return pathname === '/' ? '#pricing' : '/pricing';
  }
  return item.href;
}

function isActiveNav(item: (typeof navItems)[number], pathname: string) {
  if (item.href === '/pricing') return pathname === '/pricing';
  if (item.href === '/docs') return pathname.startsWith('/docs');
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-violet-600">◆</span> Naidis
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={getNavHref(item, pathname)}
                className={
                  isActiveNav(item, pathname)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground transition-colors'
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="hidden md:inline-flex bg-violet-600 hover:bg-violet-500" asChild>
            <a href="https://github.com/naidis/core/releases/latest" target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-md hover:bg-muted transition-colors" aria-label="Open menu">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={getNavHref(item, pathname)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      isActiveNav(item, pathname)
                        ? 'text-lg font-medium text-violet-600'
                        : 'text-lg font-medium hover:text-violet-600 transition-colors'
                    }
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4 bg-violet-600 hover:bg-violet-500" asChild>
                  <a href="https://github.com/naidis/core/releases/latest" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
