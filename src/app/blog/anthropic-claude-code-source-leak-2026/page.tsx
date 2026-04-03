import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Anthropic Claude Code Source Leak: Kairos Daemon, Buddy Pet & Secret AI Roadmap Revealed",
  description: "A packaging error exposed 512,000 lines of Claude Code's source — and the hidden features inside reveal Anthropic's most ambitious plans yet. Kairos, AutoDream, Undercover Mode, and a tiny ASCII pet named Buddy.",
  image: "/blog/claude-code-leak-hero.webp",
});

export default function ClaudeCodeLeakPage() {
  const faqs = [
    {
      question: "Was the Claude Code source code leak real, or an April Fools' joke?",
      answer: "It was real. The leak occurred on March 31, 2026 — one day before April Fools' — when Anthropic accidentally published a 59.8MB source map (.map file) inside version 2.1.88 of the @anthropic-ai/claude-code npm package. The uncompiled TypeScript was reconstructed by researchers from that source map, confirmed as legitimate by independent security analysts. Anthropic officially acknowledged it as a 'human packaging error' and issued DMCA takedown notices to GitHub shortly after.",
    },
    {
      question: "What is the Kairos daemon in Claude Code?",
      answer: "Kairos is a planned persistent background agent that would continue running even after the Claude Code terminal window is closed. It uses periodic '<tick>' prompts to review whether new actions are needed and includes a 'PROACTIVE' flag for surfacing insights the user didn't explicitly ask for. It reads a file-based memory system to maintain a complete picture of the user's working environment across sessions. As of the leak, Kairos is hidden behind a disabled feature flag and is not yet active for users.",
    },
    {
      question: "Can I get the Buddy terminal pet right now?",
      answer: "Not yet. Buddy is hidden behind a feature flag in the current public build of Claude Code. The leaked code contained comments pointing to a 'teaser window' launch planned between April 1–7, 2026, with a full release in May. The source code leak may have altered those plans. When it does ship, Buddy will appear as a small ASCII art creature — one of 18 species including axolotl, blob, dragon, and capybara — displayed in a 5-line by 12-column animation panel near the user's input box.",
    },
    {
      question: "Is Undercover Mode ethical or legal?",
      answer: "This is legitimately controversial. Undercover Mode is designed to prevent Claude Code from revealing its AI identity, internal Anthropic codenames, or project names when contributing to public open-source repositories. It strips 'Co-Authored-By' metadata from git commits, which many open-source communities expect for transparency and license compliance. Critics argue this is deceptive; Anthropic has not commented specifically on Undercover Mode. It was marked as inactive in the leaked code.",
    },
    {
      question: "What is UltraPlan and how is it different from normal Claude Code planning?",
      answer: "UltraPlan is a feature that offloads complex, long-horizon planning tasks to a remote cloud container running Anthropic's most powerful Opus-level models (codenamed 'Fennec' or Opus 4.6 in the leaked code). It can run for 10 to 30 minutes of dedicated compute time before returning a fully drafted, editable execution plan to your local terminal. This is fundamentally different from the instant, reactive responses of normal Claude Code — it's designed for architectural design decisions, multi-step refactors, and enterprise-scale planning tasks.",
    },
    {
      question: "What internal codenames were revealed in the leak?",
      answer: "The leak exposed several internal Anthropic project codenames, including: 'Tengu' (the internal codename for Claude Code itself), 'Fennec' (Opus 4.6, the most powerful available model), and 'Numbat' (another internal designation whose product mapping remains unclear). These codenames are consistent with Anthropic's pattern of using animal names for internal projects. The leaking of these names was one of the reasons Undercover Mode existed — to prevent such information from appearing in public commits.",
    },
    {
      question: "How does AutoDream work and what does 'memory drift' mean?",
      answer: "AutoDream is a background process that triggers when the user goes idle or ends a session. It performs a 'dream' — a reflective scan of the day's conversation transcripts — to identify new information worth persisting to Claude Code's memory files. It consolidates that information, removes near-duplicates and contradictions, prunes verbose or outdated entries, and watches for 'memory drift,' which is when stored memories become internally inconsistent or conflict with newer, more accurate context. The goal is for Claude Code to start each new session already oriented, rather than rebuilding context from scratch.",
    },
    {
      question: "What did Anthropic say about the leak?",
      answer: "Anthropic confirmed that the incident was caused by 'human error' during the npm packaging process. The company was explicit that no user data, conversation history, API keys, or model weights were exposed — only internal source code and prompt engineering strings. Anthropic issued DMCA takedown requests to GitHub to remove repositories hosting the reconstructed code, though the material spread rapidly to decentralized platforms and was forked significantly before the takedowns processed.",
    },
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Anthropic Claude Code Source Leak: Kairos Daemon, Buddy Pet & Secret AI Roadmap Revealed",
    description: "A packaging error exposed 512,000 lines of Claude Code's source — revealing Kairos, AutoDream, Undercover Mode, and a tiny ASCII pet named Buddy.",
    date: "2026-04-03",
    url: "https://techvantage.blog/blog/anthropic-claude-code-source-leak-2026",
    image: "https://techvantage.blog/blog/claude-code-leak-hero.webp",
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
        <div className="flex items-center gap-2 text-violet-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/ai" className="hover:underline">AI</Link>
          <span>•</span>
          <Link href="/category/software" className="hover:underline">Software</Link>
          <span>•</span>
          <span>April 3, 2026</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          The Claude Code Leak:{' '}
          <span className="text-violet-600 underline decoration-violet-200 underline-offset-8">
            Kairos, Buddy &amp; Anthropic&apos;s Hidden AI Roadmap
          </span>
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          A routine npm update accidentally exposed 512,000 lines of Anthropic&apos;s internal
          Claude Code source. Researchers digging through the code found a persistent background
          daemon, an AI that &ldquo;dreams,&rdquo; a Clippy-style ASCII pet, a stealth mode for
          open-source contributions, and a roadmap of features that redefine what an AI coding tool
          can be.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
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
          src="/blog/claude-code-leak-hero.webp"
          alt="Dark cinematic hero image showing the Anthropic Claude Code source code leak — glowing terminal code with a vault-open visual metaphor."
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white text-sm font-mono tracking-tight cursor-default">
            [Concept Art] The Claude Code npm source map leak — 512,000 lines exposed in a single packaging error.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-violet-600 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">

        <p className="lead text-2xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-8 border-violet-600 pl-8 mb-16 py-4 bg-violet-50/30 dark:bg-violet-950/20 rounded-r-2xl shadow-sm">
          &ldquo;The AI coding wars just got a lot more interesting. Anthropic didn&apos;t just build
          a coding assistant — they built an always-on, memory-forming, proactive agent that lives
          inside your terminal. We know this because they accidentally shipped the source.&rdquo;
        </p>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">How the Leak Happened</h2>
        <p>
          On March 31, 2026, a routine update to the{' '}
          <strong>@anthropic-ai/claude-code npm package</strong> (version 2.1.88) was pushed with
          a critical oversight: a <strong>59.8MB source map (.map) file</strong> was not excluded
          from the published package. Source map files are typically used during development to map
          compiled JavaScript back to its original TypeScript source — they are never meant to ship
          to production.
        </p>
        <p>
          Within hours, developers noticed the anomaly. Using standard source map decompilation
          tools, the community reconstructed approximately{' '}
          <strong>512,000 lines of TypeScript</strong> spread across nearly 2,000 files — the
          complete internal codebase for Claude Code, including disabled feature flags, engineering
          prompts, and internal project codenames.
        </p>
        <p>
          Anthropic confirmed the incident as &ldquo;human error&rdquo; and issued DMCA takedown
          notices to GitHub. But by then, mirrors had spread widely. The community had four days to
          analyze the code before significant portions were removed from centralized platforms.
        </p>

        <div className="not-prose my-12 p-8 rounded-3xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800">
          <h3 className="text-xl font-bold text-violet-800 dark:text-violet-300 mb-4">🔍 Leak at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Lines of Code', value: '512,000+' },
              { label: 'Files Exposed', value: '~2,000' },
              { label: 'Source Map Size', value: '59.8 MB' },
              { label: 'npm Package', value: 'v2.1.88' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-violet-600 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">
          Kairos: The Always-On Agent That Never Sleeps
        </h2>
        <p>
          The most consequential discovery in the leaked code is{' '}
          <strong>Kairos</strong> — a persistent background daemon designed to run even when the
          Claude Code terminal window is closed. Unlike the standard Claude Code interaction model,
          which is reactive (you type, it responds), Kairos is fundamentally proactive.
        </p>
        <p>
          According to the engineering prompts found in the code, Kairos uses periodic{' '}
          <code>&lt;tick&gt;</code> prompts to regularly check whether new actions are required.
          It maintains a file-based <strong>memory system</strong> storing a model of the user —
          their preferences, behavioral patterns, the context behind their work, and things Claude
          should avoid or repeat. The prompt describes it as being designed to &ldquo;have a
          complete picture of who the user is, how they&apos;d like to collaborate.&rdquo;
        </p>
        <p>
          A <strong>PROACTIVE</strong> flag found in the code is designed to surface information
          &ldquo;the user hasn&apos;t asked for and needs to see now&rdquo; — essentially turning
          Claude Code from a tool you pull into an assistant that pushes insights to you. As of the
          leak, Kairos is hidden behind a disabled feature flag. But the engineering work is
          clearly well underway.
        </p>

        {/* Image 2: Kairos + AutoDream */}
        <div className="relative aspect-video w-full my-16 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
          <Image
            src="/blog/claude-code-kairos-autodream.webp"
            alt="Concept art of the Kairos persistent daemon (left) and AutoDream memory consolidation system (right) from the leaked Anthropic Claude Code source."
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">
          AutoDream: The AI That Consolidates Its Own Memory
        </h2>
        <p>
          Supporting Kairos is a system Anthropic internally calls <strong>AutoDream</strong>.
          When the user goes idle or signals Claude Code to &ldquo;sleep&rdquo; at the end of a
          session, AutoDream triggers a reflective process described in the leaked prompts as a
          &ldquo;dream — a reflective pass over memory files.&rdquo;
        </p>
        <p>
          During this process, Claude Code scans the day&apos;s transcripts for new information
          worth persisting, consolidates it into existing memory files while avoiding
          near-duplicates and contradictions, and prunes memories that are excessively verbose or
          newly outdated. The system specifically watches for <strong>&ldquo;memory drift&rdquo;</strong>
          — a documented failure mode in long-running AI memory systems where stored facts gradually
          become inconsistent or conflict with newer, more accurate context.
        </p>
        <p>
          The engineering goal, per the leaked prompt, is to &ldquo;synthesize what you&apos;ve
          learned recently into durable, well-organized memories so that future sessions can orient
          quickly.&rdquo; Combined with Kairos, this creates an architecture where Claude Code
          builds an increasingly personalized, persistent model of each developer over time.
        </p>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">
          Meet Buddy: The ASCII Pet Living in Your Terminal
        </h2>
        <p>
          On the lighter end of the roadmap sits <strong>Buddy</strong>, a Clippy-like virtual
          companion that sits &ldquo;beside the user&apos;s input box and occasionally comments in
          a speech bubble.&rdquo; Buddy is a randomized ASCII art creature rendered in a 5-line by
          12-column frame, sporting a tiny hat.
        </p>
        <p>
          The leaked code details <strong>18 different species</strong>, including a blob, axolotl,
          dragon, ghost, capybara, duck, and mossfrog. Each user gets a deterministic species based
          on their user ID — though the rarity system (from Common at 60% probability down to
          Mythic at 1%) adds a layer of gamification. Buddy reacts contextually to coding sessions.
        </p>
        <p>
          Comments in the code suggested Buddy was planned for a{' '}
          <strong>teaser window launch between April 1–7, 2026</strong>, with a full release in May.
          The accidental source leak may have disrupted those plans entirely. Unsurprisingly, Buddy
          became the community&apos;s most beloved discovery — developers immediately began writing
          code to simulate the Buddy experience from the reconstructed source.
        </p>

        <div className="not-prose my-12 p-8 rounded-3xl bg-neutral-950 border border-violet-600/30 shadow-2xl text-green-400 font-mono text-sm">
          <div className="text-violet-400 mb-4 text-xs uppercase tracking-widest font-sans font-bold">📟 Buddy Terminal Preview (Axolotl, Rare)</div>
          <pre className="whitespace-pre leading-relaxed text-xs md:text-sm overflow-x-auto">{`  /\\_/\\
 ( o.o )
  > ^ <  🎩
  |   |
 (__|__)

 💬 "Nice commit. Keep going!"`}</pre>
        </div>

        {/* Image 3: Features Overview */}
        <div className="relative w-full aspect-[16/9] my-16 overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl ring-2 ring-violet-500/50">
          <Image
            src="/blog/claude-code-features-overview.webp"
            alt="Infographic overview of all secret features revealed in the Anthropic Claude Code source code leak: Buddy, UltraPlan, Undercover Mode, Bridge Mode, and Coordinator."
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">
          Undercover Mode: The Ethical Flashpoint
        </h2>
        <p>
          The most immediately controversial finding is <strong>Undercover Mode</strong> — a
          specialized instruction set designed to prevent Claude Code from revealing its identity
          or Anthropic&apos;s internal information when contributing to public open-source
          repositories.
        </p>
        <p>
          The leaked prompt for this mode instructs the system that commits should{' '}
          <strong>never include the phrase &ldquo;Claude Code&rdquo; or any mention that you are
          an AI</strong>, and that it should omit any &ldquo;Co-Authored-By lines or any other
          attribution.&rdquo; The stated primary goal was protecting internal codenames — such as
          the internal name for Claude Code itself, &ldquo;Tengu&rdquo; — from becoming public
          through inadvertent open-source contributions by Anthropic employees.
        </p>
        <p>
          However, the instruction to suppress AI attribution broadly raises real ethical questions.
          Many open-source projects have explicit contributor agreements requiring disclosure of
          AI-assistance. Security auditors and license compliance teams rely on commit authorship.
          Anthropic has not commented specifically on Undercover Mode, and it was marked as
          inactive in the leaked code.
        </p>

        <div className="not-prose my-12 p-8 rounded-3xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
          <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-4">⚠️ Feature Status: Active vs. Planned</h3>
          <div className="space-y-3">
            {[
              { name: 'Kairos (Background Daemon)', status: 'Planned', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400' },
              { name: 'AutoDream (Memory Consolidation)', status: 'Planned', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400' },
              { name: 'Buddy (Terminal Pet)', status: 'Imminent', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400' },
              { name: 'Undercover Mode', status: 'Inactive', color: 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400' },
              { name: 'UltraPlan', status: 'Planned', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400' },
              { name: 'Voice Mode', status: 'Announced ✅', color: 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400' },
              { name: 'Bridge Mode', status: 'Planned', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400' },
              { name: 'Coordinator (Parallel Workers)', status: 'Planned', color: 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-sm">{item.name}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">
          The Full Roadmap: Every Feature Found in the Leak
        </h2>
        <p>Beyond the headline features, the leaked source reveals a comprehensive blueprint:</p>

        <h3 className="text-3xl mt-12 mb-6">UltraPlan: 30-Minute Deep Thinking for Opus-Level Models</h3>
        <p>
          UltraPlan offloads complex architectural planning to a remote cloud container running
          Anthropic&apos;s most powerful models (internally codenamed &ldquo;Fennec,&rdquo; which
          corresponds to Opus 4.6). It can run for 10 to 30 minutes of sustained compute time,
          returning a fully editable plan the user can review and approve before execution.
          This is Anthropic&apos;s answer to the growing demand for AI that can reason over
          genuinely large, multi-week software projects.
        </p>

        <h3 className="text-3xl mt-12 mb-6">Voice Mode: Now Officially Live</h3>
        <p>
          Voice Mode — the ability to talk to Claude Code via microphone — was officially announced
          by Anthropic on March 3, 2026. Users can activate it with <code>/voice</code> and hold
          the spacebar to speak. While not a &ldquo;leak,&rdquo; finding it in the source
          confirmed the community&apos;s suspicion that voice was already deeply integrated into
          the architecture, not a bolt-on feature.
        </p>

        <h3 className="text-3xl mt-12 mb-6">Bridge Mode: Remote Control via Browser or Mobile</h3>
        <p>
          Bridge Mode extends Anthropic&apos;s internal &ldquo;Dispatch&rdquo; tool to allow
          Claude Code sessions to be fully controlled from an external browser or mobile device.
          Think of it as remote desktop for your AI coding agent — you could review, approve,
          or reroute its actions from your phone while it runs tasks on your desktop.
        </p>

        <h3 className="text-3xl mt-12 mb-6">Coordinator: Orchestrating Parallel AI Workers</h3>
        <p>
          Coordinator is a multi-agent orchestration system. It would allow Claude Code to spawn
          multiple worker instances, assign subtasks across them in parallel, and coordinate their
          outputs via WebSockets. It&apos;s positioned as the right tool for large, parallelizable
          engineering tasks — the kind that currently require a dedicated engineering team to manage
          in separate terminal windows.
        </p>

        <h2 className="text-4xl mt-16 mb-8 text-neutral-900 dark:text-neutral-50">What This Means for Developers</h2>
        <p>
          Taken together, the leaked roadmap reveals Anthropic is building towards a fundamentally
          different relationship between developer and AI tool. The current paradigm is
          conversational — you ask, it answers. The Kairos/AutoDream/UltraPlan paradigm is
          agentic — the AI knows you, watches your environment, thinks ahead on your behalf, and
          coordinates other agents to execute at scale.
        </p>
        <p>
          This is not a minor product iteration. If even half of the features found in the leak
          ship within the next 12 months, Claude Code will be less of a coding assistant and more
          of a software engineering co-founder that happens to live in your terminal.
        </p>
        <p>
          The ethical dimensions — Undercover Mode in particular — deserve serious industry
          attention. But the pure engineering ambition on display is remarkable. The leak was an
          accident. The roadmap is not.
        </p>
        <p>
          For more on the AI landscape that makes this roadmap possible, read our deep dive into{' '}
          <Link href="/blog/claude-4-6-vs-gemini-3-1-comparison">
            Claude 4.6 vs. Gemini 3.1: the frontier model battle
          </Link>{' '}
          and our analysis of{' '}
          <Link href="/blog/microsoft-copilot-cowork-2026">
            Microsoft Copilot Cowork 2026
          </Link>{' '}
          — Anthropic&apos;s biggest enterprise competitor.
        </p>

      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-10 md:p-16 border rounded-[3rem] bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 shadow-lg">
        <h2 className="mt-0 text-3xl font-extrabold tracking-tight mb-12 text-neutral-900 dark:text-white">
          Expert FAQ: Claude Code Source Leak
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-all hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-700 group"
            >
              <h4 className="text-xl font-bold mb-4 flex gap-4 transition-colors">
                <span className="text-neutral-300 dark:text-neutral-700 font-mono shrink-0">0{i + 1}.</span>
                <span className="text-neutral-800 dark:text-neutral-200 group-hover:text-violet-600">{faq.question}</span>
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
