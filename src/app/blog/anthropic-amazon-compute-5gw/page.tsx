import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Anthropic & Amazon Announce Massive 5 Gigawatt Compute Expansion",
  description: "Anthropic signs a multi-year deal committing over $100 billion to secure up to 5GW of Amazon Trainium2 and Trainium3 capacity for Claude AI deployment.",
  image: "/blog/anthropic-amazon-hero.webp",
});

export default function AnthropicAmazonComputePage() {
  const faqs = [
    {
      question: "What does the 5 gigawatt compute agreement mean?",
      answer: "A 5 gigawatt (GW) capacity agreement between Anthropic and Amazon means massive infrastructure scaling to sustainably train and run models like Claude. For context, 1GW can power hundreds of thousands of homes; this staggering level of energy ensures reliable compute availability for AI workloads over the next decade."
    },
    {
      question: "Which chips will Anthropic be using?",
      answer: "Anthropic will deploy scaled capacity using AWS's custom silicon, specifically Trainium2 and the upcoming Trainium3 chips, significantly lowering the cost of high-performance AI inference."
    },
    {
      question: "What is Project Rainier?",
      answer: "Together with Amazon, Anthropic launched Project Rainier, one of the world's largest compute clusters, utilizing over one million Trainium2 chips."
    },
    {
      question: "Is Claude available natively on AWS?",
      answer: "Yes, the full Claude Platform is now available directly within AWS via Amazon Bedrock (currently in private beta). This allows companies to use the same account, billing, and strict governance controls."
    },
    {
      question: "How will this affect Claude's pricing or performance?",
      answer: "The immediate influx of nearly 1GW in the final quarter of 2026 is designed to resolve reliability issues and lag times during peak hours for free, Pro, Max, and Team users experiencing congestion."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Anthropic & Amazon Announce Massive 5 Gigawatt Compute Expansion",
    description: "Anthropic signs a multi-year deal committing over $100 billion to secure up to 5GW of Amazon Trainium2 and Trainium3 capacity for Claude AI deployment.",
    date: "2026-04-21",
    url: "https://techvantage.blog/blog/anthropic-amazon-compute-5gw",
    image: "https://techvantage.blog/blog/anthropic-amazon-hero.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'AI' && post.slug !== 'anthropic-amazon-compute-5gw').slice(0, 3);

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
        <div className="flex flex-wrap items-center gap-2 text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/ai" className="hover:underline">AI</Link>
          <span>•</span>
          <Link href="/category/software" className="hover:underline">Software</Link>
          <span>•</span>
          <Link href="/category/hardware" className="hover:underline">Hardware</Link>
          <span>•</span>
          <span>April 21, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Anthropic Teams Up with Amazon for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Massive 5GW</span> Compute Expansion
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          The future of Claude relies on relentless horsepower. A new mega-agreement secures Trainium2 and Trainium3 capacity to fuel Anthropics rapid ecosystem expansion through 2026 and beyond.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-600 to-amber-400 flex items-center justify-center font-bold text-white shadow-lg text-lg">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Lead Tech Journalist @ TechVantage</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/anthropic-amazon-hero.webp"
          alt="A futuristic hyper-scale 5GW data center with blue and amber neon glowing servers"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white/90 text-sm font-mono tracking-tight cursor-default flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            [Project Rainier] Scaling Claude workloads with unprecedented power density.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-orange-600 dark:prose-a:text-orange-400 hover:prose-a:text-orange-500 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-img:rounded-3xl">

        <p className="lead text-2xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-8 border-orange-500 pl-8 mb-16 py-4 bg-orange-50/50 dark:bg-orange-900/10 rounded-r-2xl shadow-sm">
          With demand for frontier models absolutely exploding globally throughout 2026, the question is no longer just how smart the AI is, but whether you have enough juice to serve it globally.
        </p>

        <p>
          In a stunning announcement today, <strong>Anthropic</strong> and <strong>Amazon</strong> have officially expanded their strategic alliance, unveiling a mammoth infrastructure commitment prioritizing scaling operations to meet unprecedented AI demand. This isn't just about software—it’s about cold, hard silicon power. The collaboration secures up to <strong>5 gigawatts (GW)</strong> of capacity specifically built to train and serve Claude.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">What Does 5 Gigawatts Actually Mean?</h2>
        
        <p>
          It's difficult for the average person to comprehend digital energy at this scale. A single gigawatt is roughly the capacity of a standard nuclear reactor or enough to power around 750,000 average domestic homes. By securing 5GW, Anthropic is essentially laying claim to the energy output of five nuclear facilities. And all of this is dedicated directly to generating artificial thought.
        </p>

        <p>
          "Our users tell us Claude is increasingly essential to how they work, and we need to build the infrastructure to keep pace with rapidly growing demand," stated <strong>Dario Amodei</strong>, Anthropic co-founder and CEO.
        </p>

        <div className="my-10 p-8 rounded-[2rem] bg-gradient-to-r from-neutral-50 to-orange-50 dark:from-neutral-900 dark:to-orange-900/20 border border-neutral-200 dark:border-neutral-800 shadow-md">
          <ul className="space-y-4 m-0 p-0 list-none font-bold text-neutral-800 dark:text-neutral-200">
            <li className="flex items-center gap-3"><span className="text-orange-500 text-2xl">⚡</span> Over $100 Billion committed over the next decade.</li>
            <li className="flex items-center gap-3"><span className="text-orange-500 text-2xl">⚡</span> Over 1,000,000 AWS Trainium2 chips deployed in Project Rainier.</li>
            <li className="flex items-center gap-3"><span className="text-orange-500 text-2xl">⚡</span> Near-term activation: ~1GW by end of 2026.</li>
          </ul>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          Enter Trainium Custom Silicon
        </h2>

        <p>
          This expansion represents a structural integration of <strong>AWS Trainium</strong> hardware. Anthropic is continuing its migration away from standard off-the-shelf GPU farms and increasingly leaning into Amazon's proprietary AI chips.
        </p>

        {/* Image 2: Trainium Setup */}
        <div className="relative w-full aspect-video my-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
          <Image
            src="/blog/anthropic-trainium-chips.webp"
            alt="Macro shot of a highly advanced glowing AI inference chip named 'Trainium'. Cyberpunk aesthetics"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        <p>
          “Our custom AI silicon offers high performance at significantly lower cost for customers,” said <strong>Andy Jassy</strong>, CEO of Amazon. This massive hardware transition includes Trainium2 rolling out massively in Q2, while fully scaled <strong>Trainium3</strong> capacity is expected online in late 2026.
        </p>
        <p>
          Why do custom chips matter? As millions flock to the free, Pro, and Max tiers of Claude, the cost equation is pivotal. Operating proprietary silicon drastically minimizes inference costs. It's the only sustainable method to operate over a $30 billion annual run-rate, an inflection Anthropic has rapidly achieved.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">Enterprise Deep-Integration: Claude Platform on AWS</h2>

        <p>
          For US enterprise customers (who form the core base of Amazon's massive B2B footprint), the new updates solve major friction points.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="font-black text-xl mb-3 text-neutral-900 dark:text-white uppercase tracking-wider text-orange-500">Same Account, Same Billing</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-medium">
              Organizations no longer need custom side-contracts or extra credentials. The entire Claude platform natively mirrors within the secure AWS backbone. Direct direct billing and compliance oversight.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="font-black text-xl mb-3 text-neutral-900 dark:text-white uppercase tracking-wider text-orange-500">The Power of Choice</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-medium">
              While AWS acts as their primary AI development infrastructure, Claude remains distinct as the only major frontier-class model fully available on Google Cloud (Vertex AI), Microsoft Azure (Foundry), and AWS simultaneously.
            </p>
          </div>
        </div>

        {/* Image 3: Global Network */}
        <div className="relative aspect-[21/9] w-full my-16 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/claude-aws-cloud.webp"
            alt="Abstract tech visualization of cloud computing platform. A glowing neural network extending into the clouds"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <h3 className="text-2xl mt-12 mb-6 text-neutral-900 dark:text-white">Peak Hour Relief is Coming</h3>
        <p>
          If you’ve experienced "peak hour" throttling lately, relief is on the way. The rollout is actively combating consumer scaling pains. Adding ~1GW of Trainium capacity specifically throughout the remaining months of 2026 resolves current compute bandwidth bottlenecks that currently plague the Claude Pro and Max tiers. 
        </p>

        <p>
          The $100 billion decade-long runway is more than an impressive number; it represents a fundamental maturation of AI. It answers the physical question regarding how society's most intelligent digital minds will be housed, wired, and cooled in an energy-limited world. 
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-8 md:p-14 border rounded-[3rem] bg-white dark:bg-neutral-900 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none shadow-xl border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-sm">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm transition-all hover:bg-white dark:hover:bg-neutral-900 hover:shadow-lg hover:-translate-y-1">
              <h4 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100">
                {faq.question}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
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
            <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
            Continue Reading
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
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2 leading-tight">{post.title}</h3>
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
