import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Nintendo Switch 2 Price Increase: Why It's Happening and What to Expect",
  description: "Nintendo announces a global price hike for the Switch 2, blaming AI demand and component costs. Learn how this affects the US and global gaming market.",
  image: "/blog/nintendo-switch-2-price-increase/nintendo_switch_2_hero.webp",
});

export default function NintendoSwitch2PricePage() {
  const faqs = [
    {
      question: "How much is the Nintendo Switch 2 price increasing in the US?",
      answer: "The price of the Nintendo Switch 2 is increasing from $449.99 to $499.99 in the United States starting in September."
    },
    {
      question: "Why is Nintendo raising the price of the Switch 2?",
      answer: "Nintendo cited rising costs for essential components like RAM and storage, driven by massive demand from AI data centers, as well as changes in market conditions and potential supply chain disruptions."
    },
    {
      question: "Is the original Nintendo Switch increasing in price too?",
      answer: "In Japan, all versions of the original Switch console are set to increase in price starting May 25th. Currently, no such announcement has been made for the US market."
    },
    {
      question: "Did Sony also raise the price of the PlayStation 5?",
      answer: "Yes, Sony recently announced a price increase for the PlayStation 5, with prices rising by approximately $100 in the US due to global economic pressures."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Nintendo Switch 2 Price Hike: AI Demand and Global Economics Drive Costs Up",
    description: "Nintendo apologizes for the Switch 2 price increase, citing RAM shortages and storage costs driven by the AI boom.",
    date: "2026-05-08",
    url: "https://techvantage.blog/blog/nintendo-switch-2-price-increase",
    image: "https://techvantage.blog/blog/nintendo-switch-2-price-increase/nintendo_switch_2_hero.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'Hardware' || post.category === 'Software').slice(0, 3);

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 text-red-600 dark:text-red-400 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/hardware" className="hover:underline bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">Gaming Hardware</Link>
          <Link href="/category/software" className="hover:underline bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">Industry News</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">May 08, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Nintendo <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">Apologizes</span> as Switch 2 Price Increase Announced
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          The global gaming landscape is shifting. Nintendo has officially announced a price hike for the Switch 2, citing unprecedented demand for AI components as a primary driver.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Gaming Industry Analyst</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/nintendo-switch-2-price-increase/nintendo_switch_2_hero.webp"
          alt="Nintendo Switch 2 cinematic hero shot with price adjustment"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            MARKET ALERT
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Switch 2 prices will rise to $499.99 in the US starting September 2026.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-red-600 dark:prose-a:text-red-400 hover:prose-a:text-red-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-red-600 pl-8 mb-12 py-2">
          Nintendo has "sincerely apologized" to its global fanbase as it confirms a significant price increase for the Switch 2, effective this September.
        </p>

        <p>
          In a move that mirrors recent price adjustments from Sony and other hardware manufacturers, <strong>Nintendo</strong> announced that the Switch 2 will see its retail price jump from <strong>$449.99 to $499.99</strong> in the United States. European customers will see a similar rise, with prices moving from €469.99 to €499.99 in most regions.
        </p>

        <p>
          This announcement comes despite the console's massive success, having sold nearly <strong>20 million units</strong> since its launch last June. Nintendo reported a profit of 424.0 billion yen ($2.7bn), a 52% increase year-over-year, yet the company insists the price hike is a necessity born of "changes in market conditions."
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-orange-500">01.</span> The AI Boom: Driving Up Component Costs
        </h2>

        {/* Image 2: Chip Shortage */}
        <div className="relative w-full aspect-[21/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
          <Image
            src="/blog/nintendo-switch-2-price-increase/chip_shortage.webp"
            alt="Abstract visualization of AI chips and RAM modules in high demand"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Supply Chain Crisis
          </div>
        </div>

        <p>
          The primary culprit behind the price hike? <strong>RAM and Storage.</strong> These essential components have seen dramatic price increases recently, fueled by the explosive growth of Artificial Intelligence.
        </p>
        
        <p>
          AI data centers require massive amounts of the same high-speed memory and NAND storage used in modern consoles. This "huge demand" has created a global shortage, driving up manufacturing costs for companies like Nintendo, Sony, and Valve.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-red-500">02.</span> Geopolitical Pressures and Tariffs
        </h2>

        <p>
          Beyond the component shortage, Nintendo is facing a perfect storm of economic and geopolitical factors. Analysts point to the following as major contributors to the $50 increase in the US:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">🇺🇸 Trade Tariffs</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Potential tariff plans from the US administration have created uncertainty for hardware importers, leading to proactive pricing adjustments.</p>
          </div>
          <div className="p-10 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">🌍 Global Supply Chains</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Uncertainty caused by conflicts in the Middle East, particularly tensions involving Iran, continues to affect international shipping and logistics.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">03.</span> A New Standard for Premium Gaming
        </h2>

        {/* Image 3: Console Pricing */}
        <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(239,68,68,0.25)] group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/nintendo-switch-2-price-increase/console_pricing.webp"
            alt="PlayStation 5 and Nintendo Switch 2 in a premium gaming environment"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          Nintendo isn't alone in this trend. Sony recently raised the price of the <strong>PlayStation 5 by $100 in the US</strong>, citing similar global economic landscapes. Even Valve has reportedly held back new hardware releases to navigate these fluctuating costs.
        </p>

        <p>
          For US gamers, the message is clear: the era of the $300-$400 flagship console may be coming to an end. With the Switch 2 now officially entering the <strong>$500 bracket</strong>, it joins the PS5 as a premium device that reflects the high cost of cutting-edge silicon in 2026.
        </p>

        <div className="my-12 p-8 rounded-3xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 text-center">
          <p className="text-lg font-medium text-red-900 dark:text-red-100">
            "We sincerely apologize for the impact these price revisions may have on our customers... and we deeply appreciate your understanding." — Nintendo Official Statement
          </p>
        </div>

      </div>

      {/* Tags & Keywords */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["Nintendo Switch 2", "Switch 2 Price Hike", "Gaming Hardware US", "AI Chip Shortage", "Nintendo Apology", "PlayStation 5 Price", "Video Game Industry 2026", "Consoles USA", "Gaming Economics"].map((tag, index) => (
            <span key={index} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-700 dark:hover:text-red-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 text-lg">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-red-200 dark:hover:border-red-800">
              <h4 className="text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">
                {faq.question}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
