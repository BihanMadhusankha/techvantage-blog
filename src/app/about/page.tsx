import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Us | TechVantage",
  description: "Learn about TechVantage, our mission to provide deep-dive technical analysis, and the team driving reliable insights on AI, hardware, and the digital economy.",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-blue-200 dark:selection:bg-blue-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <header className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            About TechVantage: <br className="hidden md:block" />
            <span className="text-blue-600 dark:text-blue-500">
              Bridging the Gap Between Innovation and Insight
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl leading-relaxed">
            Our mission is to provide deep-dive technical analysis on artificial intelligence, breakthrough hardware, and the evolving digital economy for a global audience.
          </p>
        </header>

        {/* Founder Profile / Authority Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl shadow-2xl">
            {/* Placeholder Image: replace src with actual optimized image when available */}
            <Image
              src="/founder-placeholder.jpg"
              alt="Bihan - TechVantage Founder"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Why Trust TechVantage?</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 relative"></div>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Authored and directed by <strong>Bihan</strong>, TechVantage is built on a foundation of rigorous academic study and real-world application. With a degree path in Information Technology (BIT) at the prestigious <strong>University of Moratuwa</strong>, Bihan brings an engineering-first mindset to technology journalism.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Beyond theory, Bihan has an extensive background in data-driven sales, marketing analysis, and professional software development. Having optimized technical pipelines and driven data strategies during his tenure at Prasad Fashion Square, he understands how technology translates directly into economic value.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                We are fiercely committed to hands-on testing. We don't just rewrite press releases. From rigorous real-world battery tests of devices like the Pixel 10a to granular, side-by-side benchmarking of the latest AI models, we deliver transparent, empirically-backed conclusions derived from deep tech content creation experience (formerly under <em>Bihan Tech</em>).
              </p>
            </div>
          </div>
        </div>

        {/* What We Cover */}
        <section className="mb-24 p-8 md:p-12 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">AI Agents</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Actionable guides and critical analysis on deployment, private workflows, and the next generation of autonomous digital intelligence.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Hardware Reviews</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Unbiased, hands-on evaluations dissecting the nuances of consumer tech, from flagship smartphones to NPU architectures.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Global Tech Economics</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Examining the intersection of technology and market dynamics, delivering strategic insights for investors and industry professionals.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">Future Tech</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Separating actionable innovation from industry hype, preparing our readers for the tools and frameworks that will define tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50 dark:bg-blue-900/10 p-8 md:p-12 rounded-3xl border border-blue-100 dark:border-blue-900/20">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Commitment to You</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                We believe our readers deserve absolute <strong>transparency</strong> and <strong>technical accuracy</strong>. The digital landscape is cluttered with superficial noise; our pledge is to provide <strong>zero-fluff content</strong>. We prioritize clarity, rigorous methodology, and objective reporting in every article we publish.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/Connect */}
        <section className="text-center py-12 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            Whether you are a reader with a question, a hardware manufacturer seeking an honest review, or a professional looking to collaborate, our door is always open.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Reach Out to TechVantage
          </Link>
        </section>
      </section>
    </div>
  );
}
