import Link from 'next/link';
import { POSTS } from '@/lib/posts';

export function Sidebar() {
  const trendingPosts = POSTS.slice(0, 3); // Mock trending posts

  return (
    <aside className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-blue-600">Trending Now</h3>
        <div className="space-y-4">
          {trendingPosts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <span className="text-xs font-semibold text-neutral-400 uppercase">{post.category}</span>
                <h4 className="text-md font-bold leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
              </Link>
              <div className="h-px bg-neutral-100 dark:bg-neutral-800 mt-4" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-100 dark:border-blue-900/30">
        <h3 className="font-bold mb-2">Weekly Tech Insights</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Join 50,000+ tech professionals getting the edge on 2026 trends.
        </p>
        <form className="space-y-2">
          <input 
            type="email" 
            placeholder="Work Email" 
            className="w-full px-3 py-2 rounded border border-neutral-200 dark:border-neutral-800 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="w-full bg-blue-600 text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
