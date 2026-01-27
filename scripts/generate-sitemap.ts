/**
 * Generate sitemap.xml and robots.txt for static export
 * Usage: bun run scripts/generate-sitemap.ts
 */

import { readdir, writeFile } from 'fs/promises';
import { join } from 'path';

const SITE_URL = 'https://naidis.io';
const OUT_DIR = './out';

interface SitemapEntry {
  url: string;
  lastmod: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

async function getAllPages(dir: string, basePath = ''): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const pages: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    if (entry.name.endsWith('.txt') || entry.name.endsWith('.ico')) continue;
    if (entry.name.endsWith('.svg') || entry.name.endsWith('.png')) continue;
    if (entry.name === 'api') continue;

    const fullPath = join(dir, entry.name);
    const relativePath = join(basePath, entry.name);

    if (entry.isDirectory()) {
      pages.push(...await getAllPages(fullPath, relativePath));
    } else if (entry.name.endsWith('.html')) {
      const urlPath = relativePath.replace(/\\/g, '/').replace(/\.html$/, '');
      if (urlPath === 'index') {
        pages.push('/');
      } else if (urlPath === '404') {
        continue;
      } else {
        pages.push('/' + urlPath);
      }
    }
  }

  return pages;
}

function getPriority(path: string): number {
  if (path === '/') return 1.0;
  if (path === '/docs') return 0.9;
  if (path.includes('/installation')) return 0.9;
  if (path.includes('/modules/')) return 0.8;
  if (path.includes('/use-cases/')) return 0.8;
  if (path.includes('/alternatives/')) return 0.7;
  if (path.includes('/compare/')) return 0.7;
  return 0.6;
}

function getChangeFreq(path: string): 'daily' | 'weekly' | 'monthly' {
  if (path === '/') return 'weekly';
  if (path.startsWith('/docs')) return 'weekly';
  return 'monthly';
}

async function generateSitemap(): Promise<void> {
  console.log('Generating sitemap...');

  const paths = await getAllPages(OUT_DIR);
  const now = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = paths.map(path => ({
    url: `${SITE_URL}${path}`,
    lastmod: now,
    priority: getPriority(path),
    changefreq: getChangeFreq(path),
  }));

  entries.sort((a, b) => b.priority - a.priority);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  await writeFile(join(OUT_DIR, 'sitemap.xml'), sitemap);
  console.log(`Generated sitemap.xml with ${entries.length} URLs`);

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  await writeFile(join(OUT_DIR, 'robots.txt'), robots);
  console.log('Generated robots.txt');
}

generateSitemap().catch(console.error);
