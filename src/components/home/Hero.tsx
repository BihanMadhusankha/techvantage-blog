import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-rose-100 dark:bg-rose-900/30 px-3 py-1 text-sm font-medium text-rose-800 dark:text-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                </span>
                Breaking: Apple iPhone 18 Pro Leak
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The &ldquo;Nano Island&rdquo; Is Real — And It Changes Everything
              </h1>
              <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                Multiple credible leakers confirm the iPhone 18 Pro will sport a dramatically smaller Dynamic Island. We rank every source and explain what it means for Face ID and the iPhone Fold.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/blog/apple-iphone-18-pro-design-leak-2026"
                className="inline-flex h-10 items-center justify-center rounded-md bg-rose-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-800"
              >
                Read the Full Leak Analysis
              </Link>
              <Link
                href="/category/hardware"
                className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
              >
                More Hardware News
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/blog/apple-iphone-18-pro-design-leak-2026" className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 block group">
              <Image
                src="/blog/iphone-18-pro-nano-island-hero.webp"
                alt="Apple iPhone 18 Pro concept render with the speculated ultra-slim Nano Island Dynamic Island design on a dark OLED screen"
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
