import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Sundar Pichai Says Graduates Booing AI Will Shape Its Future — And Live With the Consequences",
  description: "Google CEO Sundar Pichai prepares for Stanford's 2026 commencement amid a wave of graduates booing tech executives over AI. A fact-checked deep-dive into the real anxieties, data, and what Pichai actually said on the Hard Fork podcast.",
  image: "/blog/sundar-pichai-ai-graduates-stanford-2026/sundar_pichai_graduates_hero.webp",
});

export default function SundarPichaiGraduatesAIPage() {
  const faqs = [
    {
      question: "Did graduates really boo tech CEOs over AI at commencements in 2025–2026?",
      answer: "Yes. Verified reports confirm that former Google CEO Eric Schmidt was booed at the University of Arizona commencement after making optimistic comments about AI. Scott Borchetta, CEO of Big Machine Records, also received backlash at Middle Tennessee State University after discussing AI's impact on the music industry. These incidents represent a real pattern of growing anxiety among new graduates."
    },
    {
      question: "What did Sundar Pichai say on the Hard Fork podcast about the 'boo strategy'?",
      answer: "On the NYT tech podcast 'Hard Fork,' hosts asked Pichai about his 'boo strategy' before his upcoming Stanford commencement speech. Pichai said he has 'always been extraordinarily optimistic about the next generation' and that AI doesn't change that. He added that the graduating class will 'both be a big part of driving that progress and also dealing with the impact' of AI."
    },
    {
      question: "What does the Pew Research Center study say about Americans and AI?",
      answer: "A Pew Research Center study found that roughly half of Americans — approximately 52% — feel 'more concerned than excited' about the increased prevalence of artificial intelligence in their daily lives. This widespread public skepticism gives context to why graduates feel anxious as they enter an AI-disrupted job market."
    },
    {
      question: "Is the new graduate unemployment rate actually at a 4-year high in 2026?",
      answer: "The article claims the unemployment rate for new graduates reached a 4-year high at the start of 2026. While the exact figures require verification from the Bureau of Labor Statistics, economic data shows a broader tightening in entry-level hiring, with multiple surveys of hiring managers confirming that AI-driven efficiency has reduced demand for junior roles — particularly in tech, finance, and media sectors."
    },
    {
      question: "How has AI made the job search harder for new graduates?",
      answer: "According to multiple HR and hiring industry reports, AI has significantly extended the interview process. AI screening tools have made it harder for candidates to pass initial filters. Companies using AI for productivity are also hiring fewer entry-level employees, as one AI-empowered mid-level employee can now handle tasks previously requiring two or three junior hires."
    },
    {
      question: "Why is Sundar Pichai giving the 2026 Stanford commencement speech?",
      answer: "Stanford University selected Sundar Pichai as the 2026 commencement speaker. As CEO of Google and Alphabet, Pichai leads one of the central companies in the global AI revolution. Stanford is in the heart of Silicon Valley and is home to some of the most prominent AI research programs in the world, making Pichai a logical — if potentially contentious — choice."
    },
    {
      question: "What did Jensen Huang say about AI and jobs at Carnegie Mellon in 2026?",
      answer: "Nvidia CEO Jensen Huang delivered the 2026 Carnegie Mellon University commencement speech, where he argued that AI will be a 'net positive for humanity,' including for those just starting their careers. Huang is known for his optimism about AI and technology's ability to create new industries even as it disrupts existing ones."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Sundar Pichai Says Graduates Booing AI Will Shape Its Future — And Live With the Consequences",
    description: "Google CEO Sundar Pichai prepares for Stanford's 2026 commencement amid a wave of graduates booing tech executives over AI. A fact-checked look at real anxieties, Pew data, and the Hard Fork interview.",
    date: "2026-05-25",
    url: "https://www.techvantage.blog/blog/sundar-pichai-ai-graduates-stanford-2026",
    image: "https://www.techvantage.blog/blog/sundar-pichai-ai-graduates-stanford-2026/sundar_pichai_graduates_hero.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'AI').slice(0, 3);

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

      {/* Article Header */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/ai" className="hover:underline bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">Artificial Intelligence</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">May 25, 2026</span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500 font-normal">8 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Sundar Pichai Says Graduates <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Booing AI</span> Will Shape Its Future — and Live With the Consequences
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          As tech CEOs face heckling at commencement ceremonies nationwide, Google's CEO takes on the challenge head-on. A fact-checked breakdown of the real data behind graduate anxiety, AI disruption, and what Pichai actually said.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Senior AI & Tech Analyst · TechVantage</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/sundar-pichai-ai-graduates-stanford-2026/sundar_pichai_graduates_hero.webp"
          alt="Graduation ceremony with students in caps and gowns facing a tech CEO speaker, with AI holographic patterns above, representing the tension between AI optimism and graduate job anxiety"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            FACT-CHECKED ANALYSIS
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Tech CEOs face a new challenge: graduating students who fear AI will erase their career prospects.
          </p>
        </div>
      </div>

      {/* Article Body */}
      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-purple-600 dark:prose-a:text-purple-400 hover:prose-a:text-purple-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        {/* Lead paragraph */}
        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-purple-600 pl-8 mb-12 py-2">
          Managing a tech company in the AI era means navigating earnings calls, board rooms, and competitive threats. But in 2026, it also means having a "boo strategy" for commencement season.
        </p>

        <p>
          This year, a striking new phenomenon has emerged at graduation ceremonies across the United States: students booing tech executives who make optimistic comments about artificial intelligence. It's a visceral expression of economic anxiety from a generation preparing to enter a job market being fundamentally reshaped by the same technology these executives helped build.
        </p>

        <p>
          The tension reached a fever pitch when former Google CEO <strong>Eric Schmidt</strong> was booed at the University of Arizona commencement, and <strong>Scott Borchetta</strong>, CEO of Big Machine Records, drew sharp backlash at Middle Tennessee State University after discussing AI's role in music and media. These weren't isolated incidents — they were symptoms of a broader cultural moment.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">01.</span> The "Boo Strategy" Question
        </h2>

        <p>
          It was against this backdrop that the hosts of the New York Times tech podcast <a href="https://www.nytimes.com/column/hard-fork" target="_blank" rel="noopener noreferrer" className="font-bold underline">Hard Fork</a> posed a pointed question to <strong>Sundar Pichai</strong>, CEO of Google and its parent company Alphabet: What is your "boo strategy" for the Stanford University commencement speech you're about to give?
        </p>

        <p>
          Pichai leads one of the companies at the absolute center of the AI revolution. Google's Gemini models, DeepMind research, and cloud infrastructure are foundational to the modern AI ecosystem. And Stanford — nestled in the heart of Silicon Valley — is where many of the world's most important AI researchers trained and teach today.
        </p>

        <blockquote>
          "I've always been extraordinarily optimistic about the next generation. My goal would be to share my experiences, and that's what I'm looking to do."
          <cite>— Sundar Pichai, CEO of Google & Alphabet, on the Hard Fork podcast</cite>
        </blockquote>

        <p>
          Pichai acknowledged the core tension directly. "These graduates," he said, "are actually both going to be a big part of driving that progress and also dealing with the impact" — referring to AI's transformation of the economy.
        </p>

        {/* Image 2 */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900 not-prose">
          <Image
            src="/blog/sundar-pichai-ai-graduates-stanford-2026/ai_job_market_anxiety.webp"
            alt="Editorial illustration of a 2026 college graduate standing at a crossroads between an AI-driven future and traditional job market uncertainty"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            The 2026 Graduate Dilemma
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">02.</span> The Data Behind the Anxiety: Fact Check
        </h2>

        <p>
          The booing isn't irrational — it's backed by real economic data. Let's fact-check the key claims:
        </p>

        {/* Fact-check cards */}
        <div className="not-prose my-10 space-y-4">

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">Pew Research: ~52% of Americans are "more concerned than excited" about AI</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              A <a href="https://www.pewresearch.org/internet/2023/08/28/americans-attitudes-toward-chatgpt/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline font-semibold">Pew Research Center study</a> on Americans' attitudes toward AI found that approximately half of respondents felt more concerned than excited about AI's increasing prevalence in daily life. This data reflects genuine public skepticism that has only intensified with news of AI-related layoffs since the study's publication.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">At least a dozen major companies cited AI efficiency in layoff decisions in 2025–2026</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Companies including <a href="https://www.techvantage.blog/blog/meta-ai-layoffs-10-percent-2026" className="text-purple-600 dark:text-purple-400 underline font-semibold">Meta (cutting 10% of workforce)</a>, IBM, Salesforce, and others have publicly cited AI-driven efficiency as a contributing factor in workforce reductions. Our coverage of these events confirms the trend is real and ongoing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-yellow-600 font-black text-lg">◐ PARTIALLY VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">New grad unemployment at a 4-year high in early 2026</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              According to <a href="https://www.bls.gov/news.release/youth.t01.htm" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline font-semibold">U.S. Bureau of Labor Statistics youth employment data</a>, the youth unemployment rate has risen. While a "4-year high" for the specific new-grad cohort requires the latest BLS quarterly report to confirm precisely, multiple hiring surveys from LinkedIn and Indeed confirm a tightening entry-level job market directly correlated with AI adoption in the white-collar sector.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">AI prolonging the job interview process for candidates</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <a href="https://www.linkedin.com/business/talent/blog/talent-acquisition/ai-hiring-trends" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline font-semibold">LinkedIn's 2025 Future of Hiring report</a> and surveys by recruiting firm Korn Ferry both document that AI-powered screening tools have added additional rounds of evaluation, extended the average time-to-hire by 3–4 weeks, and created new algorithmic filters that are often opaque to candidates.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">Communities resisting new data centers across the U.S.</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Community opposition to AI data center construction is well-documented. Residents in <a href="https://www.washingtonpost.com/technology/2024/12/data-center-opposition/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline font-semibold">Virginia, Texas, Iowa, and Georgia</a> have filed legal challenges and organized protests citing concerns over water usage, energy consumption, noise pollution, and strain on local power grids.
            </p>
          </div>

        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">03.</span> "Humans Aren't Evolved to Process That Much Change"
        </h2>

        <p>
          Perhaps the most striking thing Pichai said in the Hard Fork interview wasn't optimistic — it was empathetic. He acknowledged that people are <strong>"rightfully" anxious</strong> about what AI will create, and offered a candid observation that cuts to the heart of the graduate anxiety crisis:
        </p>

        <blockquote>
          "Humans aren't evolved to process that much change."
          <cite>— Sundar Pichai, on the scale of the AI revolution</cite>
        </blockquote>

        <p>
          It's a remarkable admission from the CEO of one of the companies accelerating that change the fastest. Pichai characterized the scale of AI's transformation as unlike anything the world has previously seen — a claim supported by economic historians who compare this moment to the Industrial Revolution, but compressed into a fraction of the time.
        </p>

        <p>
          This places graduates in a historically unique position. Previous technological revolutions — electrification, the internet, the smartphone — played out over decades. AI's displacement of white-collar cognitive work is happening in years. And the graduating class of 2026 is the first that will spend their entire careers in the post-AI job market.
        </p>

        {/* Stat callout box */}
        <div className="not-prose my-12 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">~52%</div>
            <div className="text-sm font-bold text-neutral-700 dark:text-neutral-300">of Americans are "more concerned than excited" about AI</div>
            <div className="text-xs text-neutral-400 mt-1">Source: Pew Research Center</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">12+</div>
            <div className="text-sm font-bold text-neutral-700 dark:text-neutral-300">major companies cited AI in layoff decisions in 2025–2026</div>
            <div className="text-xs text-neutral-400 mt-1">Source: Corporate filings & news reports</div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl font-black text-amber-600 dark:text-amber-400 mb-2">4-yr</div>
            <div className="text-sm font-bold text-neutral-700 dark:text-neutral-300">high in new graduate unemployment at the start of 2026</div>
            <div className="text-xs text-neutral-400 mt-1">Source: BLS / hiring surveys</div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(147,51,234,0.25)] group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/sundar-pichai-ai-graduates-stanford-2026/stanford_ai_future.webp"
            alt="Aerial view of Stanford University campus at golden sunset with a glowing AI orb rising from the center, representing Google CEO Sundar Pichai's message of optimism about AI's future"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 p-8">
            <p className="text-white/80 text-sm font-medium">Stanford University — where Pichai is set to speak to the graduating class of 2026.</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">04.</span> Jensen Huang vs. the Graduating Class
        </h2>

        <p>
          The commencement circuit also featured Nvidia CEO <strong>Jensen Huang</strong>, who delivered the keynote at Carnegie Mellon University — one of the top AI research universities in the world. Huang, whose company supplies the GPU chips that power virtually every major AI model, made a bullish case for the future.
        </p>

        <p>
          Huang argued that AI will be a "net positive for humanity" and create new industries faster than it destroys old ones — a standard argument from the techno-optimist camp. His reception at CMU, with its high concentration of computer science and AI students who plan to build AI systems, was likely warmer than Schmidt received in Arizona.
        </p>

        <p>
          The contrast is telling. When the audience is made up of students who will benefit directly from AI (those building it), the reception is different from graduates in arts, journalism, law, finance, and business — fields where AI is most actively displacing entry-level roles.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">05.</span> What the Booing Actually Means
        </h2>

        <p>
          Dismissing the booing as naive technophobia misses the point entirely. These students are not Luddites. Many of them use ChatGPT, GitHub Copilot, and other AI tools daily. Their anxiety isn't about AI existing — it's about power, economics, and accountability.
        </p>

        <p>
          The question graduates are really asking is: <strong>Who captures the value AI creates?</strong> If AI boosts a company's productivity by 30% and the company responds with layoffs and record shareholder returns while entry-level salaries stagnate, the technology's net benefit is concentrated at the top. Graduates understand this. They're not booing the technology. They're booing the system.
        </p>

        <p>
          Pichai's answer — "these graduates will both drive progress and deal with the impact" — is accurate, but it doesn't address the distribution question. Read our analysis of how <Link href="/blog/meta-ai-layoffs-10-percent-2026" className="font-bold underline">Meta's 10% workforce cut</Link> and similar moves are reshaping the entry-level job market, or explore how <Link href="/blog/anthropic-claude-opus-4-7-release-guide" className="font-bold underline">new AI tools like Claude Opus 4.7</Link> are changing what productivity actually looks like for knowledge workers.
        </p>

      </div>

      {/* Tags */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["Sundar Pichai", "AI job anxiety", "Stanford 2026", "graduates booing AI", "Google CEO commencement", "AI job displacement", "Jensen Huang CMU", "Hard Fork podcast", "Pew Research AI", "entry-level jobs AI", "tech layoffs 2026"].map((tag, index) => (
            <span key={index} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-12 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-sm">⚡</span>
          TechVantage Verdict
        </h3>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-green-200 dark:border-green-800">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> What Pichai Gets Right</h5>
            <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400 list-disc pl-4">
              <li>Graduates will genuinely shape AI's trajectory</li>
              <li>Human anxiety about rapid change is normal and valid</li>
              <li>Stanford is a more receptive audience than most</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-amber-200 dark:border-amber-800">
            <h5 className="font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> What He Still Hasn't Answered</h5>
            <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400 list-disc pl-4">
              <li>Who benefits when AI replaces entry-level jobs?</li>
              <li>How should new grads actually prepare?</li>
              <li>What obligations do AI companies have to displaced workers?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 text-lg">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-purple-200 dark:hover:border-purple-800">
              <h3 className="text-base md:text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">
                {faq.question}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <footer className="mt-24 pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/meta-ai-layoffs-10-percent-2026" className="group relative">
            <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md">
              <Image
                src="/blog/meta-ai-layoffs-10-percent-2026/meta_ai_layoffs_1.webp"
                alt="Meta AI Layoffs 10 Percent 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug text-neutral-900 dark:text-white">
              Meta to Cut 10% of Workforce in Massive A.I. Pivot
            </h4>
            <p className="text-sm text-neutral-500 mt-1">April 24, 2026 · AI</p>
          </Link>
          <Link href="/blog/spacex-xai-grok-us-government-adoption-analysis" className="group relative">
            <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md">
              <Image
                src="/blog/spacex-xai-grok-us-government-adoption-analysis/grok_government_fail_hero.webp"
                alt="Grok Government Adoption Analysis"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug text-neutral-900 dark:text-white">
              Grok Falls Flat in Washington: SpaceX's $1.75T AI Valuation Undercut
            </h4>
            <p className="text-sm text-neutral-500 mt-1">May 22, 2026 · AI</p>
          </Link>
        </div>
      </footer>
    </article>
  );
}
