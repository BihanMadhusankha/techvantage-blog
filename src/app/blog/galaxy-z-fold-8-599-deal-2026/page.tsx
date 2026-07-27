import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from '@/lib/seo';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: 'Samsung Galaxy Z Fold 8 $599 Deal – Fact‑Checked Review',
  description: 'Get the Samsung Galaxy Z Fold 8 for $599 with promo code PAYPAL100. We break down the pricing, trade‑in discount, and why this is the best US deal right now.',
  image: '/blog/galaxy-z-fold-8-599-deal-2026/hero.webp',
});

export default function GalaxyZFold8Deal() {
  const faqs = [
    {
      question: 'What is the original price of the Samsung Galaxy Z Fold 8?',
      answer: 'The launch price is $1,899.99 in the US.'
    },
    {
      question: 'How can I buy the Z Fold 8 for $599?',
      answer: 'Use the PAYPAL100 promo code at checkout to get $100 off a $1,200 trade‑in discount, bringing the net price to $599.'
    },
    {
      question: 'Is the $599 price a limited‑time offer?',
      answer: 'Yes, the deal is valid while pre‑orders are open and inventory lasts (estimated until July 15, 2026).'
    },
    {
      question: 'What trade‑in value is required?',
      answer: 'A qualifying trade‑in worth $1,200 reduces the price by $1,200 before promo code.'
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: 'Samsung Galaxy Z Fold 8 $599 Deal – Fact‑Checked Review',
    description: 'Get the Samsung Galaxy Z Fold 8 for $599 with promo code PAYPAL100. We break down the pricing, trade‑in discount, and why this is the best US deal right now.',
    date: '2026-07-27',
    url: 'https://www.techvantage.blog/blog/galaxy-z-fold-8-599-deal-2026',
    image: 'https://www.techvantage.blog/blog/galaxy-z-fold-8-599-deal-2026/hero.webp',
    author: 'Bihan Madhusankha',
  });

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }} />

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/hardware" className="hover:underline">Hardware</Link>
          <span>•</span>
          <Link href="/category/deals" className="hover:underline">Deals</Link>
          <span>•</span>
          <span>July 27, 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Samsung Galaxy Z Fold 8 for $599 – How to Grab the Best Deal
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          The new Z Fold 8 is a premium foldable with a $1,900 price tag. Thanks to a $1,200 trade‑in and a $100 promo, you can snap it up for just $599. We verify the numbers, show you how to claim the discount, and explain why this is a huge savings for US buyers.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
            BM
          </div>
          <div>
            <div className="text-sm font-bold">Bihan Madhusankha</div>
            <div className="text-xs text-neutral-500">Lead Tech Journalist @ TechVantage</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/galaxy-z-fold-8-599-deal-2026/hero.webp"
          alt="Samsung Galaxy Z Fold 8 open, premium design with neon blue lighting"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white text-sm font-mono tracking-tight cursor-default">
            Samsung’s latest foldable – sleek, powerful, and now at an unbeatable price.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">
        <p className="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-4 border-blue-600 pl-6 mb-12 py-2">
          The Z Fold 8 packs a 7.6‑inch inner display, Snapdragon 8 Gen 3, and a revamped hinge. For most users the $1,900 price is steep, but with the combined trade‑in and promo you can own it for $599 – a 68 % discount.
        </p>

        <h2 className="text-3xl mt-12 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#1</span>
          Deal Breakdown
        </h2>
        <ul>
          <li>Original price: $1,899.99</li>
          <li>Trade‑in discount: $1,200 (eligible devices listed on Samsung US site)</li>
          <li>Promo code PAYPAL100: $100 off the reduced price</li>
          <li>Final price you pay: $599</li>
        </ul>
        <div className="my-8 flex justify-center">
          <Image
            src="/blog/galaxy-z-fold-8-599-deal-2026/spec-comparison.webp"
            alt="Spec comparison bar chart showing pricing breakdown"
            width={800}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-3xl mt-12 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#2</span>
          How to Claim the Offer
        </h2>
        <p>
          1. Visit Samsung’s official <Link href="https://www.samsung.com/us/mobile/galaxy-z-fold8/" target="_blank" className="underline hover:text-blue-600">Z Fold 8 product page</Link>.
          2. Choose the trade‑in option and select an eligible device (e.g., Galaxy S22, Note 20).
          3. At checkout, enter promo code <strong>PAYPAL100</strong> to apply the additional $100 discount.
          4. Complete the purchase – the total will be $599.
        </p>
        <div className="my-8 flex justify-center">
          <Image
            src="/blog/galaxy-z-fold-8-599-deal-2026/promo.webp"
            alt="Promo badge showing PAYPAL100 code for $100 off"
            width={400}
            height={200}
            className="rounded-xl shadow-lg"
          />
        </div>

        <h2 className="text-3xl mt-12 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#3</span>
          Why This Deal Matters
        </h2>
        <p>
          The Z Fold 8 is Samsung’s most affordable foldable yet, but even the base price is out of reach for many consumers. This combined discount brings the device into the mainstream market, offering a premium foldable experience for under $600 – a price point previously only seen in flagship smartphones.
        </p>
        <AdPlaceholder type="content" description="In‑Article Advertisement" />
      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-10 md:p-16 border rounded-[3rem] bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 shadow-lg">
        <h2 className="mt-0 text-3xl font-extrabold tracking-tight mb-12 text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-all hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 group">
              <h4 className="text-xl font-bold mb-4 flex gap-4 transition-colors">
                <span className="text-neutral-300 dark:text-neutral-700 font-mono shrink-0">0{i + 1}.</span>
                <span className="text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600">{faq.question}</span>
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium pl-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
