import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "iPhone 18 Pro to Feature 'Aggressive' Pricing Despite RAM Crisis",
  description: "Apple's upcoming iPhone 18 Pro is rumored to maintain aggressive starting prices despite global RAM shortages. Discover the leaked features, 2nm A20 chip, and new Dark Cherry color.",
  image: "/blog/iphone-18-pro-pricing-features/iphone_18_hero.webp",
});

export default function IPhone18ProPricePage() {
  const faqs = [
    {
      question: "Will the iPhone 18 Pro be more expensive?",
      answer: "According to analyst Jeff Pu, Apple is expected to adopt an 'aggressive pricing strategy' and may keep the starting prices unchanged or only slightly higher compared to the iPhone 17 Pro, despite ongoing global RAM chip shortages."
    },
    {
      question: "When is the iPhone 18 Pro coming out?",
      answer: "The high-end iPhone 18 Pro and iPhone 18 Pro Max, along with the new foldable iPhone, are expected to launch in September 2026. The more affordable iPhone 18 and 18e will likely follow in Spring 2027."
    },
    {
      question: "What are the biggest new features of the iPhone 18 Pro?",
      answer: "Rumored features include a 2-nanometer A20 Pro chip, a smaller 'Nano Island' (Dynamic Island), a variable aperture camera, longer battery life, and a new Dark Cherry color option."
    },
    {
      question: "Is Apple removing the Dynamic Island?",
      answer: "While under-display Face ID technology is reportedly not ready, Apple is expected to significantly shrink the size of the Dynamic Island by up to 35 percent for the iPhone 18 Pro."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "iPhone 18 Pro to Feature 'Aggressive' Pricing Despite RAM Crisis",
    description: "Apple's upcoming iPhone 18 Pro is rumored to maintain aggressive starting prices despite global RAM shortages. Discover the leaked features, 2nm A20 chip, and new Dark Cherry color.",
    date: "2026-05-17",
    url: "https://techvantage.blog/blog/iphone-18-pro-pricing-features",
    image: "https://techvantage.blog/blog/iphone-18-pro-pricing-features/iphone_18_hero.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'Hardware').slice(0, 3);

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
          <Link href="/category/hardware" className="hover:underline bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">Hardware Leaks</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">May 17, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          iPhone 18 Pro May Feature <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600">'Aggressive' Pricing</span> Despite Global RAM Crisis
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          While Android manufacturers hike prices amid the semiconductor shortage, Apple is preparing a major coup. Here is everything we know about the iPhone 18 Pro's pricing, 2nm A20 chip, and the new Dark Cherry color.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Senior Hardware Analyst</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/iphone-18-pro-pricing-features/iphone_18_hero.webp"
          alt="Cinematic concept of the iPhone 18 Pro in Dark Cherry red color"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            LEAK UPDATE
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            The rumored "Dark Cherry" (Pantone 6076) color for the September 2026 launch.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-red-600 dark:prose-a:text-red-400 hover:prose-a:text-red-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-red-600 pl-8 mb-12 py-2">
          The smartphone market is currently battling a severe RAM chip shortage, driving up manufacturing costs across the board. Yet, Apple's unparalleled supply chain leverage might turn this crisis into a competitive advantage.
        </p>

        <p>
          According to a recent research note by GF Securities analyst Jeff Pu, <a href="https://www.macrumors.com/roundup/iphone-18-pro/" target="_blank" rel="noopener noreferrer">Apple is planning an "aggressive pricing strategy"</a> for the upcoming <strong>iPhone 18 Pro and iPhone 18 Pro Max</strong>. 
        </p>

        <p>
          Despite Apple's own acknowledgment of "significantly higher memory costs" in the current quarter, Pu predicts the starting prices of the iPhone 18 Pro models will remain unchanged—or see only a marginal increase—compared to the iPhone 17 Pro lineup (which currently starts at $1,099 for the Pro and $1,199 for the Pro Max). Apple plans to offset these expensive 12GB RAM modules by lowering the costs of other components like displays and camera housings.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">01.</span> A Split Launch Strategy for 2026/2027
        </h2>

        <p>
          Apple is altering its traditional release cadence. The fall 2026 launch event in September will focus exclusively on the high-end: the <strong>6.3-inch iPhone 18 Pro</strong>, the <strong>6.9-inch iPhone 18 Pro Max</strong>, and the highly anticipated foldable iPhone (approx. 7.8 inches when open). 
        </p>
        
        <p>
          Consumers waiting for the more affordable standard <strong>iPhone 18 and iPhone 18e</strong> will have to wait until Spring 2027. This split strategy forces early upgraders into the premium tier.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">02.</span> The 2nm A20 Chip: A Massive Leap
        </h2>

        {/* Image 2: A20 Chip */}
        <div className="relative w-full aspect-[21/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
          <Image
            src="/blog/iphone-18-pro-pricing-features/a20_chip.webp"
            alt="Advanced 2-nanometer A20 smartphone processor chip"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            TSMC 2nm Process
          </div>
        </div>

        <p>
          The iPhone 18 Pro models will be powered by the revolutionary <strong>A20 Pro chip</strong>, utilizing TSMC's cutting-edge 2-nanometer manufacturing process.
        </p>

        <p>
          This transition allows for significantly more transistors, translating to a projected <strong>15 percent speed boost and 30 percent increase in power efficiency</strong> over the A19. More importantly, Apple will utilize TSMC's Wafer-Level Multi-Chip Module (WMCM) technology, integrating the RAM directly onto the same wafer as the CPU and GPU. This will drastically improve Apple Intelligence performance while freeing up physical space inside the phone for a larger battery (rumored to be 5,100 - 5,200 mAh).
        </p>
        
        <p>
          Because TSMC's 2nm nodes cost roughly 50% more to manufacture than 3nm, these A20 Pro chips are incredibly expensive, making Apple's rumored "aggressive pricing" even more impressive.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-red-500">03.</span> Shrinking the Dynamic Island
        </h2>

        {/* Image 3: Dynamic Island */}
        <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(239,68,68,0.25)] group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/iphone-18-pro-pricing-features/dynamic_island.webp"
            alt="Close up of the new, smaller Dynamic Island on the iPhone 18 Pro"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          While earlier rumors hoped for under-display Face ID, the technology simply isn't ready. However, leaked CAD renders and supply chain sources confirm the next best thing: a much smaller "Nano Island."
        </p>

        <p>
          According to leaker Ice Universe, the new Dynamic Island will be approximately <strong>35 percent narrower</strong> (around 13.5mm down from 20.7mm), finally freeing up more of the top status bar.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">04.</span> Cameras, Colors, and C2 Modems
        </h2>

        <p>
          The iPhone 18 Pro isn't just getting faster; it's getting significantly better hardware across the board:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-l-4 border-purple-500">
            <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">📸 Variable Aperture Camera</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">The Main camera will feature a variable aperture, allowing manual adjustment of light intake for professional-grade depth of field control.</p>
          </div>
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-l-4 border-blue-500">
            <h4 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white">🛰️ C2 Modem & Satellite 5G</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Apple's custom C2 modem will replace Qualcomm, potentially adding NR-NTN support for direct phone-to-satellite internet access.</p>
          </div>
        </div>

        <p>
          Finally, aesthetics matter. Apple is reportedly testing a stunning <strong>"Dark Cherry" (Pantone 6076)</strong> color for the Pro lineup. Combined with an updated back glass process that minimizes the color difference between the glass and the titanium/aluminum frame, the iPhone 18 Pro is shaping up to be Apple's most refined hardware release in years.
        </p>

      </div>

      {/* Tags & Keywords */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["iPhone 18 Pro", "iPhone 18 Release Date", "Apple 2nm Chip", "A20 Pro", "Dynamic Island", "Smartphone RAM Crisis", "Dark Cherry iPhone", "Apple Hardware Leaks", "Tech News USA", "Variable Aperture Camera"].map((tag, index) => (
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold mb-10 text-neutral-900 dark:text-neutral-50 uppercase tracking-widest flex items-center gap-3">
            <span className="w-2 h-6 bg-red-500 rounded-full inline-block"></span>
            More Hardware News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col bg-white dark:bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.image.startsWith('/') ? post.image : `${post.image.split('?')[0]}?auto=format&fit=crop&q=65&w=600`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-neutral-900 dark:text-white uppercase tracking-widest shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">{post.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">{post.description}</p>
                  <div className="text-xs text-neutral-500 font-mono tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
