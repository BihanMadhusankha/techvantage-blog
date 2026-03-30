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
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-2xl font-bold border-b pb-4 uppercase tracking-widest text-neutral-400">
              Latest "How-To" Guides
            </h2>

            <div className="grid gap-12">
              {latestPosts.map((post, index) => ( // 2. මෙතන 'index' එක ගත්තා
                <article key={post.id} className="grid grid-cols-1 md:grid-cols-5 gap-6 group">
                  <div className="md:col-span-2 relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      // 3. Image quality එක 75 සිට 65 දක්වා අඩු කරා (Mobile speed වලට පට්ටම වැදගත්)
                      src={`${post.image.split('?')[0]}?auto=format&fit=crop&q=65&w=800`}
                      alt={post.title}
                      fill
                      // 4. මුල්ම පෝස්ට් එකට විතරක් priority දුන්නා (Hero එකට පස්සේ ලෝඩ් වෙන්න)
                      priority={index === 0}
                      fetchPriority="high" // <--- මේක අලුතෙන් ඇඩ් කරපන්
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                      {post.category}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-xs text-neutral-400">
                      <span className="font-semibold text-neutral-600 dark:text-neutral-300">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <AdPlaceholder type="content" description="In-Feed Advertisement" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
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