import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from '@/lib/seo';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "Apple Exec Says 'Hold Us Accountable' on iPhone Duo Crease: The Science of Matte Nano-Texture & Torque",
  description: "Apple hardware VP Tom Marieb tells TechRadar to 'hold us accountable' on the iPhone Duo crease. Here is how matte nano-texture glass, automotive torque engineering, and Ceramic Shield 2 aim to solve foldables' biggest flaw.",
  image: "/blog/apple-iphone-duo-crease-hinge-durability-2026/iphone_duo_hero.webp",
});

export default function AppleIPhoneDuoCreaseBlog() {
  const faqs = [
    {
      question: "Why did Apple choose a matte nano-texture display for the iPhone Duo?",
      answer: "According to Apple VP of Hardware Engineering Tom Marieb, glossy screens have high specularity that accentuates surface topology differences (the crease). The matte nano-texture finish scatters light uniformly, eliminating reflections and hiding minor physical changes in the hinge trough over years of continuous folding."
    },
    {
      question: "What did Tom Marieb mean by saying 'Hold us accountable' regarding the crease?",
      answer: "Marieb explicitly invited consumers and reviewers to judge the iPhone Duo's crease longevity over months and years of real-world use, expressing full confidence that Apple's combination of internal torque physics, liquid metal hinge brackets, and matte nano-texture will keep the crease visually imperceptible over time."
    },
    {
      question: "How does the iPhone Duo's hinge feel compared to other foldables?",
      answer: "Apple engineered the hinge with a custom torque profile designed to feel like shutting a luxury automobile door. Instead of feeling loose or floppy, the resistance remains uniform and firm, allowing the device to prop itself up solidly in seated (laptop) mode or standing orientation without collapsing."
    },
    {
      question: "Why does Apple's hardware chief advise against screen protectors on the iPhone Duo?",
      answer: "Marieb noted that aftermarket plastic and glass screen protectors 'make my skin crawl' because they degrade touch responsiveness, introduce specular reflections, disrupt optical clarity, and add unnatural thickness that can damage the folding tolerance of the Ceramic Shield 2 display."
    },
    {
      question: "When is the iPhone Duo release date and how much does it cost in the US?",
      answer: "The iPhone Duo became available for pre-order on October 16, 2026, and officially launches in retail stores on Friday, October 23, 2026. U.S. pricing starts at $1,999 for the 256GB base model, with financing and leasing options starting through Apple Upgrade via Klarna."
    }
  ];

  const blogPostSchema = generateBlogPostSchema({
    title: "Apple Exec Says 'Hold Us Accountable' on iPhone Duo Crease: The Science of Matte Nano-Texture & Torque",
    description: "Apple hardware VP Tom Marieb tells TechRadar to 'hold us accountable' on the iPhone Duo crease. Analysis of matte nano-texture glass, automotive torque engineering, and Ceramic Shield 2.",
    date: "2026-10-18",
    url: "https://www.techvantage.blog/blog/apple-iphone-duo-crease-hinge-durability-2026",
    image: "https://www.techvantage.blog/blog/apple-iphone-duo-crease-hinge-durability-2026/iphone_duo_hero.webp",
    author: "Bihan Madhusankha",
  });

  const faqSchema = generateFAQSchema(faqs);

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/hardware" className="hover:underline">Hardware</Link>
          <span>•</span>
          <Link href="/category/tutorials" className="hover:underline">Analysis</Link>
          <span>•</span>
          <span>October 18, 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Apple Exec Says ‘Hold Us Accountable’ on iPhone Duo Crease: Inside the Nano-Texture & Torque Breakthrough
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl leading-relaxed">
          In a remarkably candid interview, Apple hardware engineering VP Tom Marieb laid down the gauntlet to critics: judge the iPhone Duo’s crease after months of use. Here is the deep engineering behind Apple's matte finish, luxury car door hinge mechanics, and Ceramic Shield 2.
        </p>

        {/* Editorial Credit Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-neutral-800 to-black dark:from-neutral-200 dark:to-white flex items-center justify-center font-bold text-white dark:text-black shadow-lg">
              BM
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-900 dark:text-neutral-100">Bihan Madhusankha</div>
              <div className="text-xs text-neutral-500">Principal Hardware & Mobile Tech Analyst</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-neutral-950 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm shrink-0">
            <div className="text-right">
              <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">Launch Price</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Pre-orders Live</div>
            </div>
            <div className="text-2xl font-black text-neutral-900 dark:text-white font-mono">
              $1,999
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-12 overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/apple-iphone-duo-crease-hinge-durability-2026/iphone_duo_hero.webp"
          alt="Apple iPhone Duo foldable smartphone displaying flat open mode and standing seated angle on an executive desk"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white text-sm font-mono tracking-tight cursor-default">
            The Apple iPhone Duo introduces a matte nano-texture flexible OLED display paired with dual titanium torque hinges.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      {/* Article Body */}
      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">

        {/* Lead Quote Callout */}
        <div className="not-prose my-8 p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl relative overflow-hidden">
          <div className="absolute -top-4 -right-4 text-8xl text-neutral-800 font-serif opacity-30 select-none pointer-events-none">&ldquo;</div>
          <p className="text-xl md:text-2xl font-semibold leading-relaxed tracking-tight text-neutral-100 mb-4">
            &ldquo;Hold us accountable to that, please. The choice of a matte finish — apart from it being beautiful — is part of that equation. When you look at glossy displays, their specularity makes it very easy to pick up topology differences.&rdquo;
          </p>
          <div className="text-sm font-mono text-neutral-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Tom Marieb, VP of Hardware Engineering, Apple (speaking to TechRadar)
          </div>
        </div>

        {/* Fact-Check Banner */}
        <div className="not-prose bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-6 mb-12">
          <p className="text-sm text-blue-900 dark:text-blue-300 leading-relaxed">
            <strong>📋 Fact-Check & Verification Note:</strong> All executive remarks, material science quotes, and technical specs cited in this article have been cross-verified with the original <a href="https://www.techradar.com/phones/iphone/i-spoke-to-apples-new-vp-of-hardware-engineering-about-why-hes-especially-proud-of-the-iphone-duos-hinge-durability-and-the-reliability-of-ceramic-shield-2-when-i-see-someone-put-a-screen-protector-on-their-iphone-it-makes-my-skin-crawl" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700 dark:hover:text-blue-200">TechRadar interview conducted by Lance Ulanoff</a>, industry supply-chain reporting from <a href="https://www.macrumors.com/roundup/iphone-duo/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700 dark:hover:text-blue-200">MacRumors</a>, and official documentation from <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-700 dark:hover:text-blue-200">Apple Newsroom</a>.
          </p>
        </div>

        <p className="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-4 border-blue-600 pl-6 mb-10 py-2">
          For six years, the foldable smartphone category has suffered from an inconvenient truth: the display crease. While Samsung, Google, and OnePlus have narrowed the groove with teardrop hinges, every folding glass screen on the market eventually develops visible micro-valleys when light catches the glossy reflection. With the imminent launch of the <strong>$1,999 iPhone Duo</strong>, Apple is taking a radically different engineering gamble.
        </p>

        {/* Section 1 */}
        <h2 className="text-3xl mt-12 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#1</span>
          The Optical Physics of Nano-Texture: Why Specularity Was the Real Enemy
        </h2>
        <p>
          When smartphone reviewers complain about the crease on foldable phones like the <Link href="/blog/galaxy-z-fold-8-599-deal-2026" className="text-blue-600 hover:underline">Samsung Galaxy Z Fold series</Link>, they aren’t just feeling it with their fingertips — they are seeing the specular reflection of overhead lights bend across the dip. 
        </p>
        <p>
          Glossy glass surfaces act like curved funhouse mirrors. When a flat mirror develops even a fraction-of-a-millimeter dip, reflected light distorts sharply, magnifying the topology difference straight into the user’s eyes.
        </p>
        <p>
          By bringing its <strong>matte nano-texture glass etching technology</strong> (first perfected on Pro Display XDR and iPad Pro) to a flexible OLED substrate, Apple changes the physical behavior of light hitting the fold:
        </p>
        <ul>
          <li><strong>Lambertian Light Diffusion:</strong> Instead of bouncing ambient light in a coherent glare beam, the nanometer-scale etched surface scatters photon reflections uniformly in all directions.</li>
          <li><strong>Topological Camouflage:</strong> Because specular glare is eliminated, the microscopic depth variations created by the hinge trough become visually indiscernible to the naked eye during ordinary reading and video playback.</li>
          <li><strong>Long-Term Aging Tolerance:</strong> As Marieb pointed out, even if the internal mechanical structure undergoes microscopic deflection after 200,000 fold cycles, the matte finish is inherently far more forgiving than ultra-glossy Ultra Thin Glass (UTG).</li>
        </ul>

        {/* Image 2: Macro Hinge */}
        <div className="not-prose relative aspect-video w-full my-12 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
          <Image
            src="/blog/apple-iphone-duo-crease-hinge-durability-2026/iphone_duo_hinge_crease.webp"
            alt="Macro detail of Apple iPhone Duo precision titanium hinge and seamless folding crease"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Section 2 */}
        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#2</span>
          Automotive-Grade Torque: The ‘Car Door’ Hinge Feel
        </h2>
        <p>
          The second pillar of Marieb’s revelation concerns mechanical torque profiling. Early foldable phones often suffered from a binary hinge sensation — either feeling so stiff they resisted one-handed manipulation, or feeling sloppy and loose, causing the phone to snap shut unpredictably when propped on a table.
        </p>
        <p>
          Marieb described the engineering mandate behind the iPhone Duo’s dual-cam torque assembly:
        </p>
        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-6 my-6 italic text-neutral-700 dark:text-neutral-300">
          &ldquo;We really worked on the torque profile very heavily, and that means changing a lot of the mechanical properties of the hinge to have it feel solid, like a high-end automobile's car door, when you shut it. That was design intent, so people would have a feeling like, 'Oh, it's okay. This is well crafted, and it's safe for me to use and not worry about it.'&rdquo;
        </blockquote>
        <p>
          To achieve this, Apple engineered a multi-stage friction clutch using aerospace titanium and liquid metal alloys. The result is a hinge that supports seamless positioning across multiple operating modes:
        </p>
        <ul>
          <li><strong>Flat Open Mode (180°):</strong> Locked rigid with zero wobble, presenting an expansive 7.9-inch internal workspace.</li>
          <li><strong>Seated / Laptop Mode (90° to 120°):</strong> The bottom half rests stably on any surface, turning into a virtual keyboard or trackpad while the top half runs FaceTime or productivity apps.</li>
          <li><strong>Standing Tent Mode:</strong> Stable for hands-free 4K video recording or tabletop media consumption without requiring a kickstand case.</li>
          <li><strong>Audible Dampened Snap:</strong> When closing the phone, magnetic dampers decelerate the two halves at the final 5 degrees of travel, producing a refined, automotive-style &lsquo;thud&rsquo; rather than a sharp plastic clack.</li>
        </ul>

        {/* Image 3: Standing Mode */}
        <div className="not-prose relative aspect-video w-full my-12 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
          <Image
            src="/blog/apple-iphone-duo-crease-hinge-durability-2026/iphone_duo_standing_mode.webp"
            alt="Professional using the iPhone Duo in half-folded standing mode for a FaceTime meeting"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <AdPlaceholder type="content" description="In-Article Technology Sponsor" />

        {/* Section 3 */}
        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#3</span>
          Ceramic Shield 2 & The Screen Protector Controversy
        </h2>
        <p>
          One of the most provocative moments in the TechRadar interview came when Marieb addressed aftermarket screen protectors:
        </p>
        <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-6 my-6 italic text-neutral-700 dark:text-neutral-300">
          &ldquo;When I see someone put a screen protector on their iPhone, it makes my skin crawl.&rdquo;
        </blockquote>
        <p>
          Why such passionate disdain from an Apple executive? According to Marieb, modern iPhone glass isn’t standard soda-lime or generic aluminosilicate. With the introduction of <strong>Ceramic Shield 2</strong> on the iPhone Duo, Apple has grown nanoscale ceramic crystals inside the flexible glass matrix, delivering unprecedented drop toughness and scratch resilience out of the box.
        </p>
        <p>
          Applying a cheap third-party glass or plastic film directly over the iPhone Duo’s nano-texture surface creates several critical problems:
        </p>
        <ol>
          <li><strong>Destroys Optical Engineering:</strong> Layering glossy adhesive plastic over matte nano-etched glass negates the anti-reflective properties, immediately re-introducing the specular glare that hides the crease.</li>
          <li><strong>Alters Hinge Clearance Tolerances:</strong> Foldable devices are calibrated down to hundredths of a millimeter. Extra glass thickness increases pressure at the hinge apex when folded flat, potentially accelerating mechanical fatigue.</li>
          <li><strong>Degrades Haptic Sensitivity:</strong> Ceramic Shield 2 is tuned for low-friction touch interaction and precision Apple Pencil input. Screen protectors introduce drag and touch latency.</li>
        </ol>

        {/* Comparative Spec Table */}
        <div className="not-prose my-16 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <div className="bg-neutral-900 text-white p-4 border-b border-neutral-800">
            <h3 className="font-bold text-center text-lg">2026 Flagship Foldables: Crease & Hinge Architecture</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-100 dark:bg-neutral-950">
                  <th className="py-4 px-6 text-neutral-900 dark:text-neutral-200 font-bold text-xs uppercase">Feature</th>
                  <th className="py-4 px-6 text-neutral-900 dark:text-neutral-200 font-bold text-xs uppercase">Apple iPhone Duo</th>
                  <th className="py-4 px-6 text-neutral-900 dark:text-neutral-200 font-bold text-xs uppercase">Samsung Galaxy Z Fold 8</th>
                  <th className="py-4 px-6 text-neutral-900 dark:text-neutral-200 font-bold text-xs uppercase">Google Pixel Fold 3</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600 dark:text-neutral-400 text-sm">
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-blue-50/40 dark:bg-blue-950/20">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Screen Finish</td>
                  <td className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400">Matte Nano-Texture</td>
                  <td className="py-4 px-6">Glossy Anti-Reflective UTG</td>
                  <td className="py-4 px-6">Glossy Standard UTG</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Crease Visibility</td>
                  <td className="py-4 px-6 font-bold text-emerald-600 dark:text-emerald-400">Near-Zero (Diffused)</td>
                  <td className="py-4 px-6">Visible under direct light</td>
                  <td className="py-4 px-6">Noticeable reflection trough</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Hinge Torque Profile</td>
                  <td className="py-4 px-6 font-bold text-neutral-900 dark:text-neutral-100">Automotive Car Door Firm</td>
                  <td className="py-4 px-6">Dual-rail Flex Hinge</td>
                  <td className="py-4 px-6">Fluid gearless friction</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Cover Glass Material</td>
                  <td className="py-4 px-6 font-bold text-blue-600 dark:text-blue-400">Ceramic Shield 2</td>
                  <td className="py-4 px-6">Gorilla Glass Armor 2</td>
                  <td className="py-4 px-6">Gorilla Glass Victus 2</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">US Launch Price</td>
                  <td className="py-4 px-6 font-bold text-neutral-900 dark:text-white">$1,999</td>
                  <td className="py-4 px-6">$1,899</td>
                  <td className="py-4 px-6">$1,799</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 */}
        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#4</span>
          Pricing, Pre-Orders, and the Klarna Leasing Strategy
        </h2>
        <p>
          The iPhone Duo opened for <strong>pre-orders on Friday, October 16, 2026</strong>, with the official worldwide retail launch slated for <strong>Friday, October 23, 2026</strong>. 
        </p>
        <p>
          At an entry price of <strong>$1,999</strong>, it represents Apple’s most expensive consumer iPhone ever. However, Apple is aggressively cushioning the upfront sticker shock through its newly minted financial programs. 
        </p>
        <p>
          As detailed in our recent deep dive on the <Link href="/blog/apple-upgrade-klarna-iphone-leasing-2026" className="text-blue-600 hover:underline">Apple Upgrade partnership with Klarna</Link>, U.S. customers can lease flagship Apple hardware with zero down payment, soft credit checks, and flexible 12-to-24 month return-or-upgrade cycles. For users intimidated by a $2,000 upfront commitment, device leasing provides a low-risk gateway into Apple’s foldable ecosystem.
        </p>

        {/* Verdict Box */}
        <div className="not-prose my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black text-white shadow-2xl border border-neutral-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-blue-400">TechVantage</span> Editorial Verdict
            </h3>
            <span className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-sm font-semibold">
              Category Defining
            </span>
          </div>
          <p className="text-neutral-300 text-lg leading-relaxed mb-6">
            Tom Marieb’s directive to &lsquo;hold us accountable&rsquo; is rare bravado from an Apple executive team known for carefully hedged statements. By attacking the crease problem through optical physics (matte nano-texture diffusion) rather than simply flattening the hinge bend radius, Apple has bypassed the fundamental optical flaw of competing foldables. If long-term durability matches the initial engineering rigor, the iPhone Duo may finally turn the foldable smartphone from a niche curiosity into the next decade&apos;s dominant computing form factor.
          </p>
          <div className="pt-6 border-t border-neutral-800 flex flex-wrap gap-4 text-xs text-neutral-400">
            <span>Explore more coverage in our <Link href="/category/hardware" className="text-blue-400 hover:underline">Hardware Section</Link></span>
            <span>•</span>
            <span>Read about the <Link href="/blog/apple-upgrade-klarna-iphone-leasing-2026" className="text-blue-400 hover:underline">Apple Upgrade Leasing Program</Link></span>
          </div>
        </div>

      </div>

      {/* Monetag Ad Footer */}
      <AdPlaceholder type="content" description="Bottom Content Sponsor" />

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-14 border rounded-[2.5rem] bg-neutral-50/70 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-800 shadow-lg">
        <h2 className="text-3xl font-extrabold tracking-tight mb-10 text-neutral-900 dark:text-white">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 group"
            >
              <h4 className="text-lg md:text-xl font-bold mb-3 flex gap-3 text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 transition-colors">
                <span className="text-blue-500 font-mono">0{i + 1}.</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base font-medium pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
