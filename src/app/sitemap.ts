import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  // Main routes
  const routes = ['', '/about', '/contact', '/privacy', '/terms'].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Blog posts - දැනට මැනුවලි ඇඩ් කරමු, පස්සේ මේක dynamic කරන්න පුළුවන්
  const blogPosts = [
    '/blog/google-pixel-10a-review-no-camera-bump',
    '/blog/claude-4-6-vs-gemini-3-1-comparison',
    '/blog/sony-ps5-price-hike-2026',
  ].map((post) => ({
    url: `${SITE_CONFIG.url}${post}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogPosts];
}