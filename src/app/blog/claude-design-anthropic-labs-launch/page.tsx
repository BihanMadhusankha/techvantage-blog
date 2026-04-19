import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Claude Design by Anthropic Labs: The New Era of AI Visual Collaboration",
  description: "Anthropic Labs launches Claude Design, an AI-powered visual collaboration tool. Powered by Claude Opus 4.7, it helps teams generate, refine, and deploy polished designs, prototypes, and presentations.",
  image: "/blog/claude-design-interface.webp",
});

export default function ClaudeDesignLaunchPage() {
  const faqs = [
    {
      question: "What is Claude Design by Anthropic Labs?",
      answer: "Claude Design is a newly launched product by Anthropic Labs that allows users to collaborate with Claude to create polished visual work, such as designs, interactive prototypes, slide decks, one-pagers, and marketing collateral."
    },
    {
      question: "Which model powers Claude Design?",
      answer: "Claude Design is powered by Anthropic's most capable vision model, Claude Opus 4.7. This allows it to understand complex visual instructions, map out UI structures, and generate high-fidelity prototypes."
    },
    {
      question: "Who has access to Claude Design?",
      answer: "Claude Design is currently available in research preview. It is rolling out to users with Claude Pro, Max, Team, and Enterprise subscriptions."
    },
    {
      question: "Can Claude Design learn my brand's style?",
      answer: "Yes! During onboarding, Claude Design builds a design system for your team by reading your codebase and design files. This ensures that all future generated projects automatically utilize your colors, typography, and UI components."
    },
    {
      question: "How does the handoff to developers work?",
      answer: "Once a design or prototype is ready to build, Claude packages everything into a handoff bundle. You can pass this bundle directly to Claude Code with a single instruction to kickstart implementation without manual translation."
    },
    {
      question: "Where can I export my Claude Design projects?",
      answer: "You can share designs as an internal URL within your organization, or export them to Canva, PDF, PPTX, or standalone HTML files."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Claude Design by Anthropic Labs: The New Era of AI Visual Collaboration",
    description: "Anthropic Labs launches Claude Design, an AI-powered visual collaboration tool. Powered by Claude Opus 4.7, it helps teams generate, refine, and deploy polished designs, prototypes, and presentations.",
    date: "2026-04-19",
    url: "https://techvantage.blog/blog/claude-design-anthropic-labs-launch",
    image: "https://techvantage.blog/blog/claude-design-interface.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'AI' && post.slug !== 'claude-design-anthropic-labs-launch').slice(0, 3);

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
        <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/ai" className="hover:underline">AI</Link>
          <span>•</span>
          <Link href="/category/software" className="hover:underline">Software</Link>
          <span>•</span>
          <span>April 19, 2026</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Introducing Claude Design by Anthropic Labs:{' '}
          <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">
            Visual Prototyping Supercharged by Opus 4.7
          </span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          Anthropic has unveiled its latest breakthrough — Claude Design. Built on the powerful <Link href="/blog/anthropic-claude-opus-4-7-release-guide" className="text-indigo-500 hover:underline">Claude Opus 4.7 model</Link>, this tool turns natural language into complex, brand-aligned interfaces and interactive prototypes in seconds.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
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
          src="/blog/claude-design-interface.webp"
          alt="A futuristic digital workspace interface showing an AI design tool, split screen with a chat window on the left and a beautiful sleek web dashboard being generated on the canvas on the right"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white text-sm font-mono tracking-tight cursor-default">
            [Concept Visualization] Claude Design's split-screen interactive workspace generating a sleek web dashboard live.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-indigo-600 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">

        <p className="lead text-2xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-8 border-indigo-600 pl-8 mb-16 py-4 bg-indigo-50/30 dark:bg-indigo-950/20 rounded-r-2xl shadow-sm">
          "Even experienced designers have to ration exploration—there's rarely time to prototype a dozen directions. Claude Design gives designers room to explore widely and everyone else a way to produce visual work." — <a href="https://www.anthropic.com/news/claude-design-anthropic-labs" target="_blank" rel="noopener noreferrer">Anthropic Labs Announcement</a>
        </p>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">What is Claude Design?</h2>
        <p>
          Today, Anthropic introduced <strong>Claude Design</strong>, a dedicated product from Anthropic Labs built to bridge the gap between creative ideation and polished visual execution. Positioned as a direct collaborator for designers, founders, and marketers alike, Claude Design transforms natural language prompts into high-fidelity mockups, slide decks, social graphics, and interactive prototypes.
        </p>
        <p>
          The launch signifies Anthropic's boldest move into visual generation yet. For those tracking the AI wars in 2026, where models like <Link href="/blog/claude-4-6-vs-gemini-3-1-comparison" className="text-indigo-500 hover:underline">Gemini 3.1 Pro</Link> have pushed the boundaries, Anthropic is leveraging its latest powerhouse model, <strong>Claude Opus 4.7</strong>, to drive the intricate reasoning required for functional UI generation.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-12 not-prose">
          <div className="p-6 rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-3 text-neutral-900 dark:text-white">🚀 Instant Prototyping</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Turn static mockups into easily-shareable interactive prototypes to gather feedback immediately without requiring PRs or early code implementations.</p>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="font-bold text-xl mb-3 text-neutral-900 dark:text-white">📊 Decks & Marketing</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">Generate complete, on-brand pitch decks in minutes. Export straight to PPTX or send directly to Canva for fine-tuning.</p>
          </div>
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">How Teams Work With Claude Design</h2>
        <p>
          Claude Design replaces the traditional "blank canvas" anxiety with an iterative conversational flow. Rather than shifting pixels around layer by layer, users engage directly with Claude. 
        </p>
        <p>
          Users start by describing their vision, or by uploading existing documents (DOCX, PPTX, XLSX). You can even use a built-in web capture tool to sample elements from your live website, ensuring new designs match the real-world aesthetic seamlessly. From there, you can utilize fine-grained adjustment knobs — altering spacing, fixing margins, or tweaking the layout live. Alternatively, just comment inline with feedback like, "make this hero section bolder."
        </p>

        {/* Image 2: Collaboration */}
        <div className="relative aspect-video w-full my-16 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
          <Image
            src="/blog/claude-design-collaboration.webp"
            alt="A futuristic corporate team of creative professionals collaborating around a glowing interactive table display generating web layouts using AI"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">The Core Value: Built-In Brand Systems & Code Handoff</h2>
        <p>
          Two features make Claude Design genuinely transformative for enterprise and startup teams in 2026:
        </p>
        <ul>
          <li><strong>Zero-Setup Design Systems:</strong> During onboarding, Claude reads your existing codebase and design files. It reverse-engineers your brand identity, colors, typography, and component libraries. Once set up, every generated interface strictly adheres to these rules, ensuring unparalleled consistency.</li>
          <li><strong>Direct Handoff to Claude Code:</strong> Design is just the beginning. When your prototype is finalized, Claude Design exports a single "handoff bundle." You pass this to <Link href="/blog/anthropic-claude-code-source-leak-2026" className="text-indigo-500 hover:underline">Claude Code</Link> directly. Implementation begins immediately — with minimal translation loss from design to deployment.</li>
        </ul>

        {/* Image 3: Design System */}
        <div className="relative w-full aspect-[21/9] my-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl ring-2 ring-indigo-500/50">
          <Image
            src="/blog/claude-design-system.webp"
            alt="A sleek abstract representation of an AI design system, visualizing floating UI components, color palettes, typography, and code blocks merging together seamlessly"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <h2 className="text-4xl mt-20 mb-10 text-neutral-900 dark:text-neutral-50">Availability & Onboarding</h2>
        <p>
          Claude Design is powered by Opus 4.7, which excels in deep reasoning and rich multimodal logic. As of today, the tool is rolling out gradually via an invite/research preview specifically for users on the <strong>Claude Pro, Max, Team, and Enterprise</strong> tiers.
        </p>
        <p>
          Collaboration tools have evolved immensely, but by fusing the creative phase (Claude Design) with the engineering implementation phase (Claude Code), Anthropic is creating a frictionless ecosystem for modern software delivery. As they add more integrations in the coming weeks, the workflow for building digital products will likely never look the same again.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-10 md:p-16 border rounded-[3rem] bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 shadow-lg">
        <h2 className="mt-0 text-3xl font-extrabold tracking-tight mb-12 text-neutral-900 dark:text-white">FAQ: Claude Design</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-all hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 group">
              <h4 className="text-xl font-bold mb-4 flex gap-4 transition-colors">
                <span className="text-neutral-300 dark:text-neutral-700 font-mono shrink-0">0{i + 1}.</span>
                <span className="text-neutral-800 dark:text-neutral-200 group-hover:text-indigo-600">{faq.question}</span>
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium pl-10">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-20 pt-16 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-50 uppercase tracking-wider">Related AI News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={post.image.startsWith('/') ? post.image : `${post.image.split('?')[0]}?auto=format&fit=crop&q=65&w=600`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">{post.category}</span>
                  <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-4 flex-grow">{post.description}</p>
                  <div className="text-xs text-neutral-500 font-medium">
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
