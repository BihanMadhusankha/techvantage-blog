import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';

export const metadata = constructMetadata({
  title: "Sony RX10 V Superzoom Review: 4K 120p, AI AF, and a $2,300 Price Tag",
  description: "Sony's long-awaited RX10 V is here with a major design overhaul, a dedicated deep-learning AI processor, 4K 120p video, and 30 fps burst shooting. Is this superzoom worth $2,299.99?",
  image: "/blog/sony-rx10-v-superzoom-4k-120p-review-2026/sony_rx10v_hero.webp",
});

export default function SonyRx10VBlog() {
  const faqs = [
    {
      question: "What is the price of the Sony RX10 V and when will it ship?",
      answer: "The Sony RX10 V is priced at $2,299.99 (pre-orders are currently open) and is scheduled to begin shipping in August 2026."
    },
    {
      question: "What are the main video upgrades on the RX10 V compared to the IV?",
      answer: "The RX10 V upgrades video output to 4K 60fps using the full sensor width (no pixel binning, 10-bit 4:2:2 internal) and 4K 120fps with a slight crop. It also supports 1080p at 240fps, S-Log3, custom LUT imports, and upgraded Active Mode image stabilization."
    },
    {
      question: "Does the Sony RX10 V have a built-in flash?",
      answer: "No. Unlike the older RX10 IV, the new RX10 V lacks a built-in pop-up flash in order to accommodate its redesigned, sleeker top plate and updated EVF housing."
    },
    {
      question: "How does the autofocus system differ on the Sony RX10 V?",
      answer: "The RX10 V introduces a dedicated AI deep-learning processor that allows subject-recognition tracking for humans (head, eye, body), animals, birds, insects, and vehicles. It also increases the phase-detection AF point count to 575 (from 315) covering 70.6% of the sensor."
    },
    {
      question: "Does the RX10 V screen flip out for vlogging?",
      answer: "No. The rear 3-0 inch 1.62M-dot LCD screen is a tilting-only display. It does not rotate or flip out to the side, which remains a drawback for vloggers and selfie shooting."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Sony RX10 V Superzoom Review: 4K 120p, AI AF, and a $2,300 Price Tag",
    description: "Sony's long-awaited RX10 V is here with a major design overhaul, a dedicated deep-learning AI processor, 4K 120p video, and 30 fps burst shooting. Is this superzoom worth $2,299.99?",
    date: "2026-07-09",
    url: "https://www.techvantage.blog/blog/sony-rx10-v-superzoom-4k-120p-review-2026",
    image: "https://www.techvantage.blog/blog/sony-rx10-v-superzoom-4k-120p-review-2026/sony_rx10v_hero.webp",
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

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href="/category/hardware" className="hover:underline">Hardware</Link>
          <span>•</span>
          <Link href="/category/tutorials" className="hover:underline">Reviews</Link>
          <span>•</span>
          <span>July 9, 2026</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-neutral-900 dark:text-neutral-50">
          Sony's RX10 V Superzoom Arrives: 4K 120p Video, Deep Learning AF, and a Mind-Blowing $2,300 Price
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
          Nine years after its predecessor, Sony has overhauled its ultimate all-in-one bridge camera. With a premium new chassis, next-gen AI tracking, and major video improvements, here is our full review and fact-check.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-lg">
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
          src="/blog/sony-rx10-v-superzoom-4k-120p-review-2026/sony_rx10v_hero.webp"
          alt="Sony RX10 V superzoom premium bridge camera body featuring Zeiss Vario-Sonnar lens"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 hidden md:block">
          <p className="text-white text-sm font-mono tracking-tight cursor-default">
            The Sony RX10 V combines a versatile 24-600mm equivalent optical reach with cutting-edge 2026 electronics.
          </p>
        </div>
      </div>

      <AdPlaceholder type="header" />

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100">

        <p className="lead text-xl text-neutral-700 dark:text-neutral-300 font-medium italic border-l-4 border-blue-600 pl-6 mb-12 py-2">
          Sony has finally pulled back the curtain on the RX10 V. For tourists, wildlife observers, and multimedia creators, the promise of a single camera with an integrated 24-600mm F2.4-4.0 lens is the ultimate holy grail. But at a staggering launch price of $2,299.99, is this bridge camera worth the investment? Let's dive into the details.
        </p>

        <div className="not-prose bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 my-8">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>📋 Fact-Check Note:</strong> All specifications, feature lists, and pricing parameters compiled here have been cross-verified with official documentation from <a href="https://alphauniverse.com/stories/sony-rx10-v/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Sony Alpha Universe</a>, product listings on <a href="https://www.bhphotovideo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">B&H Photo</a>, and independent hands-on reviews from <a href="https://www.engadget.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">Engadget</a> and <a href="https://www.techradar.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">TechRadar</a>.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#1</span>
          The Legendary 24-600mm F2.4-4.0 Lens Remains Unmatched
        </h2>
        <p>
          As with the predecessor, the center of the RX10 V experience is its incredible <strong>ZEISS Vario-Sonnar T* 24-600mm equivalent lens</strong>. This F2.4-4.0 optical masterpiece provides a 25x zoom range, taking you from wide-angle landscapes to distant birds in flight. For travelers who don't want to carry a bag of heavy lenses, this all-in-one approach is virtually unmatched.
        </p>
        <p>
          The 20.1-megapixel 1-inch stacked Exmor RS CMOS sensor also returns. Although some might be disappointed that Sony didn't upgrade the resolution to compete with high-end mirrorless systems, the stacked architecture is crucial for preventing rolling shutter distortion during high-speed action and video pan shots.
        </p>

        <div className="not-prose relative aspect-video w-full my-10 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
          <Image
            src="/blog/sony-rx10-v-superzoom-4k-120p-review-2026/sony_rx10v_video_4k.webp"
            alt="Sony RX10 V camera recording high-quality 4K 120p video in active mode"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#2</span>
          New BIONZ XR Processor and Dedicated AI Unit
        </h2>
        <p>
          Where the camera separates itself from the nine-year-old RX10 IV is its processing engine. By carrying over the <strong>BIONZ XR processor</strong> and a dedicated deep-learning AI chip from its premium mirrorless camera lineup, the RX10 V delivers:
        </p>
        <ul>
          <li><strong>Real-time Recognition AF:</strong> Detection capabilities expanded from just humans and animals to also cover birds, insects, and vehicles (cars, trains, airplanes).</li>
          <li><strong>Advanced Tracking:</strong> Keeps lock on subjects even if they look down, turn away, or move behind minor obstacles.</li>
          <li><strong>Increased Speed:</strong> Continuous tracking and auto-exposure calculations operate at 60 fps.</li>
          <li><strong>AF Point Upgrade:</strong> Offers 575 phase-detection points spanning over 70% of the sensor grid.</li>
          <li><strong>Blackout-free shooting:</strong> Burst shooting goes up to 30 fps using the electronic shutter.</li>
        </ul>
        <p>
          Sony has also integrated its <strong>Continuous Shooting Speed Boost</strong> feature. By assigning this to a custom button, shooters can instantly jump to 30 fps to capture the exact micro-moment of action, then release to drop back to normal rates, conserving buffer space and memory card capacity.
        </p>

        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#3</span>
          Video Upgrades: A True Filmmaker's Bridge Camera
        </h2>
        <p>
          Video quality gets a generational leap. The RX10 V records <strong>4K up to 60p</strong> using the entire sensor width with no pixel binning, outputting highly detailed 10-bit 4:2:2 video internally. For high-speed slow motion, it supports <strong>4K at 120p</strong> (with a slight crop) and <strong>1080p up to 240fps</strong>.
        </p>
        <p>
          Filmmakers can shoot in Sony's <strong>S-Log3</strong> gamma curve to unlock over 14 stops of dynamic range, and import up to 16 custom LUTs directly into the camera to preview post-production looks on the fly. Furthermore, the active stabilization mode has been updated, smoothing out video shakes even when walking. If you are already shooting with other high-end Sony gear, like the ones discussed in our <Link href="/blog/gopro-mission-1-pro-review-8k-action-camera" className="text-blue-500 hover:underline">GoPro Mission 1 Pro review</Link> or mirrorless equivalents, the RX10 V fits perfectly into a multi-camera pipeline.
        </p>

        <div className="not-prose relative aspect-video w-full my-10 overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
          <Image
            src="/blog/sony-rx10-v-superzoom-4k-120p-review-2026/sony_rx10v_design.webp"
            alt="Close-up of the Sony RX10 V control deck showing dial layout and custom buttons"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#4</span>
          Overhauled Ergonomics and Pro-Level Controls
        </h2>
        <p>
          The stodgy, bulbous aesthetic of the RX10 IV has been replaced with a sleeker, more squared-off architecture inspired by the Sony A7 V. The grip is much larger and more comfortable, allowing a secure hold even when pointing the lens at its full 600mm extension.
        </p>
        <p>
          Physical controls have also been upgraded to match professional cameras:
        </p>
        <ul>
          <li>A new multi-direction <strong>joystick</strong> sub-selector for instant focus point positioning.</li>
          <li>Three manual lens control rings (aperture, zoom, focus).</li>
          <li>A dual top dial with a photo, video, and S&Q (Slow & Quick) mode selector.</li>
          <li>An AF-ON button on the rear for back-button focusing.</li>
          <li>Upgraded 3.69-million dot EVF and a bright 1.62-million dot rear display.</li>
        </ul>
        <p>
          The only major downside is the rear display layout. Despite the $2,300 price, <strong>the screen only tilts and does not flip out to the side</strong>. For vloggers, solo presenters, or selfie content creators, this omission is a notable disappointment.
        </p>

        <AdPlaceholder type="content" description="In-Article Advertisement" />

        <h2 className="text-3xl mt-16 mb-6 text-neutral-900 dark:text-neutral-50 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-lg text-lg">#5</span>
          Upgraded Connectivity: 4K Live Streaming & USB-C
        </h2>
        <p>
          The connection array has been modernized. Out goes the micro-USB connector, replaced with a high-speed <strong>USB-C (USB 3.2 Gen 2, 10Gbps)</strong> port that supports in-camera charging and power delivery during operation. Vloggers and live streamers will also appreciate native <strong>4K 30p live streaming</strong> over USB-C without requiring an HDMI capture card.
        </p>
        <p>
          The camera features a full-sized <strong>NP-FZ100 battery</strong> (the same one used in the A7 series), extending battery life to approximately 630 shots on a single charge. However, Sony decided to exclude a built-in flash, meaning you will need to slip an external speedlite into the multi-interface shoe if you require fill flash.
        </p>

        {/* Comparison Table */}
        <div className="not-prose my-12 bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <div className="bg-neutral-50 dark:bg-neutral-950 p-4 border-b border-neutral-200 dark:border-neutral-800">
            <h3 className="font-bold text-neutral-800 dark:text-neutral-200 text-center">Sony RX10 V vs RX10 IV</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-50/50 dark:bg-blue-900/10">
                  <th className="py-4 px-6 text-blue-600 dark:text-blue-400 font-bold uppercase text-xs">Feature</th>
                  <th className="py-4 px-6 text-neutral-700 dark:text-neutral-300 font-bold uppercase text-xs">Sony RX10 IV (2017)</th>
                  <th className="py-4 px-6 text-neutral-700 dark:text-neutral-300 font-bold uppercase text-xs">Sony RX10 V (2026)</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600 dark:text-neutral-400 text-sm">
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Processor</td>
                  <td className="py-4 px-6">BIONZ X</td>
                  <td className="py-4 px-6 font-bold text-blue-600">BIONZ XR + AI Unit</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">AF Points</td>
                  <td className="py-4 px-6">315 Phase-Detect</td>
                  <td className="py-4 px-6 font-bold text-blue-600">575 Phase-Detect</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Burst Shooting</td>
                  <td className="py-4 px-6">24 fps (With Blackout)</td>
                  <td className="py-4 px-6 font-bold text-blue-600">30 fps (Blackout-Free)</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Max Video</td>
                  <td className="py-4 px-6">4K @ 30p</td>
                  <td className="py-4 px-6 font-bold text-blue-600">4K @ 120p / 10-bit</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Built-in Flash</td>
                  <td className="py-4 px-6 text-green-600">Yes</td>
                  <td className="py-4 px-6 text-red-600 font-bold">No</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">USB Connection</td>
                  <td className="py-4 px-6">Micro USB</td>
                  <td className="py-4 px-6 font-bold text-blue-600">USB-C (3.2 Gen 2)</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800">
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Battery Life</td>
                  <td className="py-4 px-6">NP-FW50 (approx 400 shots)</td>
                  <td className="py-4 px-6 font-bold text-blue-600">NP-FZ100 (approx 630 shots)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-neutral-950 dark:text-neutral-100">Live Streaming</td>
                  <td className="py-4 px-6">No (Needs software/capture card)</td>
                  <td className="py-4 px-6 font-bold text-blue-600">Yes (Native 4K 30p via USB-C)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Verdict Box */}
        <div className="not-prose my-16 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-black text-white shadow-2xl border border-neutral-800">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-500">TechVantage</span> Verdict
          </h3>
          <p className="text-neutral-300 text-lg leading-relaxed mb-4">
            The Sony RX10 V is the ultimate all-in-one camera on the market in 2026. The 24-600mm lens combined with mirrorless-class AI autofocus and outstanding 4K 120p video makes it a force to be reckoned with. While $2,299.99 is a huge price to pay for a 1-inch sensor camera, it represents a monumental saving in both weight and cost compared to buying a full-frame mirrorless system with equivalent zoom lenses.
          </p>
          <p className="text-neutral-500 text-sm mt-6">
            Stay tuned to our <Link href="/category/hardware" className="text-blue-400 hover:text-blue-300 underline">Hardware category</Link> for additional reviews, or compare it with other pro setups in our <Link href="/blog/gopro-mission-1-pro-review-8k-action-camera" className="text-blue-400 hover:text-blue-300 underline">GoPro review</Link>.
          </p>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="mt-24 p-10 md:p-16 border rounded-[3rem] bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800 shadow-lg">
        <h2 className="mt-0 text-3xl font-extrabold tracking-tight mb-12 text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 shadow-sm transition-all hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 group"
            >
              <h4 className="text-xl font-bold mb-4 flex gap-4 transition-colors">
                <span className="text-neutral-300 dark:text-neutral-700 font-mono shrink-0">0{i + 1}.</span>
                <span className="text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600">{faq.question}</span>
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
