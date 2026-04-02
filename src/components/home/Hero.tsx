import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Breaking: Google AI Pro Upgrade
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Google AI Pro Just Got 5TB Storage — At No Extra Cost
              </h1>
              <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                Google silently tripled its AI Pro plan storage from 2TB to 5TB, making it the most competitive AI-plus-storage bundle on the market. Here&apos;s everything you need to know.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/blog/google-ai-pro-5tb-storage-upgrade-2026"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800"
              >
                Read the Full Analysis
              </Link>
              <Link
                href="/category/ai"
                className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
              >
                More AI News
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/blog/google-ai-pro-5tb-storage-upgrade-2026" className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 block group">
              <Image
                src="/blog/google-ai-pro-5tb-hero.webp"
                alt="Google AI Pro plan upgraded to 5TB cloud storage concept visualization"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

