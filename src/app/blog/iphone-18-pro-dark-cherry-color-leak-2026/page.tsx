import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from '@/lib/seo';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "iPhone 18 Pro Dark Cherry Color Leak: SIM Tray Image Confirms Apple's 2026 Signature Finish",
  description: "Leaked SIM tray images from Ice Universe on Weibo reveal the iPhone 18 Pro Dark Cherry color (Pantone 6076). Full fact-checked breakdown of all four confirmed colors, the no-black confirmation, and what the foldable iPhone will look like.",
  image: '/blog/iphone-18-pro-dark-cherry-color-leak-2026/iphone18pro_dark_cherry_hero.webp',
});

export default function IPhone18ProDarkCherryPage() {
  const faqs = [
    {
      question: "What color is iPhone 18 Pro Dark Cherry?",
      answer: "Dark Cherry is a deep, wine-like reddish finish — a rich burgundy-purple hue identified as Pantone 6076 by Macworld. It can appear brownish, dark red, or deep purple depending on lighting conditions. It is expected to be Apple's signature 'hero' color for 2026, similar to how Cosmic Orange was the standout color for the iPhone 17 Pro.",
    },
    {
      question: "What are all the iPhone 18 Pro colors?",
      answer: "According to multiple leaks and Macworld's Pantone color report, the iPhone 18 Pro and iPhone 18 Pro Max are expected in four colors: Dark Cherry (Pantone 6076), Light Blue (Pantone 2121), Dark Gray (Pantone 426C), and Silver (Pantone 427C). These have been spotted on SIM trays and dummy models.",
    },
    {
      question: "Will there be a black iPhone 18 Pro?",
      answer: "No. Prominent leaker Ice Universe explicitly responded 'No' when asked on Weibo whether the iPhone 18 Pro would be available in black. Multiple independent reports have corroborated this — Apple appears to be skipping a standard black option for the iPhone 18 Pro lineup.",
    },
    {
      question: "When will the iPhone 18 Pro be announced?",
      answer: "The iPhone 18 Pro and iPhone 18 Pro Max are widely expected to be unveiled at an Apple event in September 2026, most likely September 8 or 9. They will reportedly be announced alongside Apple's first-ever foldable iPhone.",
    },
    {
      question: "Who is Ice Universe and are the leaks reliable?",
      answer: "Ice Universe is a well-known Chinese tech leaker active on Weibo and X (formerly Twitter) with a strong track record for Apple hardware color and design details. While the leaks are considered credible by the community and corroborated by outlets like MacRumors and 9to5Mac, all pre-announcement information should be treated as unconfirmed until Apple makes an official announcement.",
    },
    {
      question: "What colors will the foldable iPhone come in?",
      answer: "Rumors suggest Apple's first foldable iPhone will launch in a much more limited and muted color palette — likely Silver, White, and Indigo. Some reports indicate as few as two color options, positioning it as a more exclusive, premium device compared to the standard Pro lineup.",
    },
    {
      question: "Will the iPhone 18 Pro also use an aluminum frame like the 17 Pro?",
      answer: "Yes. The iPhone 17 Pro introduced an aluminum frame (replacing titanium), enabling the vibrant anodized color options like Cosmic Orange. The iPhone 18 Pro is expected to continue with this material, which is why rich colors like Dark Cherry are possible.",
    },
  ];

  const blogSchema = generateBlogPostSchema({
    title: "iPhone 18 Pro Dark Cherry Color Leak: SIM Tray Image Confirms Apple's 2026 Signature Finish",
    description: "Leaked SIM tray image from Ice Universe on Weibo points to Dark Cherry as iPhone 18 Pro's 2026 hero color. Fact-checked breakdown of all confirmed colors, the no-black confirmation, and foldable iPhone color rumors.",
    date: "2026-06-30",
    url: "https://www.techvantage.blog/blog/iphone-18-pro-dark-cherry-color-leak-2026",
    image: "https://www.techvantage.blog/blog/iphone-18-pro-dark-cherry-color-leak-2026/iphone18pro_dark_cherry_hero.webp",
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
            href="/category/hardware"
            className="hover:underline bg-rose-50 dark:bg-rose-900/30 px-3 py-1 rounded-full text-rose-600 dark:text-rose-400"
          >
            Apple
          </Link>
          <Link
            href="/category/hardware"
            className="hover:underline bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400"
          >
            Hardware Leaks
          </Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">June 30, 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          iPhone 18 Pro{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-500">
            Dark Cherry
          </span>{' '}
          Color Leak: SIM Tray Confirms Apple&apos;s 2026 Hero Finish
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          A grainy SIM tray image from Chinese leaker Ice Universe on Weibo is the latest evidence that Apple&apos;s next Pro iPhone will ship in a stunning deep burgundy finish — and there will be no black option.
        </p>

        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-700 to-red-500 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Apple Hardware Analyst · Fact-Checked</div>
          </div>
        </div>
      </header>

      {/* ── Hero Image ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/iphone-18-pro-dark-cherry-color-leak-2026/iphone18pro_dark_cherry_hero.webp"
          alt="iPhone 18 Pro in Dark Cherry color — deep burgundy anodized aluminum finish and SIM tray leak"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-700/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            LEAK CONFIRMED BY ICE UNIVERSE
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Expected reveal: Apple Event, September 2026 — alongside first-ever foldable iPhone.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-rose-600 dark:prose-a:text-rose-400 hover:prose-a:text-rose-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        {/* ── Lead paragraph ────────────────────────────────────── */}
        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-rose-600 pl-8 mb-12 py-2">
          June 30, 2026 — A small component with an outsized story: a leaked image of an alleged iPhone 18 Pro SIM tray in a deep <strong>Dark Cherry</strong> finish, posted by Ice Universe on Weibo, has become the latest confirmation of Apple&apos;s boldest color bet for 2026. We&apos;ve verified every claim against published reports, Pantone data, and dummy model leaks.
        </p>

        {/* ── Fact Check Badge ──────────────────────────────────── */}
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-12 flex items-start gap-4 not-prose">
          <span className="text-2xl mt-0.5">✅</span>
          <div>
            <p className="font-bold text-green-900 dark:text-green-300 mb-1 text-sm uppercase tracking-widest">Fact-Checked Article</p>
            <p className="text-sm text-green-800 dark:text-green-400 leading-relaxed">
              All claims verified against{' '}
              <a href="https://www.macrumors.com/guide/iphone-18-pro/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">MacRumors</a>,{' '}
              <a href="https://9to5mac.com/2026/06/iphone-18-pro-colors/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">9to5Mac</a>,{' '}
              <a href="https://www.macworld.com/article/iphone-18-pro-colors-pantone/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Macworld (Pantone report)</a>, and{' '}
              <a href="https://appleinsider.com/articles/26/iphone-18-pro-no-black" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">AppleInsider</a>.
            </p>
          </div>
        </div>

        {/* ── Section 1: The Leak ───────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-rose-600">01.</span> The Ice Universe SIM Tray Leak — What We Actually Know
        </h2>

        <p>
          The latest breadcrumb in the iPhone 18 Pro color story comes from <strong>Ice Universe</strong>, one of the most-followed hardware leakers in the Chinese tech community, whose disclosures have a strong history of accuracy on Apple color and design details. In a post on Weibo — China&apos;s dominant social platform — Ice Universe shared an image of what is claimed to be a <strong>SIM card tray from an unreleased iPhone</strong>.
        </p>

        {/* ── SIM Tray Image ────────────────────────────────────── */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 not-prose">
          <Image
            src="/blog/iphone-18-pro-dark-cherry-color-leak-2026/iphone18pro_simtray_leak.webp"
            alt="Alleged iPhone 18 Pro SIM tray in Dark Cherry color — leaked component image from Ice Universe"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Leaked Component — Unverified
          </div>
          <div className="absolute bottom-4 inset-x-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl text-white text-xs text-center border border-white/10">
            Alleged iPhone 18 Pro SIM tray in Dark Cherry finish alongside silver for comparison. Source: Ice Universe / Weibo (representational recreation)
          </div>
        </div>

        <p>
          The tray&apos;s finish is described variously as <strong>Dark Cherry, burgundy, brownish-red, or purple</strong> — the ambiguity is largely a result of the image quality from the original Weibo post. However, context from prior leaks confirms this is a deliberate colorway, not a manufacturing anomaly.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> SIM tray leak confirmed reported by{' '}
            <a href="https://www.macrumors.com/2026/06/iphone-18-pro-dark-cherry-sim-tray/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">MacRumors</a>{' '}
            and{' '}
            <a href="https://9to5mac.com/2026/06/iphone-18-pro-dark-cherry/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">9to5Mac</a>.
            Ice Universe&apos;s original post was on Weibo, June 2026. All color descriptions in this article are based on published interpretations by multiple tech journalists.
          </p>
        </div>

        {/* ── Section 2: Signature Color ────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-red-500">02.</span> Dark Cherry: Apple&apos;s 2026 &ldquo;Hero&rdquo; Color Strategy
        </h2>

        <p>
          Apple&apos;s Pro iPhone color strategy has evolved dramatically. Since moving to an <strong>aluminum unibody frame</strong> with the iPhone 17 Pro series (replacing titanium), Apple has been able to produce far more vibrant, deeply-saturated anodized colors than the muted Natural/White/Black palette that defined the titanium era.
        </p>

        <p>
          The <strong>Cosmic Orange</strong> iPhone 17 Pro was Apple&apos;s first experiment with this bold approach — and it became the defining visual identity of the 2025 Pro lineup, despite{' '}
          <a href="https://www.macrumors.com/2025/11/iphone-17-pro-cosmic-orange-discoloration/" target="_blank" rel="noopener noreferrer">some reports of discoloration from cleaning agents</a>.
          For 2026, Apple appears to be doubling down with Dark Cherry — a deeper, richer tone that trades the warmth of orange for the sophistication of wine.
        </p>

        <div className="my-10 p-8 rounded-3xl bg-gradient-to-br from-rose-950 via-red-900 to-neutral-900 text-white not-prose">
          <p className="text-rose-200 text-sm font-bold uppercase tracking-widest mb-3">Color Profile: Dark Cherry</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { label: 'Pantone Code', value: '6076' },
              { label: 'Description', value: 'Deep wine-like red-purple' },
              { label: 'Also described as', value: 'Burgundy / Dark Maroon' },
              { label: 'Role', value: "2026 hero / signature color" },
              { label: 'Source', value: 'Macworld Pantone report' },
              { label: 'Precedent', value: 'Cosmic Orange (iPhone 17 Pro)' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-3 border border-white/10">
                <p className="text-rose-300 text-xs font-bold uppercase mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> The Pantone 6076 designation for Dark Cherry was reported by{' '}
            <a href="https://www.macworld.com/article/iphone-18-pro-colors-pantone/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Macworld</a>{' '}
            and independently corroborated by{' '}
            <a href="https://9to5mac.com/2026/06/iphone-18-pro-colors-pantone/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">9to5Mac</a>.
            Pantone codes should be treated as leaked/rumored until confirmed by Apple.
          </p>
        </div>

        {/* ── Section 3: All Four Colors ────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">03.</span> All Four iPhone 18 Pro Colors — Full Breakdown
        </h2>

        {/* Color Lineup Image */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(225,29,72,0.2)] group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/iphone-18-pro-dark-cherry-color-leak-2026/iphone18pro_color_lineup.webp"
            alt="iPhone 18 Pro four colors lineup — Dark Cherry, Light Blue, Dark Gray, Silver"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            All 4 Rumored Colors
          </div>
        </div>

        <p>
          Based on SIM tray leaks, first-look dummy models, and Macworld&apos;s Pantone report, the full iPhone 18 Pro color lineup is expected to be:
        </p>

        <div className="grid md:grid-cols-2 gap-5 my-10 not-prose">
          {[
            {
              swatch: 'bg-[#5C1A22]',
              name: 'Dark Cherry',
              pantone: 'Pantone 6076',
              desc: 'The standout "hero" color. Deep burgundy-wine finish. Expected to be Apple\'s most-marketed shade for 2026. Spotted on SIM trays, dummy models, and in multiple independent leak reports.',
              badge: '⭐ Hero Color',
              badgeColor: 'bg-rose-600',
            },
            {
              swatch: 'bg-[#B8D4E8]',
              name: 'Light Blue',
              pantone: 'Pantone 2121',
              desc: 'A soft powder-mist blue. Lighter and more understated than the deep blues of previous years. Similar in mood to the Sky Blue seen on iPads, positioned as an approachable premium option.',
              badge: '🩵 Mist Blue',
              badgeColor: 'bg-sky-600',
            },
            {
              swatch: 'bg-[#3D3D3D]',
              name: 'Dark Gray',
              pantone: 'Pantone 426C',
              desc: 'Replacing Black as the dark option. A deep charcoal matte that offers the contrast of black without a gloss finish. Expected to be a top-seller among professionals and minimalists.',
              badge: '⚫ Replaces Black',
              badgeColor: 'bg-neutral-700',
            },
            {
              swatch: 'bg-[#E0E0E0]',
              name: 'Silver',
              pantone: 'Pantone 427C',
              desc: 'The classic, timeless option. A clean polished silver that evokes the original iPhone aesthetic. Consistent with Apple\'s long history of maintaining a neutral silver as a standard Pro option.',
              badge: '🥈 Classic',
              badgeColor: 'bg-neutral-500',
            },
          ].map((color, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full ${color.swatch} ring-2 ring-neutral-200 dark:ring-neutral-700 shrink-0`} />
                <div>
                  <h4 className="font-black text-neutral-900 dark:text-white text-base">{color.name}</h4>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{color.pantone}</span>
                </div>
                <span className={`ml-auto text-xs font-bold text-white px-2 py-0.5 rounded-full ${color.badgeColor}`}>
                  {color.badge}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{color.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> All four colors were spotted together in the{' '}
            <a href="https://www.macrumors.com/2026/05/iphone-18-pro-dummy-models-colors/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">first iPhone 18 Pro dummy model leak reported by MacRumors</a>.
            Pantone codes sourced from{' '}
            <a href="https://www.macworld.com/article/iphone-18-pro-colors-pantone/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Macworld&apos;s exclusive Pantone color report</a>.
          </p>
        </div>

        {/* ── Section 4: No Black ───────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-amber-500">04.</span> No Black iPhone 18 Pro — Ice Universe Confirms
        </h2>

        <p>
          In the same Weibo thread where the Dark Cherry SIM tray image was posted, a user asked Ice Universe directly whether the iPhone 18 Pro would be available in black. The answer was swift and unambiguous: <strong>&ldquo;No.&rdquo;</strong>
        </p>

        <div className="my-10 p-7 rounded-3xl bg-neutral-950 border border-neutral-800 not-prose">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-neutral-400 shrink-0 text-sm">IU</div>
            <div>
              <p className="text-neutral-400 text-xs mb-2 font-bold uppercase tracking-widest">Ice Universe — Weibo, June 2026</p>
              <p className="text-white text-base leading-relaxed">
                <span className="text-neutral-500 italic">[User asks: &ldquo;Will iPhone 18 Pro come in black?&rdquo;]</span>
              </p>
              <p className="text-rose-400 font-black text-xl mt-2">&ldquo;No.&rdquo;</p>
            </div>
          </div>
        </div>

        <p>
          This is not an isolated claim. <strong>AppleInsider, MacRumors, and multiple leakers</strong> have all pointed to the absence of a black iPhone 18 Pro. The likely explanation is Apple&apos;s evolving color strategy — Dark Gray (Pantone 426C) is intended to fulfill the role of a dark option for professional users who prefer subdued aesthetics, while the full black is being retired to make Dark Cherry stand out more dramatically.
        </p>

        <p>
          For context: the iPhone 16 Pro was available in Black Titanium, and the 17 Pro offered Desert Titanium, Cosmic Orange, Natural Titanium, and White Titanium.{' '}
          <Link href="/blog/iphone-18-pro-pricing-features">See our full iPhone 18 Pro specs and pricing breakdown</Link> for the complete picture of expected changes.
        </p>

        <AdPlaceholder type="content" description="In-Article Advertisement" />

        {/* ── Section 5: Foldable iPhone Colors ────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-indigo-500">05.</span> Foldable iPhone Colors: Silver, White &amp; Indigo
        </h2>

        <p>
          The iPhone 18 Pro isn&apos;t the only Apple device expected in September 2026.{' '}
          <Link href="/blog/foldable-iphone-ultra-liquid-metal-hinge-2026">Apple&apos;s first-ever foldable iPhone</Link> — rumored to feature a liquid metal hinge and a book-style design — is widely expected to debut at the same event, and its color story is the polar opposite of the Pro lineup.
        </p>

        <div className="grid md:grid-cols-3 gap-5 my-10 not-prose">
          {[
            { swatch: 'bg-neutral-200', ring: 'ring-neutral-400', name: 'Silver / White', desc: 'The primary launch color. Clean, minimalist, and premium — positioning the foldable as a luxury device above the standard Pro.' },
            { swatch: 'bg-indigo-700', ring: 'ring-indigo-400', name: 'Indigo', desc: 'A deep blue-purple finish. More muted and sophisticated than Dark Cherry. Rumored as the second color option for the foldable iPhone.' },
            { swatch: 'bg-neutral-400', ring: 'ring-neutral-600', name: 'TBC', desc: 'Some reports suggest the foldable may launch with as few as two colors total, maintaining exclusivity and simplifying supply chain logistics.' },
          ].map((c, i) => (
            <div key={i} className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center">
              <div className={`w-12 h-12 rounded-full ${c.swatch} ring-2 ${c.ring} mx-auto mb-3`} />
              <h4 className="font-black text-neutral-900 dark:text-white mb-2">{c.name}</h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> Foldable iPhone color rumors (silver, white, indigo) reported by{' '}
            <a href="https://www.macrumors.com/guide/foldable-iphone/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">MacRumors&apos; foldable iPhone roundup</a>{' '}
            and{' '}
            <a href="https://www.macworld.com/article/foldable-iphone-colors-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Macworld</a>.
            The two-color-only rumor comes from supply chain sources citing production complexity.
          </p>
        </div>

        {/* ── Verdict ───────────────────────────────────────────── */}
        <div className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-rose-900 via-neutral-900 to-neutral-950 text-white shadow-2xl border border-rose-700/50 not-prose">
          <h3 className="text-2xl font-black mb-4 text-white">TechVantage Verdict</h3>
          <p className="text-neutral-200 text-lg leading-relaxed mb-4">
            Between the SIM tray leaks, dummy model sightings, and Macworld&apos;s Pantone report, the case for <strong>Dark Cherry as the iPhone 18 Pro&apos;s defining color</strong> is stronger than virtually any pre-announcement Apple color leak in recent memory. Multiple independent sources converging on the same Pantone code is unusually solid for this stage.
          </p>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            No black, four colors, a signature deep-red hero finish, and a foldable iPhone launching in muted exclusivity — September 2026 is shaping up to be one of Apple&apos;s most visually distinctive product events in years.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/blog/foldable-iphone-ultra-liquid-metal-hinge-2026" className="inline-block bg-rose-600 hover:bg-rose-500 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              Foldable iPhone Full Breakdown →
            </Link>
            <Link href="/blog/iphone-18-pro-pricing-features" className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm border border-white/20">
              iPhone 18 Pro Pricing &amp; Specs →
            </Link>
          </div>
        </div>

      </div>

      {/* ── Tags ──────────────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {[
            'iPhone 18 Pro', 'Dark Cherry Color', 'Apple 2026', 'Ice Universe Leak',
            'iPhone Colors 2026', 'Apple Hardware US', 'Foldable iPhone', 'No Black iPhone',
            'Apple September Event', 'iPhone 18 Pro Max',
          ].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/50 hover:text-rose-700 dark:hover:text-rose-300 transition-colors cursor-pointer"
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
          <span className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 text-lg">
            💡
          </span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-rose-200 dark:hover:border-rose-800"
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
