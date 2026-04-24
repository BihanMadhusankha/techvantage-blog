import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Meta to Cut 10% of Workforce in Massive A.I. Pivot",
  description: "Meta announces layoffs affecting 8,000 employees and closes 6,000 open roles as the tech giant heavily invests in artificial intelligence and automation.",
  image: "/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_1.webp",
});

export default function MetaAILayoffsPage() {
  const faqs = [
    {
      question: "How many employees is Meta laying off in 2026?",
      answer: "Meta is planning to lay off approximately 10% of its workforce, which amounts to roughly 8,000 employees. In addition, the company is closing 6,000 open roles that were previously slated for hiring."
    },
    {
      question: "Why is Meta cutting its workforce?",
      answer: "The layoffs are primarily driven by Meta's strategic shift toward Artificial Intelligence. As the company invests heavily in AI-powered systems and coding assistants, leadership believes they can operate more efficiently and accomplish projects with leaner teams."
    },
    {
      question: "When will the Meta layoffs begin?",
      answer: "The workforce reduction at Meta is scheduled to begin on May 20, 2026, as part of their continued effort to restructure and offset massive AI investments."
    },
    {
      question: "Are other tech companies laying off employees due to AI?",
      answer: "Yes, the trend extends across the tech industry. For example, Block (owner of Square and Cash App) recently cut 40% of its workforce to embrace AI tools, and Microsoft offered buyouts to 7% of its workforce while increasing its own AI investments."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Meta to Cut 10% of Workforce in Massive A.I. Pivot",
    description: "Meta announces layoffs affecting 8,000 employees and closes 6,000 open roles as the tech giant heavily invests in artificial intelligence and automation.",
    date: "2026-04-24",
    url: "https://techvantage.blog/blog/meta-ai-layoffs-10-percent-2026",
    image: "https://techvantage.blog/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_1.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'AI' && post.slug !== 'meta-ai-layoffs-10-percent-2026').slice(0, 3);

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
        <div className="flex flex-wrap items-center gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/ai" className="hover:underline">AI</Link>
          <span>•</span>
          <Link href="/category/software" className="hover:underline">Software</Link>
          <span>•</span>
          <span>April 24, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Meta to Cut 10% of Workforce as <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">A.I. Takes Over</span> Core Roles
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          In a staggering move that underscores the rapid rise of automation, Meta is letting go of 8,000 employees and closing 6,000 open roles to fund its multi-billion dollar artificial intelligence vision.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-400 flex items-center justify-center font-bold text-white shadow-lg text-lg">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Lead Tech Journalist @ TechVantage</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)] ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_1.webp"
          alt="Conceptual image illustrating corporate restructuring and the rise of Artificial Intelligence at Meta HQ"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white/90 text-sm font-mono tracking-tight cursor-default flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            [Meta Restructuring] Shifting focus from human capital to artificial intelligence.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-img:rounded-3xl">

        <p className="lead text-2xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-8 border-blue-500 pl-8 mb-16 py-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-2xl shadow-sm">
          "This is not an easy trade-off and it will mean letting go of people who have made meaningful contributions to Meta during their time here." — Janelle Gale, Meta's Chief People Officer
        </p>

        <p>
          The artificial intelligence revolution is no longer just a distant promise; it is fundamentally altering the corporate landscape today. <strong>Meta</strong>, the parent company of Facebook, Instagram, and WhatsApp, has announced plans to cut exactly <strong>10 percent of its workforce</strong>. 
        </p>
        <p>
          According to an internal memo circulated on Thursday, the layoffs will affect approximately <strong>8,000 employees</strong>. Furthermore, the company is immediately closing another <strong>6,000 open roles</strong>. The cuts, scheduled to begin on May 20, 2026, represent one of the most aggressive shifts toward AI-driven efficiency in the tech industry to date.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">Funding the AI Future</h2>
        
        <p>
          Meta concluded 2025 with more than 78,000 employees, but CEO <strong>Mark Zuckerberg</strong> has increasingly signaled a pivot. As Meta spends heavily on developing massive AI infrastructure—projecting capital expenditures between $115 billion and $135 billion for 2026—the company is seeking ways to offset these astronomical investments.
        </p>

        <p>
          Zuckerberg recently stated that he expects much of the work currently done in the technology industry to eventually be overtaken by A.I.-powered systems. This includes advanced coding assistants that can help engineers write, test, and deploy software faster than ever before. With AI handling the heavy lifting, Meta believes it can maintain its rapid development pace with significantly leaner teams.
        </p>

        <div className="my-10 p-8 rounded-[2rem] bg-gradient-to-r from-neutral-50 to-blue-50 dark:from-neutral-900 dark:to-blue-900/20 border border-neutral-200 dark:border-neutral-800 shadow-md">
          <ul className="space-y-4 m-0 p-0 list-none font-bold text-neutral-800 dark:text-neutral-200">
            <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">📉</span> 8,000 current employees (10%) to be laid off.</li>
            <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">🚫</span> 6,000 open positions permanently closed.</li>
            <li className="flex items-center gap-3"><span className="text-blue-500 text-2xl">📅</span> Transition process begins May 20, 2026.</li>
          </ul>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          The Workspace of Tomorrow
        </h2>

        {/* Image 2: AI Workspace */}
        <div className="relative w-full aspect-video my-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
          <Image
            src="/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_2.webp"
            alt="Futuristic workspace where advanced artificial intelligence streams replace traditional workers"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          "We’re doing this as part of our continued effort to run the company more efficiently and to allow us to offset the other investments we’re making," explained <strong>Janelle Gale</strong>, Meta’s chief people officer, in the Thursday memo.
        </p>

        <p>
          This restructuring reflects a broader belief among Silicon Valley leadership: the workforce of tomorrow will not just use AI tools; it will be composed largely of them. From autonomous <Link href="/blog/deploy-first-autonomous-ai-agent-2026">AI agents</Link> to design assistants like <Link href="/blog/claude-design-anthropic-labs-launch">Claude Design</Link>, the threshold for human intervention in software development and operations is rapidly rising.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">An Industry-Wide Paradigm Shift</h2>

        <p>
          Meta is not alone in this strategy. Across the technology sector, companies are tightening their belts on traditional hiring while simultaneously pouring billions into their AI divisions.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="font-black text-xl mb-3 text-neutral-900 dark:text-white uppercase tracking-wider text-purple-500">Block's Aggressive Cut</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-medium">
              In February 2026, financial technology giant Block (owner of Square, Cash App, and Tidal) announced a staggering 40 percent reduction of its workforce as it rapidly embraced new A.I. automation tools for customer service and coding.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300">
            <h4 className="font-black text-xl mb-3 text-neutral-900 dark:text-white uppercase tracking-wider text-green-500">Microsoft's Buyouts</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-medium">
              Just this Thursday, Microsoft confirmed it was offering buyouts to 7 percent of its workforce. The move is designed to reallocate capital directly into further advancing its <Link href="/blog/microsoft-copilot-cowork-2026">Copilot AI infrastructure</Link>.
            </p>
          </div>
        </div>

        {/* Image 3: Presentation Board */}
        <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-[2rem] bg-neutral-900 shadow-xl group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_3.webp"
            alt="Futuristic presentation board displaying graphs about workforce transformation towards Artificial Intelligence"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <h3 className="text-2xl mt-12 mb-6 text-neutral-900 dark:text-white">Looking Ahead</h3>
        <p>
          A spokesman for Meta confirmed the 10 percent cuts but declined to offer further comment. As the May 20th transition date approaches, the tech world is watching closely. 
        </p>

        <p>
          This is a defining moment for the US tech workforce. As artificial intelligence continues to evolve from simple chatbots into complex, reasoning engines, the definition of a "tech job" is fundamentally changing. The era of mass-hiring software engineers may be ending, replaced by smaller teams of highly skilled "AI conductors" who orchestrate digital workforces.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-8 md:p-14 border rounded-[3rem] bg-white dark:bg-neutral-900 lg:bg-transparent lg:dark:bg-transparent lg:shadow-none shadow-xl border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm">💡</span>
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
            <span className="w-2 h-6 bg-blue-500 rounded-full inline-block"></span>
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
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">{post.title}</h3>
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
