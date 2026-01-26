import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import CustomSearchDialog from '@/components/search-dialog';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Naidis',
  description: 'The ultimate Obsidian plugin - Unified PKM Workstation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <RootProvider
          search={{
            SearchDialog: CustomSearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
