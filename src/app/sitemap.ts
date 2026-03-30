import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

// මේ පේළිය අනිවාර්යයෙන්ම Imports වලට පස්සේ තියෙන්න ඕනේ
export const dynamic = 'force-static';
export const revalidate = false; // Static export වලට මේක වැදගත්

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const routes = ['', '/about', '/contact', '/privacy', '/terms'].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  // Blog posts
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