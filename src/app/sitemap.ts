export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { POSTS } from '@/lib/posts';
import { SITE_CONFIG } from '@/lib/seo';

const BASE_URL = SITE_CONFIG.url; // https://www.techvantage.blog

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Static pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/category/ai`,
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/category/software`,
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/category/hardware`,
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/category/tutorials`,
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ── Blog posts — auto-generated from POSTS array ─────────────────────────
  const blogPosts: MetadataRoute.Sitemap = POSTS
    .filter((post) => post.slug && post.date) // skip any incomplete entries
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [...staticPages, ...blogPosts];
}
