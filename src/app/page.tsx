import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/home/Hero';
import { Sidebar } from '@/components/home/Sidebar';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';
import { POSTS } from '@/lib/posts';
import { generateOrganizationSchema } from '@/lib/seo';

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();

  const latestPosts = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen">
      <script
        id="json-ld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 1. මේක තමයි ප්‍රධානම තැන. Hero එක ඇතුළේ තියෙන Image එකට 'priority' තියෙන්නම ඕනේ */}
      <Hero />

      <section className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <AdPlaceholder type="header" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content: Blog Feed */}
          <div suppressHydrationWarning className="lg:col-span-8 space-y-12">
            <h2 className="text-2xl font-bold border-b pb-4 uppercase tracking-widest text-neutral-500">
              Latest Tech News &amp; Guides
            </h2>

            <div suppressHydrationWarning className="grid gap-12">
              {latestPosts.map((post, index) => (
                <article suppressHydrationWarning key={post.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 group">
                  <div suppressHydrationWarning className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src={post.image.startsWith('/') ? post.image : `${post.image.split('?')[0]}?auto=format&fit=crop&q=75&w=800`}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 320px"
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                    />
                  </div>
                  <div suppressHydrationWarning className="md:col-span-3 flex flex-col justify-center">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-2">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight text-neutral-900 dark:text-white">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-xs text-neutral-600 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">{post.author}</span>
                      <span className="mx-2" aria-hidden="true">•</span>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <AdPlaceholder type="content" description="In-Feed Advertisement" />
          </div>

          {/* Sidebar */}
          <div suppressHydrationWarning className="lg:col-span-4">
            <Sidebar />
            <div className="sticky top-24 mt-12">
              <AdPlaceholder type="sidebar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}