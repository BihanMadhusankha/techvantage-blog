import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Sony PS5 Price Hike 2026: Why Prices are Skyrocketing and How to Save $150 Before April 2nd",
  description: "Official Sony PS5 family price increase effective April 2, 2026. Learn about the RAMeggedon factor and how to secure your console at the old price.",
  image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200",
});

export default function PS5PriceHikePage() {
  const faqs = [
    {
      question: "Is the PS5 price increasing in 2026?",
      answer: "Yes, all models including Digital, Disc, and Pro versions are increasing by $100-$150 starting April 2nd, 2026."
    },
    {
      question: "Why is the PS5 Pro so expensive now?",
      answer: "The $899 price tag is driven by high-end component costs and AI-driven memory (GDDR7) shortages, often referred to as 'RAMeggedon'."
    },
    {
      question: "Will the price increase affect GTA 6 bundles?",
      answer: "Highly likely. Upcoming major titles like GTA 6 are expected to see premium console bundles that reflect these new hardware costs."
    },
    {
      question: "Should I buy a PS5 now or wait for PS6?",
      answer: "Buy now. Reports suggest PS6 might be delayed to 2028/2029 due to advanced architecture transitions, making the PS5 the current king for the next 3+ years."
    },
    {
      question: "Are Xbox and Nintendo Switch 2 prices also going up?",
      answer: "Industry insiders suggest both Microsoft and Nintendo are mulling similar price hikes due to shared supply chain pressures in the AI era."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Sony PS5 Price Hike 2026: Why Prices are Skyrocketing and How to Save $150 Before April 2nd",
    description: "Official Sony PS5 family price increase effective April 2, 2026.",
    date: "2026-03-27",
    url: "https://techvantage.blog/blog/sony-ps5-price-hike-2026",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=1200",
    author: "Bihan Madhusankha",
  });

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/hardware" className="hover:underline">Hardware</Link>
          <span>•</span>
          <span>March 27, 2026</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Sony PS5 Price Hike 2026: Why Prices are Skyrocketing and <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">How to Save $150 Before April 2nd</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
            BM
          </div>
          <div>
            <div className="text-sm font-bold">Bihan Madhusankha</div>
            <div className="text-xs text-neutral-500">Tech Analyst & Creator</div>
          </div>
        </div>
      </header>

      {/* LCP Optimized Image */}
      <div className="relative aspect-[16/9] w-full mb-12 overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl">
        <Image 
          src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=75&w=1200"
          alt="Sony PS5 and PS5 Pro price increase 2026 official details"
          fill
          priority={true}
          // @ts-ignore - fetchPriority is supported in Next.js 14+ but might lack types in some configs
          fetchPriority="high"
          loading="eager"
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none">
        <p className="lead text-xl text-neutral-600 dark:text-neutral-300 italic border-l-4 border-blue-600 pl-6 mb-12">
          March 27, 2026 — In a landmark announcement that has sent shockwaves through the gaming community, 
          Sony Interactive Entertainment has officially confirmed a site-wide price increase for the PlayStation 5 
          family. Effective April 2nd, costs are set to spike by up to 20%, citing "unprecedented supply chain evolution."
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-8">Updated PS5 Price List (April 2026)</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-neutral-100 dark:bg-neutral-800 text-left">
                <th className="p-4 border-b">Model Variant</th>
                <th className="p-4 border-b">Old Price (MSRP)</th>
                <th className="p-4 border-b font-bold text-blue-600">New Price (April 2nd)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b font-medium">PS5 Digital Edition</td>
                <td className="p-4 border-b">$449</td>
                <td className="p-4 border-b font-bold text-red-600">$549</td>
              </tr>
              <tr className="bg-neutral-50/50 dark:bg-neutral-900/50">
                <td className="p-4 border-b font-medium">PS5 Disc Edition</td>
                <td className="p-4 border-b">$499</td>
                <td className="p-4 border-b font-bold text-red-600">$599</td>
              </tr>
              <tr>
                <td className="p-4 border-b font-medium">PS5 Pro (Advanced AI)</td>
                <td className="p-4 border-b">$749</td>
                <td className="p-4 border-b font-bold text-red-600">$899</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-8">The "RAMeggedon" Factor: Why Prices are Skyrocketing</h2>
        <p>
          Industry analysts have dubbed the current market crisis <strong>"RAMeggedon."</strong> The massive 
          explosion in Agentic AI and local LLM demand seen in early 2026 has redirected the global 
          production of high-speed memory modules. GDDR7 memory, essential for the PS5 Pro's 
          rendering capabilities, is now being outbid by AI data centers at a 3:1 ratio.
        </p>
        <p>
          Combined with the rising cost of 3nm silicon fabrication, Sony is no longer able to subsidize 
          console hardware at previous margins. This isn't just a Sony issue; it is a global hardware 
          realignment where high-performance gaming devices are now competing directly for resources 
          with the "Intelligence Economy."
        </p>

        <div className="my-16 p-8 md:p-12 border rounded-[2.5rem] bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800">
          <h2 className="mt-0 text-3xl font-extrabold tracking-tight mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md">
                <h4 className="text-lg font-bold mb-3 flex gap-3 text-blue-600">
                  <span className="opacity-30">Q{i+1}:</span> {faq.question}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-[2rem] my-12 text-center shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl font-bold mb-4">Strategic Verdict</h3>
          <p className="text-lg opacity-90 mb-6">
            If you have been waiting to purchase a PS5, <strong>the next 5 days are critical</strong>. 
            Securing a unit at current inventory prices before the April 2nd MSRP update effectively 
            saves you up to $150 in pure hardware equity.
          </p>
          <Link href="/category/hardware" className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-neutral-100 transition-colors">
            View All Hardware Guides
          </Link>
        </div>
      </div>
    </article>
  );
}
