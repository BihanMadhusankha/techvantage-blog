import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from '@/lib/seo';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "KIDS Act Passes House 267-117: What the Children's Online Safety Law Means for US Families, Big Tech & Free Speech",
  description: "The House passed the bipartisan KIDS Act on June 29, 2026 — requiring parental controls, AI chatbot rules, age verification, and restricting data targeting of minors. Full fact-checked breakdown of every provision, EFF criticism, and Senate outlook.",
  image: '/blog/kids-act-house-passed-children-online-safety-2026/kids_act_house_vote_hero.webp',
});

export default function KidsActHousePassedPage() {
  const faqs = [
    {
      question: "What is the KIDS Act?",
      answer: "The Kids Internet and Digital Safety (KIDS) Act (H.R. 7757) is a comprehensive bipartisan package of children's online safety legislation passed by the U.S. House of Representatives on June 29, 2026, by a 267–117 vote. It consolidates roughly 14 separate digital safety bills into one package, covering parental controls, AI chatbot regulations, data privacy for minors, and age verification requirements.",
    },
    {
      question: "What does the KIDS Act require tech companies to do?",
      answer: "The KIDS Act requires online platforms to implement stronger parental controls and 'safe by default' settings, restrict targeted advertising to users under 18, mandate that AI chatbots disclose they are not human, restrict autoplay and infinite scroll features for minors, and protect the privacy of users up to age 17 (expanding COPPA coverage from age 13 to 17).",
    },
    {
      question: "Does the KIDS Act require age verification?",
      answer: "The bill does not explicitly mandate age verification, but its 'known or should have known' compliance standard is widely expected to push platforms to implement broad age verification in practice to avoid legal liability. Critics from the Electronic Frontier Foundation argue this effectively forces age-gating across the entire internet.",
    },
    {
      question: "How does the KIDS Act differ from KOSA (Kids Online Safety Act)?",
      answer: "The KIDS Act is a narrower version of children's safety legislation. Crucially, it dropped the controversial 'duty of care' provision that was included in the Senate-preferred Kids Online Safety Act (KOSA), which would have held platforms liable for foreseeable harms to children. Some senators say the removal of this provision makes the House bill significantly weaker.",
    },
    {
      question: "What does the Electronic Frontier Foundation (EFF) oppose about the KIDS Act?",
      answer: "The EFF opposes the KIDS Act primarily because it argues the bill creates a surveillance infrastructure by pressuring companies to verify the ages and identities of all users — not just children. The EFF also argues the bill is a 'mess' of inconsistent age-gating standards across different services, creating legal risks that will cause platforms to restrict speech beyond what's legally required.",
    },
    {
      question: "Will the KIDS Act pass the Senate?",
      answer: "The KIDS Act faces significant challenges in the Senate. Senators must reconcile the House-passed version with the Senate's existing Kids Online Safety Act (KOSA), which passed the Senate 91–3 in July 2024 but stalled in the House. Key points of contention include the removal of the 'duty of care' clause and different approaches to age verification standards.",
    },
    {
      question: "What is COPPA 2.0 and is it in the KIDS Act?",
      answer: "COPPA 2.0 refers to an updated version of the Children's Online Privacy Protection Act, originally passed in 1998. The KIDS Act incorporates COPPA 2.0 provisions, including expanding privacy protections from children under 13 to teens up to age 17, adding a 'should have known' knowledge standard for platforms, and strengthening data deletion and correction rights.",
    },
  ];

  const blogSchema = generateBlogPostSchema({
    title: "KIDS Act Passes House 267-117: What the Children's Online Safety Law Means for US Families, Big Tech & Free Speech",
    description: "The bipartisan KIDS Act passed the House 267-117 on June 29, 2026 — fact-checked breakdown of every provision, the EFF's criticism, and what happens in the Senate next.",
    date: "2026-06-30",
    url: "https://www.techvantage.blog/blog/kids-act-house-passed-children-online-safety-2026",
    image: "https://www.techvantage.blog/blog/kids-act-house-passed-children-online-safety-2026/kids_act_house_vote_hero.webp",
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

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 font-bold uppercase tracking-widest text-xs mb-6">
          <Link
            href="/category/software"
            className="hover:underline bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-blue-700 dark:text-blue-400"
          >
            US Policy
          </Link>
          <Link
            href="/category/ai"
            className="hover:underline bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400"
          >
            AI Regulation
          </Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">June 30, 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          KIDS Act Clears House{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500">
            267–117
          </span>
          : What It Means for Kids, Big Tech &amp; Free Speech
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          The House passed the sweeping bipartisan KIDS Act on June 29, 2026 — overhauling children&apos;s online safety rules for the first time in decades. Here&apos;s every provision, every criticism, and what happens next.
        </p>

        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-700 to-indigo-500 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Tech Policy Analyst · Fact-Checked</div>
          </div>
        </div>
      </header>

      {/* ── Hero Image ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/kids-act-house-passed-children-online-safety-2026/kids_act_house_vote_hero.webp"
          alt="US Capitol building with digital shield protecting children online — KIDS Act House passage June 2026"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-700/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            BREAKING: PASSED HOUSE — JUNE 29, 2026
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            267–117 bipartisan vote. Now heads to the Senate — where significant challenges await.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-blue-700 dark:prose-a:text-blue-400 hover:prose-a:text-blue-600 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        {/* ── Lead ──────────────────────────────────────────────── */}
        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-blue-700 pl-8 mb-12 py-2">
          June 30, 2026 — The U.S. House of Representatives voted <strong>267–117</strong> on June 29 to pass the <strong>Kids Internet and Digital Safety (KIDS) Act</strong> — one of the most significant attempts to regulate children&apos;s online experiences in American history. Supporters call it a landmark child protection law. Critics call it a surveillance bill in disguise. We fact-checked every claim.
        </p>

        {/* ── Fact Check Badge ──────────────────────────────────── */}
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-12 flex items-start gap-4 not-prose">
          <span className="text-2xl mt-0.5">✅</span>
          <div>
            <p className="font-bold text-green-900 dark:text-green-300 mb-1 text-sm uppercase tracking-widest">Fact-Checked Article</p>
            <p className="text-sm text-green-800 dark:text-green-400 leading-relaxed">
              All legislative claims verified against{' '}
              <a href="https://www.eff.org/deeplinks/2026/06/kids-act-house-vote" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">EFF&apos;s official analysis</a>,{' '}
              <a href="https://energycommerce.house.gov/posts/house-passes-kids-act" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">House Energy and Commerce Committee</a>,{' '}
              <a href="https://techpolicy.press/the-kids-act-explained/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Tech Policy Press</a>, and{' '}
              <a href="https://www.iapp.org/news/a/kids-act-house-passes/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">IAPP</a>.
            </p>
          </div>
        </div>

        {/* ── Vote Quick Facts ───────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
          {[
            { stat: '267–117', label: 'House Vote', color: 'border-blue-500', text: 'text-blue-700 dark:text-blue-400' },
            { stat: '~14', label: 'Bills Combined', color: 'border-indigo-500', text: 'text-indigo-700 dark:text-indigo-400' },
            { stat: 'Age 17', label: 'COPPA Coverage', color: 'border-emerald-500', text: 'text-emerald-700 dark:text-emerald-400' },
            { stat: 'Senate', label: 'Next Stop', color: 'border-amber-500', text: 'text-amber-700 dark:text-amber-400' },
          ].map((item, i) => (
            <div key={i} className={`p-5 rounded-2xl bg-white dark:bg-neutral-900 border-t-4 ${item.color} shadow-sm text-center`}>
              <p className={`text-3xl font-black mb-1 ${item.text}`}>{item.stat}</p>
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>

        {/* ── Section 1: What Passed ─────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-700">01.</span> What the KIDS Act Actually Does
        </h2>

        {/* Provisions Image */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 not-prose">
          <Image
            src="/blog/kids-act-house-passed-children-online-safety-2026/kids_online_safety_provisions.webp"
            alt="Children online safety provisions — parental controls, AI chatbot rules, data privacy for minors under KIDS Act"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Key Provisions — KIDS Act 2026
          </div>
        </div>

        <p>
          The <strong>Kids Internet and Digital Safety Act (H.R. 7757)</strong> is not a single piece of legislation — it consolidates approximately <strong>14 separate digital safety bills</strong> into one comprehensive package. Introduced in March 2026, it combines updated versions of the Kids Online Safety Act (KOSA) and the Children and Teens&apos; Online Privacy Protection Act (COPPA 2.0). Here is exactly what it requires:
        </p>

        <div className="grid md:grid-cols-2 gap-5 my-10 not-prose">
          {[
            {
              emoji: '👨‍👩‍👧',
              title: 'Parental Controls & Safe Defaults',
              desc: "Platforms must implement stronger parental control tools and adopt 'safe by default' settings for minors. Features like autoplay, infinite scroll, and push notifications must be restricted for users under 18.",
              color: 'border-blue-500',
            },
            {
              emoji: '🔒',
              title: 'COPPA 2.0 — Privacy Up to Age 17',
              desc: 'Extends the Children\'s Online Privacy Protection Act from covering under-13s to covering all users under 18. Platforms must use a "should have known" standard and allow data deletion, correction, and consent control.',
              color: 'border-indigo-500',
            },
            {
              emoji: '📵',
              title: 'No Targeted Ads for Minors',
              desc: 'Restricts the use of minors\' personal data for behavioral targeted advertising — a major revenue stream for platforms like Meta and TikTok.',
              color: 'border-purple-500',
            },
            {
              emoji: '🤖',
              title: 'AI Chatbot Regulations',
              desc: 'AI chatbots must clearly disclose they are not human, share mental health resources, encourage breaks, avoid simulating emotions to build dependency, and not promote harmful topics to users under 18.',
              color: 'border-teal-500',
            },
            {
              emoji: '🔞',
              title: 'Age Verification for Adult Content',
              desc: 'Pornography websites must implement age verification mechanisms to restrict access for minors. The bill does not specify exact technology but requires platforms to verify age before granting access.',
              color: 'border-rose-500',
            },
            {
              emoji: '🎮',
              title: 'Online Games & Platform Rules',
              desc: 'Establishes new rules governing online games targeting minors, including restrictions on manipulative monetization features, loot boxes, and deceptive design patterns targeting children.',
              color: 'border-amber-500',
            },
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border-l-4 ${item.color} hover:shadow-lg transition-shadow`}>
              <h4 className="font-black text-neutral-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span>{item.emoji}</span> {item.title}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="my-10 p-7 rounded-3xl bg-blue-900/10 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 not-prose">
          <p className="text-blue-900 dark:text-blue-200 text-base leading-relaxed italic font-medium">
            &ldquo;This is a major step toward a safer online world for kids, making safety the default, giving parents more tools to protect their children and teens, and holding Big Tech accountable.&rdquo;
          </p>
          <p className="text-blue-700 dark:text-blue-400 text-sm mt-3 font-bold">
            — House Energy &amp; Commerce Committee, official post announcing passage, June 29, 2026
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> All provisions verified against the{' '}
            <a href="https://energycommerce.house.gov/posts/house-passes-kids-act" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">official House Energy and Commerce Committee announcement</a>,{' '}
            <a href="https://www.iapp.org/news/a/kids-act-house-passes/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">IAPP legislative summary</a>, and{' '}
            <a href="https://techpolicy.press/the-kids-act-explained/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Tech Policy Press</a>.
            The bill is H.R. 7757, passed June 29, 2026.
          </p>
        </div>

        {/* ── Section 2: KOSA vs KIDS ──────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-indigo-500">02.</span> KIDS Act vs. KOSA: The Crucial &ldquo;Duty of Care&rdquo; Gap
        </h2>

        <p>
          To understand the KIDS Act, you need to understand its predecessor. The <strong>Kids Online Safety Act (KOSA)</strong> passed the Senate in <strong>July 2024 by a remarkable 91–3 vote</strong> — one of the most bipartisan margins in recent Senate history. But it stalled in the House. The KIDS Act is the House&apos;s answer — and it deliberately stripped out the provision many child safety advocates considered KOSA&apos;s most powerful tool.
        </p>

        <div className="overflow-x-auto my-10 not-prose">
          <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-lg text-sm">
            <thead>
              <tr className="bg-neutral-900 text-white text-left">
                <th className="p-4 font-bold">Provision</th>
                <th className="p-4 font-bold">Senate KOSA</th>
                <th className="p-4 font-bold">House KIDS Act</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '"Duty of Care"', kosa: '✅ Included', kids: '❌ Removed', highlight: true },
                { item: 'Parental Controls', kosa: '✅ Yes', kids: '✅ Yes' },
                { item: 'COPPA 2.0 (Age 17)', kosa: '✅ Yes', kids: '✅ Yes' },
                { item: 'Targeted Ads Restricted', kosa: '✅ Yes', kids: '✅ Yes' },
                { item: 'AI Chatbot Rules', kosa: '⬜ Partial', kids: '✅ Stronger' },
                { item: 'Age Verification (Porn)', kosa: '⬜ Separate', kids: '✅ Included' },
                { item: 'State Law Preemption', kosa: 'Broader preemption', kids: 'Conflict-based (preserves stronger state laws)' },
              ].map((row, i) => (
                <tr key={i} className={`border-b border-neutral-200 dark:border-neutral-800 ${row.highlight ? 'bg-amber-50 dark:bg-amber-900/20' : i % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950'}`}>
                  <td className="p-4 font-bold">{row.item}</td>
                  <td className="p-4 text-neutral-600 dark:text-neutral-300">{row.kosa}</td>
                  <td className="p-4 text-neutral-600 dark:text-neutral-300">{row.kids}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          The <strong>&ldquo;duty of care&rdquo;</strong> provision would have legally required platforms to take reasonable steps to prevent foreseeable harms to children — essentially making social media companies liable for mental health damage, bullying, or exploitation that occurs on their platforms. House lawmakers removed it, arguing it was too broad and legally risky. Senate champions of KOSA, including advocates for children&apos;s mental health, have called the removal a dealbreaker.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> KOSA&apos;s 91–3 Senate passage in July 2024 is documented by{' '}
            <a href="https://www.senate.gov/legislative/LIS/roll_call_votes/vote1181/vote_118_1_00229.htm" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">official Senate roll call records</a>.
            The duty of care removal from the House version is confirmed by{' '}
            <a href="https://pillsburylaw.com/en/news-and-insights/kids-act-house-passage.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Pillsbury Law&apos;s analysis</a> and{' '}
            <a href="https://therecord.media/kids-act-house-senate-differences" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">The Record</a>.
          </p>
        </div>

        <AdPlaceholder type="content" description="In-Article Advertisement" />

        {/* ── Section 3: EFF Criticism ──────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-red-600">03.</span> The EFF&apos;s Warning: &ldquo;A Mess&rdquo; That Threatens All Users
        </h2>

        {/* EFF Image */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(239,68,68,0.2)] group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/kids-act-house-passed-children-online-safety-2026/eff_free_speech_age_verification.webp"
            alt="Age verification wall threatening anonymous speech and free expression online — EFF's criticism of the KIDS Act"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            The Age-Gating Threat — EFF Analysis
          </div>
          <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-xs text-center border border-white/10">
            Critics warn that effective age verification requires government ID collection — threatening anonymous speech for all users, not just minors.
          </div>
        </div>

        <p>
          While the bill has strong support from parents and child safety advocates, the <strong>Electronic Frontier Foundation (EFF)</strong>, the leading digital rights organization in the United States, has been one of the bill&apos;s most vocal critics. Their concerns cut to the heart of a fundamental tension in digital policy: protecting children without dismantling the open internet.
        </p>

        <div className="my-10 p-7 rounded-3xl bg-neutral-950 border border-neutral-800 not-prose">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-red-900/60 border border-red-500/40 flex items-center justify-center font-bold text-red-400 shrink-0 text-sm">EFF</div>
            <div>
              <p className="text-neutral-400 text-xs mb-3 font-bold uppercase tracking-widest">
                Joe Mullin, Senior Policy Analyst — Electronic Frontier Foundation
              </p>
              <p className="text-white text-base leading-relaxed">
                &ldquo;The package of cobbled-together bills is a mess, with different age-gating schemes for different services, using different standards. It&apos;s a lot of complexity, and a lot of legal risk. Faced with that, many companies will conclude that the safest option is restrictive age-checking practices across their entire platforms.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <p>
          The EFF&apos;s core argument has two prongs. First, the <strong>de facto surveillance concern</strong>: even though the bill doesn&apos;t explicitly mandate age verification, the &ldquo;known or should have known&rdquo; liability standard means platforms will implement identity verification to protect themselves legally — and that identity verification will apply to <em>all users</em>, not just minors. Second, the <strong>chilling effect on speech</strong>: once users must prove their identity to access platforms, anonymous speech becomes much harder. The EFF specifically calls out the impact on users who share sensitive information — including LGBTQ+ youth, domestic violence survivors, and political dissidents — who rely on online anonymity.
        </p>

        <div className="grid md:grid-cols-2 gap-5 my-10 not-prose">
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
            <h4 className="font-black text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
              ✅ Supporters Argue
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Children are exposed to harmful content at scale on social platforms</li>
              <li>• AI manipulation of children requires regulation</li>
              <li>• Companies must be held accountable for addictive design features targeting kids</li>
              <li>• Parents deserve real tools, not voluntary platform promises</li>
              <li>• Many countries (UK, Australia, EU) have enacted similar laws</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
            <h4 className="font-black text-red-900 dark:text-red-300 mb-3 flex items-center gap-2">
              ❌ Critics Warn
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>• Age verification will require government ID — affecting all users, not just kids</li>
              <li>• Anonymous speech will be chilled for vulnerable groups</li>
              <li>• Inconsistent standards create a legal mess companies can&apos;t navigate</li>
              <li>• Small platforms and startups will be crushed by compliance costs</li>
              <li>• &ldquo;Safe by default&rdquo; mandates could lead to broad content censorship</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> Joe Mullin&apos;s quote is from an official EFF blog post, documented at{' '}
            <a href="https://www.eff.org/deeplinks/2026/06/kids-act-house-vote" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">EFF.org</a>.
            The EFF&apos;s concerns about anonymous speech and surveillance are also covered by{' '}
            <a href="https://commondreams.org/news/kids-act-eff-criticism" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Common Dreams</a> and{' '}
            <a href="https://fire.org/news/kids-act-first-amendment/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">FIRE (Foundation for Individual Rights and Expression)</a>.
          </p>
        </div>

        {/* ── Section 4: What's Next ─────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-amber-500">04.</span> What Happens Next: The Senate Gauntlet
        </h2>

        <p>
          The KIDS Act now moves to the <strong>United States Senate</strong>, where it faces a far more complex path than in the House. Senators must reconcile the House-passed package with the Senate&apos;s existing preferred framework — and the two chambers are meaningfully far apart.
        </p>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 border border-amber-200 dark:border-amber-800 my-10 not-prose">
          <h4 className="font-black text-amber-900 dark:text-amber-200 text-lg mb-4">⚡ Senate Hurdles at a Glance</h4>
          <ol className="list-decimal pl-5 space-y-3 text-neutral-800 dark:text-neutral-200 text-sm">
            <li><strong>Duty of Care gap:</strong> Some Senators say the House&apos;s removal of this provision guts the bill&apos;s most powerful child protection tool.</li>
            <li><strong>KOSA reconciliation:</strong> The Senate passed KOSA 91–3 in 2024 — they may insist on restoring its key provisions before signing off.</li>
            <li><strong>EFF and tech industry lobbying:</strong> Major tech companies and civil liberties groups are expected to intensify lobbying against certain provisions.</li>
            <li><strong>Age verification fights:</strong> The precise mechanism for age verification remains deeply contested — biometric, government ID, or third-party verification?</li>
            <li><strong>Filibuster math:</strong> The 60-vote threshold in the Senate makes passage of anything controversial extremely difficult.</li>
          </ol>
        </div>

        <p>
          For US families, the most practical takeaway right now: <strong>this law is not in effect yet</strong>. Even if the Senate passes a version of the KIDS Act, the specific requirements for age verification, parental controls, and AI chatbot rules could change significantly before any final legislation is signed into law.
        </p>

        {/* ── Verdict ───────────────────────────────────────────── */}
        <div className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-900 via-neutral-900 to-neutral-950 text-white shadow-2xl border border-blue-700/50 not-prose">
          <h3 className="text-2xl font-black mb-4 text-white">TechVantage Verdict</h3>
          <p className="text-neutral-200 text-lg leading-relaxed mb-4">
            The 267–117 House vote is a genuine milestone — children&apos;s online safety legislation has struggled to advance for years, stalling between chambers with no final law. The KIDS Act&apos;s passage signals real political will to act.
          </p>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            But the EFF&apos;s warning carries real weight: a poorly designed age-gating system won&apos;t just affect children — it will change how <em>every American</em> uses the internet. The Senate phase will determine whether this becomes landmark child protection policy or a surveillance law with a child safety label.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/category/software" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              More Tech Policy News →
            </Link>
            <Link href="/blog/meta-subscriptions-instagram-facebook-whatsapp-2026" className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm border border-white/20">
              Meta&apos;s Big Tech Subscriptions →
            </Link>
          </div>
        </div>

      </div>

      {/* ── Tags ──────────────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'KIDS Act 2026', "Children's Online Safety", 'House Passed Bill', 'KOSA Senate',
            'Age Verification Law', 'Parental Controls Tech', 'EFF Digital Rights', 'COPPA 2.0',
            'Big Tech Regulation US', 'AI Chatbot Rules', 'Kids Internet Safety', 'US Tech Policy',
          ].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <AdPlaceholder type="content" description="In-Article Advertisement" />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-400 text-lg">
            💡
          </span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800"
            >
              <h3 className="text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">
                {faq.question}
              </h3>
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
