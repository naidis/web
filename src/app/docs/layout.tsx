import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      nav={{
        title: (
          <>
            <img src="/logo.svg" alt="" width={24} height={24} style={{ display: 'inline-block', height: '1.25rem', width: '1.25rem', verticalAlign: 'middle' }} aria-hidden="true" />{' '}Naidis
          </>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
