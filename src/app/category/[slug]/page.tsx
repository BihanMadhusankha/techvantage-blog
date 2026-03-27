import { POSTS } from '@/lib/posts';
import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return constructMetadata({
    title: `${categoryName} Tech Guides`,
    description: `Explore the latest ${categoryName} tech trends and tutorials for 2026.`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const filteredPosts = POSTS.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <header className="mb-12 border-b pb-8">
        <h1 className="text-4xl font-bold uppercase tracking-tight text-blue-600 mb-2">
          {categoryName}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Showing {filteredPosts.length} guides in {categoryName}
        </p>
      </header>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-12 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-xs text-neutral-400">
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">No guides found in this category.</h2>
          <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      )}
    </div>
  );
}
