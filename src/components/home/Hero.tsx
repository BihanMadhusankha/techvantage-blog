import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-[#0a0a0a] overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
      {/* Abstract Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px] items-center">
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 dark:bg-neutral-900 px-4 py-1.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                TechVantage 2026 Edition
              </div>
              
              <h1 className="text-4xl font-black tracking-tighter sm:text-6xl xl:text-7xl/none text-neutral-950 dark:text-white">
                Navigate the <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Future of Tech
                </span>
              </h1>
              
              <p className="max-w-[600px] text-lg text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400 font-medium">
                Deep dives into Artificial Intelligence, advanced Software Engineering, and next-gen Hardware innovations. Expertly curated for the modern developer and tech professional.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link
                href="/category/ai"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-8 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-black"
              >
                <span className="relative flex items-center gap-2">
                  Explore Latest Trends
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </span>
              </Link>
              
              <Link
                href="/category/software"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-200 bg-white px-8 font-medium text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800 dark:focus:ring-offset-black"
              >
                Software Guides
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-bold ${i === 1 ? 'bg-blue-100 text-blue-700' : i === 2 ? 'bg-purple-100 text-purple-700' : ''}`}>
                    {i === 1 ? 'AI' : i === 2 ? 'SW' : i === 3 ? 'HW' : 'UI'}
                  </div>
                ))}
              </div>
              <p>Trusted by 50,000+ engineers weekly.</p>
            </div>
          </div>
          
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-neutral-200/50 dark:ring-neutral-800/50 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10 pointer-events-none mix-blend-overlay"></div>
              <Image
                src="/hero/tech_hero_banner.webp"
                alt="Abstract future tech visualization"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Floating aesthetic card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-md border border-white/20 dark:border-neutral-800/50 p-5 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                      <p className="text-base font-bold text-neutral-900 dark:text-white">Next-Gen Insights</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Updated daily by industry experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
