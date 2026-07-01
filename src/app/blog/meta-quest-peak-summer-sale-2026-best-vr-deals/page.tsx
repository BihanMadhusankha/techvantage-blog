import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from '@/lib/seo';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "Meta Quest Peak Summer Sale 2026: Best VR Game Deals Up to 80% Off — Full Breakdown",
  description: "Meta Horizon Store's Peak Summer Sale runs until July 5, 2026 at 11:59pm PT. Ghost Signal for $1.99, Dungeons of Eternity for $14.99, Walking Dead bundles and more. Every standout deal, fact-checked and ranked.",
  image: '/blog/meta-quest-peak-summer-sale-2026-best-vr-deals/meta_quest_summer_sale_hero.webp',
});

export default function MetaQuestSummerSalePage() {
  const faqs = [
    {
      question: "When does the Meta Quest Peak Summer Sale end?",
      answer: "The Meta Horizon Store Peak Summer Sale ends on July 5, 2026 at 11:59 pm PT (Pacific Time). After that, all discounted prices will return to their regular retail pricing. Be sure to browse and purchase before the deadline.",
    },
    {
      question: "What is the best deal in the Meta Quest Peak Summer Sale?",
      answer: "Ghost Signal: A Stellaris Game at $1.99 (80% off its regular $9.99 price) is arguably the single best value in the sale. Retropolis 2 — Never Say Goodbye at $5.99 (75% off $24.99) is a close second. Both are critically well-received experiences that are essentially free at these prices.",
    },
    {
      question: "What is the Walking Dead VR Bundle?",
      answer: "The Walking Dead Bundle packs The Walking Dead: Saints & Sinners and its sequel, The Walking Dead: Saints & Sinners — Chapter 2: Retribution, into a single discounted purchase. Both games are narrative-driven survival horror experiences set in the Walking Dead universe, and buying the bundle saves money compared to purchasing each title separately.",
    },
    {
      question: "What is the Stealth Masters Bundle?",
      answer: "The Stealth Masters Bundle combines Assassin's Creed Nexus VR and Metro Awakening into one purchase. Assassin's Creed Nexus VR brings the franchise's parkour and stealth mechanics to VR, while Metro Awakening is a highly atmospheric survival horror game set in the post-apocalyptic Metro universe.",
    },
    {
      question: "Do these Meta Quest game deals work on Quest 2, Quest 3, and Quest 3S?",
      answer: "Yes. All games purchased through the Meta Horizon Store are tied to your Meta account and will work on any supported Quest headset — including the Quest 2, Quest 3, and Quest 3S — as long as the title is compatible with that hardware generation. Most sale titles support Quest 2 and later.",
    },
    {
      question: "Is the Meta Quest Summer Sale better than the Steam Summer Sale for VR?",
      answer: "They serve different audiences. The Steam Summer Sale covers PC VR titles playable on headsets like the Valve Index or Quest via Air Link/USB, while Meta's Peak Summer Sale covers Quest-native standalone VR titles. If you own a Quest headset and prefer untethered VR, Meta's sale is the more relevant one. Both are running simultaneously in summer 2026.",
    },
    {
      question: "Can you play Meta Quest games on PC VR?",
      answer: "Yes. Many Meta Quest games are also available as PC VR titles through the Meta PC app, and Quest headsets can stream PC VR games via Air Link (wireless) or a USB cable with Meta Quest Link. However, the sale prices on the Meta Horizon Store apply to the Quest-native versions unless otherwise specified.",
    },
  ];

  const saleDeals = [
    { title: 'Ghost Signal: A Stellaris Game', sale: '$1.99', original: '$9.99', off: '80%', badge: '🔥 Best Value', color: 'border-orange-500', badgeBg: 'bg-orange-500' },
    { title: 'Retropolis 2: Never Say Goodbye', sale: '$5.99', original: '$24.99', off: '75%', badge: '💎 Great Deal', color: 'border-purple-500', badgeBg: 'bg-purple-500' },
    { title: 'The Climb 2', sale: '$13.99', original: '$29.99', off: '53%', badge: '🧗 Adventure', color: 'border-green-500', badgeBg: 'bg-green-500' },
    { title: 'Synth Riders', sale: '$12.99', original: '$24.99', off: '50%', badge: '🎵 Rhythm', color: 'border-pink-500', badgeBg: 'bg-pink-500' },
    { title: 'The 7th Guest VR', sale: '$9.99', original: '$19.99', off: '50%', badge: '👻 Horror', color: 'border-indigo-500', badgeBg: 'bg-indigo-500' },
    { title: 'Crime Shop Simulator', sale: '$9.99', original: '$19.99', off: '50%', badge: '🔫 Action', color: 'border-red-500', badgeBg: 'bg-red-500' },
    { title: 'Dungeons of Eternity', sale: '$14.99', original: '$29.99', off: '50%', badge: '⚔️ Co-op RPG', color: 'border-amber-500', badgeBg: 'bg-amber-500' },
    { title: 'Star Trek Infection', sale: '$20.99', original: '$29.99', off: '30%', badge: '🚀 Sci-Fi', color: 'border-blue-500', badgeBg: 'bg-blue-500' },
    { title: 'Vader Immortal', sale: '$6.99', original: '$9.99', off: '30%', badge: '⚡ Star Wars', color: 'border-yellow-500', badgeBg: 'bg-yellow-600' },
    { title: 'Moss', sale: '$13.99', original: '$19.99', off: '30%', badge: '🐭 Beloved', color: 'border-teal-500', badgeBg: 'bg-teal-500' },
    { title: 'TMNT: Empire City', sale: '$18.99', original: '$24.99', off: '25%', badge: '🐢 Action', color: 'border-lime-500', badgeBg: 'bg-lime-600' },
    { title: 'Forefront', sale: '$21.99', original: '$27.99', off: '20%', badge: '🪖 Shooter', color: 'border-neutral-500', badgeBg: 'bg-neutral-600' },
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Meta Quest Peak Summer Sale 2026: Best VR Game Deals Up to 80% Off — Full Breakdown",
    description: "Meta Horizon Store's Peak Summer Sale runs until July 5, 2026 — Ghost Signal for $1.99, Dungeons of Eternity for $14.99, Walking Dead and Stealth Masters bundles. Full fact-checked deal breakdown.",
    date: "2026-06-30",
    url: "https://www.techvantage.blog/blog/meta-quest-peak-summer-sale-2026-best-vr-deals",
    image: "https://www.techvantage.blog/blog/meta-quest-peak-summer-sale-2026-best-vr-deals/meta_quest_summer_sale_hero.webp",
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

      {/* ── Urgency Banner ──────────────────────────────────────── */}
      <div className="mb-8 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg not-prose">
        <span className="text-2xl">⏰</span>
        <div>
          <p className="font-black text-sm uppercase tracking-widest">Sale Ends July 5, 2026 at 11:59 pm PT</p>
          <p className="text-orange-100 text-xs">Don&apos;t miss these deals — browse the full Meta Horizon Store sale before they&apos;re gone.</p>
        </div>
        <a href="https://www.meta.com/experiences/sale/" target="_blank" rel="noopener noreferrer" className="ml-auto shrink-0 bg-white text-orange-600 font-black text-xs px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors whitespace-nowrap">
          Shop Now →
        </a>
      </div>

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/hardware" className="hover:underline bg-violet-50 dark:bg-violet-900/30 px-3 py-1 rounded-full text-violet-700 dark:text-violet-400">
            VR Gaming
          </Link>
          <Link href="/category/hardware" className="hover:underline bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full text-orange-600 dark:text-orange-400">
            Deals
          </Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">June 30, 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Meta Quest{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600">
            Peak Summer Sale
          </span>{' '}
          2026 — Best VR Deals Up to 80% Off
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          Hundreds of Quest games are massively discounted through July 5. We&apos;ve picked the best deals, verified every price, and highlighted the bundles worth grabbing before the sale closes.
        </p>

        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-500 to-violet-600 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">VR Gaming Editor · Fact-Checked Prices</div>
          </div>
        </div>
      </header>

      {/* ── Hero Image ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/meta-quest-peak-summer-sale-2026-best-vr-deals/meta_quest_summer_sale_hero.webp"
          alt="Meta Quest Peak Summer Sale 2026 — up to 80% off hundreds of VR games on the Meta Horizon Store"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/90 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            LIVE NOW — ENDS JULY 5, 11:59 PM PT
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Meta&apos;s Horizon Store Peak Summer Sale — hundreds of titles, up to 80% off, including bundles.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-violet-600 dark:prose-a:text-violet-400 hover:prose-a:text-violet-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        {/* ── Lead ──────────────────────────────────────────────── */}
        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-orange-500 pl-8 mb-12 py-2">
          June 30, 2026 — Meta&apos;s <strong>Horizon Store Peak Summer Sale</strong> launched on June 26 and is live through <strong>July 5 at 11:59 pm PT</strong>, putting hundreds of Quest games, apps, and DLC on deep discount. We fact-checked every listed price against the official Meta Horizon Store and independent VR coverage from UploadVR and Forbes.
        </p>

        {/* ── Fact Check Badge ──────────────────────────────────── */}
        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-2xl p-5 mb-12 flex items-start gap-4 not-prose">
          <span className="text-2xl mt-0.5">✅</span>
          <div>
            <p className="font-bold text-green-900 dark:text-green-300 mb-1 text-sm uppercase tracking-widest">Prices Fact-Checked</p>
            <p className="text-sm text-green-800 dark:text-green-400 leading-relaxed">
              All sale prices verified against the{' '}
              <a href="https://www.meta.com/experiences/sale/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">official Meta Horizon Store sale page</a>,{' '}
              <a href="https://uploadvr.com/meta-quest-peak-summer-sale-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">UploadVR&apos;s deal roundup</a>, and{' '}
              <a href="https://www.forbes.com/sites/meta-quest-summer-sale-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600">Forbes&apos; VR deals coverage</a>.
              Prices may vary by region. Always verify before purchasing.
            </p>
          </div>
        </div>

        {/* ── Section 1: Overview ───────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-orange-500">01.</span> Meta&apos;s Peak Summer Sale — The Big Picture
        </h2>

        <p>
          Not content to let{' '}
          <a href="https://store.steampowered.com/sale/summersale" target="_blank" rel="noopener noreferrer">Steam&apos;s Summer Sale</a>{' '}
          steal all the spotlight, Meta launched its own <strong>Peak Summer Sale</strong> across the Horizon Store for all Quest headsets — the Quest 2, Quest 3, and Quest 3S. The sale started <strong>June 26</strong> and runs through <strong>July 5, 2026 at 11:59 pm PT</strong>, making it a 10-day window for Quest owners to stock up their libraries at a fraction of the normal cost.
        </p>

        <p>
          The scale is significant: hundreds of titles are discounted, spanning every genre VR has to offer — rhythm games, horror, adventure, multiplayer shooters, fitness apps, and narrative experiences. Some deals reach <strong>80% off</strong> — the kind of discount you don&apos;t see often on premium VR titles.
        </p>

        {/* ── VR Games Collage ──────────────────────────────────── */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/meta-quest-peak-summer-sale-2026-best-vr-deals/meta_quest_vr_games_collage.webp"
            alt="Meta Quest VR games collage — zombie survival, rhythm, space, stealth and dungeon games in summer sale 2026"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Hundreds of Genres On Sale
          </div>
        </div>

        {/* ── Section 2: Best Deals ─────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-rose-500">02.</span> Every Standout Deal — Ranked &amp; Fact-Checked
        </h2>

        <p>
          We went through the full sale catalog and picked the strongest value propositions. These are sorted by discount percentage so you can spot the best bang-for-buck at a glance:
        </p>
      </div>

      {/* ── Deal Cards Grid ───────────────────────────────────────── */}
      <div className="grid md:grid-cols-2 gap-4 my-10 not-prose">
        {saleDeals.map((deal, i) => (
          <a
            key={i}
            href="https://www.meta.com/experiences/sale/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-5 rounded-2xl bg-white dark:bg-neutral-900 border-l-4 ${deal.color} hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer block`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h4 className="font-black text-neutral-900 dark:text-white text-base leading-tight group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                {deal.title}
              </h4>
              <span className={`shrink-0 text-white text-xs font-bold px-2 py-1 rounded-lg ${deal.badgeBg}`}>
                {deal.badge}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-neutral-900 dark:text-white">{deal.sale}</span>
              <span className="text-sm text-neutral-400 line-through">{deal.original}</span>
              <span className="ml-auto text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                {deal.off} OFF
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-violet-600 dark:prose-a:text-violet-400 hover:prose-a:text-violet-500 prose-strong:text-neutral-900 dark:prose-strong:text-white font-sans">

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Price Fact-Check:</strong> All 12 deals above verified against{' '}
            <a href="https://uploadvr.com/meta-quest-peak-summer-sale-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">UploadVR&apos;s sale coverage</a>{' '}
            and{' '}
            <a href="https://www.meta.com/experiences/sale/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Meta&apos;s official Horizon Store sale page</a>.
            Prices reflect US pricing as of June 29–30, 2026. Regional pricing may differ.
          </p>
        </div>

        {/* ── Our Top Picks ─────────────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-violet-600">03.</span> Our Top 3 Picks — Don&apos;t Miss These
        </h2>

        <div className="space-y-6 my-10 not-prose">
          {[
            {
              rank: '🥇',
              title: 'Ghost Signal: A Stellaris Game — $1.99',
              why: "At 80% off its $9.99 regular price, Ghost Signal is essentially an impulse purchase. It's a space rogue-lite game that distills the Stellaris universe into a tight, engaging VR experience. At under two dollars, the cost-to-enjoyment ratio is unmatched in this sale. Buy it even if you\'re on the fence.",
              gradient: 'from-orange-500 to-rose-500',
            },
            {
              rank: '🥈',
              title: 'Dungeons of Eternity — $14.99',
              why: "This co-op dungeon crawler is one of the Quest's best multiplayer games — and at 50% off $29.99, it's the perfect time to grab it if you missed it at launch. Its roguelite structure, weapon crafting, and drop-in co-op make it endlessly replayable with friends.",
              gradient: 'from-amber-500 to-orange-500',
            },
            {
              rank: '🥉',
              title: 'Synth Riders — $12.99',
              why: "The rhythm VR genre is crowded, but Synth Riders earns its reputation through excellent song selection, smooth gameplay, and a thriving community. At 50% off, this is the perfect entry point for anyone who wants a Beat Saber alternative with a different vibe.",
              gradient: 'from-pink-500 to-violet-500',
            },
          ].map((pick, i) => (
            <a
              key={i}
              href="https://www.meta.com/experiences/sale/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all hover:-translate-y-0.5 block"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pick.gradient} flex items-center justify-center text-3xl shrink-0 shadow-lg`}>
                {pick.rank}
              </div>
              <div>
                <h4 className="font-black text-neutral-900 dark:text-white text-lg mb-2">{pick.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{pick.why}</p>
              </div>
            </a>
          ))}
        </div>

        <AdPlaceholder type="content" description="In-Article Advertisement" />

        {/* ── Section 4: Bundles ────────────────────────────────── */}
        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-emerald-500">04.</span> The Bundles — Two Games for Less
        </h2>

        {/* Bundle Image */}
        <div className="relative w-full aspect-[16/9] my-14 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(139,92,246,0.25)] group border border-neutral-200 dark:border-neutral-800 not-prose">
          <Image
            src="/blog/meta-quest-peak-summer-sale-2026-best-vr-deals/meta_quest_bundle_deals.webp"
            alt="Meta Quest Peak Summer Sale 2026 — game bundles including Walking Dead Bundle and Stealth Masters Bundle"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            Themed Bundles — Extra Savings
          </div>
        </div>

        <p>
          Beyond individual game discounts, Meta has organized <strong>themed bundles</strong> that combine two or more titles into a single purchase at a price lower than buying each separately. These are especially good value if you&apos;ve been eyeing multiple games in the same franchise or genre.
        </p>

        <div className="grid md:grid-cols-2 gap-5 my-10 not-prose">
          {[
            {
              emoji: '🧟',
              name: 'The Walking Dead Bundle',
              games: ['The Walking Dead: Saints & Sinners', "The Walking Dead: Saints & Sinners — Chapter 2: Retribution"],
              desc: "Two full-length survival horror games set in the Walking Dead universe. S&S is a landmark VR title that proved the genre can deliver deep, compelling narrative in VR. Chapter 2 builds on everything that worked. Getting both together is the best way to experience this story.",
              color: 'border-rose-600',
            },
            {
              emoji: '🗡️',
              name: 'Stealth Masters Bundle',
              games: ['Assassin\'s Creed Nexus VR', 'Metro Awakening'],
              desc: "Two of the most critically acclaimed immersive stealth/action VR experiences on the platform. Assassin's Creed Nexus brings parkour and stealth to first-person VR, while Metro Awakening is a masterclass in atmospheric survival horror. A premium VR double-bill.",
              color: 'border-blue-600',
            },
          ].map((bundle, i) => (
            <a
              key={i}
              href="https://www.meta.com/experiences/sale/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border-t-4 ${bundle.color} hover:shadow-lg transition-all hover:-translate-y-0.5 block`}
            >
              <div className="text-4xl mb-3">{bundle.emoji}</div>
              <h4 className="font-black text-neutral-900 dark:text-white text-lg mb-3">{bundle.name}</h4>
              <ul className="space-y-1 mb-4">
                {bundle.games.map((g, j) => (
                  <li key={j} className="text-xs font-bold text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{bundle.desc}</p>
              <p className="text-violet-600 dark:text-violet-400 text-xs font-bold mt-3">View on Meta Store →</p>
            </a>
          ))}
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8 not-prose">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check:</strong> The Walking Dead Bundle and Stealth Masters Bundle are confirmed by{' '}
            <a href="https://uploadvr.com/meta-quest-peak-summer-sale-2026/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">UploadVR</a>.
            Bundle pricing must be verified on the{' '}
            <a href="https://www.meta.com/experiences/sale/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Meta Horizon Store</a>{' '}
            directly as prices can change and may vary by region.
          </p>
        </div>

        {/* ── Verdict ───────────────────────────────────────────── */}
        <div className="my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-900 via-neutral-900 to-neutral-950 text-white shadow-2xl border border-violet-700/50 not-prose">
          <h3 className="text-2xl font-black mb-4 text-white">TechVantage Verdict: Don&apos;t Sleep on This Sale</h3>
          <p className="text-neutral-200 text-lg leading-relaxed mb-4">
            The Meta Quest Peak Summer Sale is genuinely one of the better seasonal sales the Horizon Store has run. The 80% off on Ghost Signal and 75% off on Retropolis 2 stand out as exceptional values — and the Walking Dead and Stealth Masters bundles offer strong savings on premium, well-reviewed titles.
          </p>
          <p className="text-neutral-300 text-base leading-relaxed mb-6">
            If you own any Quest headset and haven&apos;t filled out your game library yet, the window closes <strong>July 5 at 11:59 pm PT</strong>. Use the link below to browse the full catalog.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.meta.com/experiences/sale/" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
              Browse Full Meta Sale →
            </a>
            <Link href="/blog/iphone-18-pro-dark-cherry-color-leak-2026" className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm border border-white/20">
              More Tech Deals & News →
            </Link>
          </div>
        </div>

      </div>

      {/* ── Tags ──────────────────────────────────────────────────── */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {['Meta Quest Sale', 'VR Games 2026', 'Quest 3 Deals', 'Horizon Store Summer Sale',
            'Best VR Games', 'Ghost Signal VR', 'Dungeons of Eternity', 'Synth Riders Sale',
            'Walking Dead VR Bundle', 'Meta VR Gaming US'].map((tag, i) => (
            <span key={i} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/50 hover:text-violet-700 dark:hover:text-violet-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <AdPlaceholder type="content" description="In-Article Advertisement" />

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg">
            💡
          </span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800">
              <h3 className="text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">{faq.question}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
