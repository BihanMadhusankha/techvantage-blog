import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "Why Quantum Computing May Be the White House's Next AI — Trump's $1.3T Bet Explained",
  description: "President Trump signed Executive Order 14413 on June 22, 2026, directing a whole-of-government quantum computing push. A full fact-checked breakdown of what quantum computers actually do, why China holds 60% of global patents, what IBM's roadmap says about 2029, and whether this is real science or the next AI hype cycle.",
  image: "/blog/quantum-computing-white-house-trump-2026/quantum_hero.webp",
});

export default function QuantumWhiteHouseTrumpPage() {
  const faqs = [
    {
      question: "What did Trump's Executive Order 14413 on quantum computing actually do?",
      answer: "Signed on June 22, 2026, EO 14413 — 'Ushering in the Next Frontier of Quantum Innovation' — directed a whole-of-government push to accelerate U.S. leadership in quantum information science. Key actions include: establishing the QC-ADDS program to build a quantum computer at a Department of Energy national lab, creating National Quantum Workforce Development Institutes, securing domestic supply chains, and reconstituting the National Quantum Initiative Advisory Committee. A companion order (EO 14412) set hard federal deadlines for agencies to adopt post-quantum cryptography by 2030–2031."
    },
    {
      question: "What is a qubit and how is it different from a regular bit?",
      answer: "A classical computing bit is a binary switch — either a 0 or a 1. A qubit (quantum bit) can exist as 0, 1, or any combination of both simultaneously — a property called superposition. Add entanglement (where the state of one qubit instantly determines the state of others) and interference (where wrong answer probabilities cancel out while right answer probabilities amplify), and you have a machine that solves certain problems fundamentally differently than any classical computer."
    },
    {
      question: "Will quantum computers break Bitcoin and crypto?",
      answer: "Eventually, yes — but not imminently. A sufficiently powerful, fault-tolerant quantum computer could break the elliptic curve cryptography that secures Bitcoin and most internet encryption using Shor's algorithm. However, current quantum processors are nowhere near the millions of error-corrected qubits needed to do this. IBM's roadmap targets 200 logical qubits by 2029 and 2,000 by 2033 — still many orders of magnitude short of what would be required to break Bitcoin. The companion Executive Order 14412 set federal deadlines for agencies to transition to post-quantum cryptography by 2030–2031 precisely to prepare for this future threat."
    },
    {
      question: "Does China really hold 60% of global quantum computing patents?",
      answer: "Yes — verified by the MIT Quantum Index Report 2025 and multiple patent office analyses. China accounts for approximately 60% of global quantum technology patent applications. However, experts note that U.S. patents tend to have higher 'impact' scores, with more citations in subsequent research, meaning the U.S. leads in influential quantum IP despite China's volume lead. The U.S.-China Security Review Commission has documented that much of China's patent activity is driven by state-affiliated research institutes."
    },
    {
      question: "What is IBM's quantum computing roadmap for 2029 and 2033?",
      answer: "IBM's public quantum roadmap targets two major milestones: the 'Starling' processor by 2029, featuring approximately 200 logical (error-corrected) qubits capable of 100 million quantum gate operations; and the 'Blue Jay' system by 2033, aiming for 2,000 logical qubits capable of executing 1 billion gates. IBM also announced in June 2026 a commitment to invest more than $10 billion in quantum computing over the next five years. These timelines confirm quantum computing is a decade-long project, not an imminent commercial revolution."
    },
    {
      question: "What are the most realistic near-term quantum computing applications?",
      answer: "The most credible near-term applications are in science and highly technical industries, not consumer products. These include: drug discovery and materials science (simulating molecular behavior with exponentially more accuracy than classical computers), financial optimization (portfolio optimization, risk modeling), logistics and supply chain planning, and quantum sensing for navigation and medical imaging. The MIT 2025 Quantum Index confirms business executives are becoming 'quantum curious,' particularly after watching AI adoption teach them not to dismiss emerging technologies."
    },
    {
      question: "How much has venture capital invested in quantum computing?",
      answer: "According to the MIT Quantum Index Report 2025, quantum computing VC hit $1.6 billion in 2024 in publicly announced investments. By 2025, total global VC investment reached approximately $3.9 billion — the highest annual total ever recorded, per PitchBook data. The U.S. government has also channeled approximately $2 billion from the CHIPS and Science Act into quantum hardware developers, including direct equity stakes. IBM separately committed $10 billion over five years in June 2026."
    },
    {
      question: "Is quantum computing just the next AI hype cycle?",
      answer: "It's both real and overhyped — similar to AI in 2020–2022. The underlying science is legitimate: quantum supremacy has been demonstrated in narrow benchmarks by both Google and IBM. But the gap between benchmarks and commercial applications remains enormous. Current processors require cooling to near absolute zero (-459°F), suffer from high error rates, and lack the qubit stability for sustained computation. Engineering challenges like error correction, qubit coherence, and scaling remain unsolved. Experts estimate truly transformative fault-tolerant quantum computing is still 10–20 years away for most applications."
    },
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Why Quantum Computing May Be the White House's Next AI — Trump's $1.3T Bet Explained",
    description: "President Trump's Executive Order 14413 bets the U.S. future on quantum computing. A full fact-checked analysis of qubits vs. bits, China's 60% patent lead, IBM's 2029 roadmap, the Bitcoin threat, and whether this is real science or the next AI hype bubble.",
    date: "2026-07-01",
    url: "https://www.techvantage.blog/blog/quantum-computing-white-house-trump-2026",
    image: "https://www.techvantage.blog/blog/quantum-computing-white-house-trump-2026/quantum_hero.webp",
    author: "Bihan Madhusankha",
  });

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
        <div className="flex flex-wrap items-center gap-3 text-violet-600 dark:text-violet-400 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/ai" className="hover:underline bg-violet-50 dark:bg-violet-900/30 px-3 py-1 rounded-full">AI &amp; Computing</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">July 1, 2026</span>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500 font-normal">11 min read</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">Quantum Computing</span> May Be the White House's Next AI
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          Trump just signed an executive order betting America's tech future on quantum computing. Here's a full fact-checked guide to what qubits actually are, why China holds 60% of global patents, when IBM says this gets real — and whether Washington is backing a revolution or chasing the next hype cycle.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Senior AI &amp; Tech Analyst · TechVantage</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/quantum-computing-white-house-trump-2026/quantum_hero.webp"
          alt="The White House at twilight with a massive glowing quantum computer hovering above it — luminescent qubits in superposition connected by entanglement beams against an electric violet sky"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            FACT-CHECKED ANALYSIS
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Trump's EO 14413 directs a whole-of-government quantum push. We separated the real science from the political theater.
          </p>
        </div>
      </div>

      {/* Advertisement Banner */}
      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-violet-600 dark:prose-a:text-violet-400 hover:prose-a:text-violet-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        {/* Lead */}
        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-violet-600 pl-8 mb-12 py-2">
          One week ago, President Trump signed an executive order that could reshape the U.S. technology landscape for the next twenty years — or fund the most expensive science fair in history. Possibly both.
        </p>

        <p>
          On June 22, 2026, the White House published{' '}
          <a href="https://www.whitehouse.gov/presidential-actions/2026/06/ushering-in-the-next-frontier-of-quantum-innovation/" target="_blank" rel="noopener noreferrer" className="font-bold underline">Executive Order 14413: "Ushering in the Next Frontier of Quantum Innovation."</a>{' '}
          The order mandates a sweeping whole-of-government strategy to fund quantum research, secure its supply chains, build its workforce, and prevent China from gaining a decisive lead. A companion order,{' '}
          <a href="https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/" target="_blank" rel="noopener noreferrer" className="font-bold underline">EO 14412</a>,
          set hard federal deadlines for agencies to adopt post-quantum cryptography — the kind that could survive an attack from a future quantum computer — by 2030 and 2031.
        </p>

        <p>
          The timing is not a coincidence. As the vibe shifts on AI — with models becoming more expensive to train and returns harder to demonstrate — investors and politicians are searching for the next transformative narrative to rally behind. Quantum computing, with its theoretical promise of solving problems that would take classical computers <em>millennia</em>, fits that brief almost perfectly.
        </p>

        <p>
          The question is: how much of this is grounded in real science, and how much is Washington chasing the next hype cycle?
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-violet-500">01.</span> What Is a Quantum Computer, Actually?
        </h2>

        <p>
          Your laptop processes information in <strong>bits</strong> — tiny binary switches that register data as either a <code>0</code> or a <code>1</code>. Quantum computers swap those for <strong>qubits</strong>, which can exist as 0, 1, or — here's the mind-bending part — a combination of both at the same time. This is called <strong>superposition</strong>.
        </p>

        <p>
          Think of it the way{' '}
          <a href="https://www.ibm.com/topics/quantum-computing" target="_blank" rel="noopener noreferrer" className="font-bold underline">IBM explains it</a>:
          solving a maze. A classical computer tries every path until it finds the exit — brute force. A quantum computer uses the <strong>interference patterns</strong> of qubits — the way their probability waves cancel out wrong answers and amplify right ones — to zero in on solutions without trying every option.
        </p>

        <p>
          Add <strong>entanglement</strong> — where qubits become so correlated that measuring one instantly tells you the state of others, regardless of distance — and you have a machine that approaches certain categories of problems in a fundamentally different way than anything humanity has previously built.
        </p>

        {/* Qubit explainer cards */}
        <div className="not-prose my-10 grid md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-violet-200 dark:border-violet-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🔀</div>
            <h4 className="font-black text-lg text-neutral-900 dark:text-white mb-2">Superposition</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">A qubit can be 0, 1, or both simultaneously — exponentially expanding the problem space a computer can explore at once.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🔗</div>
            <h4 className="font-black text-lg text-neutral-900 dark:text-white mb-2">Entanglement</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Linked qubits share information instantaneously. Measuring one instantly defines the others — a resource classical computing simply cannot replicate.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-indigo-200 dark:border-indigo-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-3xl mb-3">🌊</div>
            <h4 className="font-black text-lg text-neutral-900 dark:text-white mb-2">Interference</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Quantum algorithms use wave-like interference to cancel out wrong answers and amplify correct ones — the key to quantum speedup.</p>
          </div>
        </div>

        {/* Image 2 — qubit vs classical */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900 not-prose">
          <Image
            src="/blog/quantum-computing-white-house-trump-2026/quantum_vs_classical.webp"
            alt="Split editorial illustration contrasting classical bits (0s and 1s on a silicon chip) with a glowing qubit sphere in quantum superposition surrounded by entanglement patterns"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            Classical Bits vs. Quantum Qubits
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">02.</span> Fact Check: Every Major Claim in This Story
        </h2>

        <p>
          The source article is largely accurate — but a full fact-check surfaces important nuances and additional context that changes the picture:
        </p>

        {/* Fact-check cards */}
        <div className="not-prose my-10 space-y-4">

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg shrink-0">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">Trump signed EO 14413 directing a whole-of-government quantum push</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Confirmed via the{' '}
              <a href="https://www.whitehouse.gov/presidential-actions/2026/06/ushering-in-the-next-frontier-of-quantum-innovation/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">White House official publication</a>.
              The order was signed June 22, 2026. A companion{' '}
              <a href="https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">EO 14412 on post-quantum cryptography</a>{' '}
              was signed the same day, with federal agency compliance deadlines of Dec. 31, 2030 (key establishment) and Dec. 31, 2031 (digital signatures).
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg shrink-0">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">MIT: Quantum patents grew fivefold over the last decade; VC hit $1.6B in 2024</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Confirmed via the{' '}
              <a href="https://quantumindex.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">MIT Quantum Index 2025</a>.
              Additional context: by 2025, total global quantum VC reached approximately <strong>$3.9 billion</strong> — the highest annual total ever, per PitchBook. The $1.6B figure specifically covers 2024 publicly announced investments, a subset of the broader total.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg shrink-0">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">China holds approximately 60% of global quantum technology patents</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Confirmed via MIT Quantum Index 2025 and corroborated by{' '}
              <a href="https://www.uscc.gov/research/chinas-advances-quantum-information-science" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">U.S.-China Economic and Security Review Commission reporting</a>.
              Important nuance: while China leads in patent <em>volume</em>, U.S. patents rank higher in citation impact and commercial influence. Much of China's patent activity originates from state-affiliated universities under government incentive programs.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg shrink-0">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">IBM targets 200 logical qubits by 2029 ("Starling") and 2,000 by 2033 ("Blue Jay")</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Confirmed via{' '}
              <a href="https://www.ibm.com/quantum/roadmap" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">IBM's official Quantum Roadmap</a>.
              Critical context: these are <em>logical</em> (error-corrected) qubits — far more demanding to produce than physical qubits. IBM's Starling system targets 100 million gate operations; Blue Jay targets 1 billion. IBM also announced a <strong>$10+ billion investment</strong> in quantum over the next five years in June 2026.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-yellow-600 font-black text-lg shrink-0">◐ CONTEXT ADDED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">The "$1.3 trillion industry by 2035" figure needs important clarification</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The $1.3 trillion figure — frequently cited by IBM and in industry analyses — represents the estimated <strong>total economic impact</strong> quantum computing could unlock across industries (drug discovery, finance, logistics), per{' '}
              <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/quantum-technology-sees-record-investments-progress-on-talent-gap" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">McKinsey's quantum research</a>.
              It is <em>not</em> a direct quantum hardware/software revenue projection. Direct market revenue forecasts range from $10B–$50B by 2035. This distinction matters enormously for investor expectations.
            </p>
          </div>

          <div className="p-6 rounded-2xl border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <div className="flex items-start gap-3 mb-2">
              <span className="text-green-600 font-black text-lg shrink-0">✓ VERIFIED</span>
              <h4 className="font-bold text-neutral-800 dark:text-neutral-200">Demand for quantum skills has nearly tripled since 2018</h4>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Confirmed via{' '}
              <a href="https://quantumindex.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 underline font-semibold">MIT Quantum Index 2025</a>.
              The talent gap is severe: per World Economic Forum analysis, there is currently only one qualified quantum candidate for every three open quantum roles. This workforce bottleneck is precisely why EO 14413 specifically mandates National Quantum Workforce Development Institutes.
            </p>
          </div>

        </div>

        {/* Stats grid */}
        <div className="not-prose my-12 grid md:grid-cols-4 gap-5">
          {[
            { val: "EO 14413", sub: "Signed June 22, 2026 — 'Ushering in the Next Frontier'", color: "violet" },
            { val: "60%", sub: "of global quantum patents held by China (MIT, 2025)", color: "red" },
            { val: "$3.9B", sub: "global quantum VC investment in 2025 — record high", color: "blue" },
            { val: "2029", sub: "IBM's target for 200 logical qubits ('Starling' processor)", color: "amber" },
          ].map((s, i) => (
            <div key={i} className={`p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-${s.color}-200 dark:border-${s.color}-800 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              <div className={`text-3xl font-black text-${s.color}-600 dark:text-${s.color}-400 mb-2`}>{s.val}</div>
              <div className="text-xs font-bold text-neutral-600 dark:text-neutral-400 leading-snug">{s.sub}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-violet-500">03.</span> What Can a Quantum Computer Actually Do Right Now?
        </h2>

        <p>
          This is where the hype meets the hardware — and where the gap is widest. Current quantum processors from Google, IBM, and startups like IonQ are real, operational machines. But what they can <em>actually do</em> is far more limited than the breathless coverage suggests.
        </p>

        <p>
          The most credible <strong>near-term applications</strong> are in science and highly technical industries, not consumer technology:
        </p>

        {/* Application table */}
        <div className="not-prose bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 my-10">
          <div className="bg-neutral-50 dark:bg-neutral-950 p-4 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-center">Near-Term Quantum Computing Applications (Credibility Ranking)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-violet-50/50 dark:bg-violet-900/10">
                  <th className="py-4 px-6 text-violet-600 dark:text-violet-400 font-black uppercase tracking-wider text-sm">Application</th>
                  <th className="py-4 px-6 text-neutral-500 font-bold uppercase tracking-wider text-sm">Industry</th>
                  <th className="py-4 px-6 text-neutral-500 font-bold uppercase tracking-wider text-sm">Timeline</th>
                  <th className="py-4 px-6 text-neutral-500 font-bold uppercase tracking-wider text-sm">Confidence</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700 dark:text-neutral-300">
                {[
                  ["Molecular simulation for drug discovery", "Pharma / Biotech", "5–10 years", "🟢 High"],
                  ["Materials science optimization", "Manufacturing", "5–10 years", "🟢 High"],
                  ["Financial portfolio optimization", "Finance / Banking", "5–8 years", "🟢 High"],
                  ["Logistics & supply chain routing", "Logistics", "7–12 years", "🟡 Medium"],
                  ["Breaking RSA / Bitcoin encryption", "Cybersecurity", "15–25+ years", "🔴 Very Long-Term"],
                  ["General-purpose consumer AI", "Consumer tech", "20+ years", "🔴 Speculative"],
                ].map(([app, industry, timeline, conf], i) => (
                  <tr key={i} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                    <td className="py-4 px-6 font-semibold">{app}</td>
                    <td className="py-4 px-6 text-sm text-neutral-500">{industry}</td>
                    <td className="py-4 px-6 text-sm">{timeline}</td>
                    <td className="py-4 px-6 text-sm font-bold">{conf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p>
          The assessment of a researcher on the r/Physics community — that commercial use cases are <strong>"speculative at best"</strong> and that the classical computing baseline is "shifting so fast it's impossible to get a read on the gap" — is a legitimate concern. Classical computing hasn't stood still while quantum develops. Techniques like tensor networks and specialized classical hardware continue to push the frontier of what non-quantum machines can do, narrowing the gap in some areas.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">04.</span> The US vs. China Quantum Arms Race
        </h2>

        {/* Image 3 — US-China race */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)] group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/quantum-computing-white-house-trump-2026/quantum_us_china_race.webp"
            alt="Dramatic editorial visualization of the US-China quantum computing geopolitical race — two competing quantum processors in national colors facing each other above a world map with entangled photon beams"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 p-8">
            <p className="text-white/80 text-sm font-medium">The quantum race: China leads in patent volume; the U.S. leads in patent impact and private investment.</p>
          </div>
        </div>

        <p>
          The national security dimension of EO 14413 is the most legitimate part of the White House's urgency — and it deserves serious attention. China's dominance of quantum patent filings is real, confirmed by the{' '}
          <a href="https://www.uscc.gov/research/chinas-advances-quantum-information-science" target="_blank" rel="noopener noreferrer" className="font-bold underline">U.S.-China Economic and Security Review Commission</a>.
          China's state-led approach has mobilized its universities and national labs in a coordinated way that private sector-led U.S. development has not yet matched in volume.
        </p>

        <p>
          However, the picture is more nuanced than a patent count suggests. The U.S. leads in the <strong>quality and commercial impact</strong> of quantum research — American patents are cited more often in subsequent science, and U.S. companies hold the most commercially viable hardware platforms. IBM, Google, and IonQ represent a depth of practical engineering capability that China has not yet replicated at scale.
        </p>

        <p>
          The real geopolitical risk is not that China will achieve "quantum supremacy" first in a benchmark sense — it's that state investment could allow China to develop quantum applications specifically optimized for <strong>signals intelligence and cryptanalysis</strong> faster than the U.S. private sector, acting on its own commercial logic, would prioritize those problems. That's why EO 14412's cybersecurity mandates matter as much as EO 14413's research push.
        </p>

        <blockquote>
          "Like fusion power, quantum computing is real and will matter — probably a lot — but the current moment looks a lot like the early AI hype cycle."
          <cite>— The source article's assessment, which our fact-check confirms as accurate</cite>
        </blockquote>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-violet-500">05.</span> Why This Moment Looks Like AI in 2020
        </h2>

        <p>
          The pattern is familiar. A technology with genuine long-term promise gets elevated by government action and investor excitement into something that feels more imminent than the engineering actually supports. Funding flows. Startups with the buzzword in their name multiply. The hype builds faster than the hardware.
        </p>

        <p>
          We've covered this pattern in AI extensively — from the <Link href="/blog/spacex-xai-grok-us-government-adoption-analysis" className="font-bold underline">gap between AI hype and government adoption reality</Link>, to the <Link href="/blog/top-ai-coding-tools-2026" className="font-bold underline">actual state of AI coding tools</Link> versus their marketing. Quantum is on the same trajectory, but compressed: the engineering is harder, the timelines are longer, and the gap between benchmark achievement and commercial application is wider.
        </p>

        <p>
          The differences from AI are worth noting too. Quantum computing has a much longer history as a scientific discipline, is backed by rigorous theoretical foundations from physics, and has a clearer set of "killer applications" in molecular simulation and cryptography that classical computers genuinely cannot match. It is not pseudoscience. The physics works. The engineering is the hard part — and EO 14413 alone cannot accelerate the laws of thermodynamics.
        </p>

        <p>
          What the White House can do — and what EO 14413 gets right — is de-risk the early-stage science, build the workforce pipeline, secure domestic supply chains (China dominates rare materials used in quantum hardware), and ensure the U.S. doesn't cede geopolitical ground during the decade-long gap between where the technology is now and where it needs to be. That's a legitimate use of federal investment. Expecting commercial results in this presidential term is not.
        </p>

      </div>

      {/* Tags */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["quantum computing 2026", "Trump executive order", "EO 14413", "qubits explained", "IBM quantum roadmap", "China quantum patents", "post-quantum cryptography", "Bitcoin quantum threat", "IonQ Google quantum", "quantum hype", "quantum workforce", "quantum vs classical"].map((tag, index) => (
            <span key={index} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:text-violet-700 dark:hover:text-violet-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* TechVantage Verdict */}
      <div className="mt-12 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-violet-50 to-blue-50 dark:from-violet-900/20 dark:to-blue-900/20 border border-violet-200 dark:border-violet-800">
        <h3 className="text-2xl font-black mb-6 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white text-sm">⚡</span>
          TechVantage Verdict
        </h3>
        <div className="grid md:grid-cols-2 gap-4 not-prose">
          <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-green-200 dark:border-green-800">
            <h5 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span>What EO 14413 Gets Right</h5>
            <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400 list-disc pl-4">
              <li>De-risking early-stage science is a legitimate federal role</li>
              <li>Workforce development addresses a real, documented talent gap</li>
              <li>Post-quantum crypto deadlines (EO 14412) are genuinely urgent</li>
              <li>Supply chain security for quantum materials is a real vulnerability</li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-amber-200 dark:border-amber-800">
            <h5 className="font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span>Where to Be Skeptical</h5>
            <ul className="text-sm space-y-1 text-neutral-600 dark:text-neutral-400 list-disc pl-4">
              <li>$1.3T "market" is economic impact, not revenue — often misquoted</li>
              <li>Commercial applications remain 10–20 years out for most use cases</li>
              <li>Error correction and qubit stability remain major unsolved problems</li>
              <li>Expect a wave of "quantum-washing" startups to follow the EO</li>
            </ul>
          </div>
        </div>
      </div>

      {/* In-Article Advertisement */}
      <AdPlaceholder type="content" description="In-Article Advertisement" />

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800">
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

      {/* Post-Article Advertisement */}
      <AdPlaceholder type="content" description="Post-Article Advertisement" />

      {/* Related Posts */}
      <footer className="mt-24 pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/us-uk-quantum-supply-chain-security-2026" className="group relative">
            <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md">
              <Image
                src="/blog/us-uk-quantum-supply-chain-security-2026/quantum_supply_chain_hero.webp"
                alt="US UK Quantum Supply Chain Security 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug text-neutral-900 dark:text-white">
              US &amp; UK Unite on Quantum Supply Chain Security: What It Means for Your Business
            </h4>
            <p className="text-sm text-neutral-500 mt-1">2026 · AI &amp; Computing</p>
          </Link>
          <Link href="/blog/google-quantum-vulnerabilities-cryptocurrency-2026" className="group relative">
            <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-md">
              <Image
                src="/blog/google-quantum-vulnerabilities-cryptocurrency-2026/quantum_crypto_threat_hero.webp"
                alt="Google Quantum Cryptography Threat 2026"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h4 className="text-lg font-bold group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug text-neutral-900 dark:text-white">
              Google's New Warning About Quantum Hackers and the Threat to Crypto
            </h4>
            <p className="text-sm text-neutral-500 mt-1">2026 · AI &amp; Computing</p>
          </Link>
        </div>
      </footer>
    </article>
  );
}
