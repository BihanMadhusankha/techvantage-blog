import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Apple's New CEO John Ternus and His Forgotten 1998 VR Headset Origins",
  description: "Before AirPods and iPads, Apple's incoming CEO John Ternus was the lead mechanical engineer for the Virtual Research V8, a $50,000 VR headset from 1998. Palmer Luckey uncovers this fascinating tech relic.",
  image: "/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey/vr_headset_retro_1.webp",
});

export default function JohnTernusVROriginsPage() {
  const faqs = [
    {
      question: "Who is John Ternus?",
      answer: "John Ternus is a 25-year veteran at Apple, currently the Senior Vice President of Hardware Engineering. He is slated to become Apple's next CEO in September 2026, succeeding Tim Cook."
    },
    {
      question: "What is the Virtual Research V8?",
      answer: "The Virtual Research V8 was a high-end virtual reality headset released around 1998. It was primarily sold for military flight simulators and cost around $50,000. It was known for its wide field of vision and well-balanced mechanical design."
    },
    {
      question: "How is Palmer Luckey connected to John Ternus?",
      answer: "Palmer Luckey, the founder of Oculus, recently revealed on X (formerly Twitter) that he owns a Virtual Research V8 headset. According to his research, John Ternus was the lead mechanical engineer on that exact product before joining Apple."
    },
    {
      question: "Did Apple or John Ternus comment on the VR headset discovery?",
      answer: "As of now, neither Apple nor John Ternus has officially responded to requests for comment regarding his early work at Virtual Research."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Apple's New CEO John Ternus and His Forgotten 1998 VR Headset Origins",
    description: "Before AirPods and iPads, Apple's incoming CEO John Ternus was the lead mechanical engineer for the Virtual Research V8, a $50,000 VR headset from 1998.",
    date: "2026-04-28",
    url: "https://techvantage.blog/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey",
    image: "https://techvantage.blog/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey/vr_headset_retro_1.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'Hardware' || post.slug.includes('apple')).slice(0, 3);

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

      <header className="mb-14">
        <div className="flex flex-wrap items-center gap-3 text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/hardware" className="hover:underline bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 rounded-full">Hardware</Link>
          <Link href="/category/ai" className="hover:underline bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full text-purple-600 dark:text-purple-400">Tech History</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">April 28, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Apple's Incoming CEO <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">John Ternus</span> Built a $50K VR Headset in 1998
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          Before taking the reins at the world's most valuable tech company, John Ternus cut his teeth designing high-end military VR simulators. Oculus founder Palmer Luckey just dug up the evidence.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-600 to-indigo-500 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Tech Historian & Journalist</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey/vr_headset_retro_1.webp"
          alt="Virtual Research V8 VR headset from 1998, retro tech aesthetic"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white/90 text-sm font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            1998 Archive
          </div>
          <p className="text-white/80 text-sm md:text-base font-medium max-w-2xl">
            The Virtual Research V8 (1998) - A military-grade VR simulator that retailed for roughly $50,000.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-cyan-600 dark:prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl">

        <p className="lead text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-cyan-500 pl-8 mb-12 py-2">
          "From what I can tell, he was the lead mechanical engineer on the V8 I obtained when I was 16!" — Palmer Luckey
        </p>

        <p>
          Apple's <strong>John Ternus</strong> is a 25-year veteran of the Cupertino tech giant. Best known as Apple's hardware boss, he has been instrumental in the development of category-defining products like the AirPods and the iPad. In September, he is set to succeed Tim Cook as Apple's new CEO. But one of his very first engineering gigs was at a lesser-known, tiny outfit building virtual reality headsets.
        </p>

        <p>
          Defense startup founder and Oculus VR creator <strong>Palmer Luckey</strong> recently took to X (formerly Twitter) to reminisce about a product that Ternus had a heavy hand in during his early engineering days in the late 90s.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-cyan-500">01.</span> Unearthing the Virtual Research V8
        </h2>

        {/* Image 2: Engineering Lab */}
        <div className="relative w-full aspect-[21/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey/vr_engineering_90s_2.webp"
            alt="1990s VR engineering lab with blueprints and old tech"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </div>

        <p>
          Luckey posted a photo of a retro head-mounted display (HMD) from a company called Virtual Research. According to Luckey's findings, John Ternus was the lead mechanical engineer on the V8 model, which Luckey managed to acquire when he was just 16 years old.
        </p>

        <div className="my-12 p-8 rounded-3xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-900/10 dark:to-blue-900/10 border border-cyan-100 dark:border-cyan-900 shadow-inner">
          <h3 className="mt-0 mb-4 text-xl font-bold text-cyan-800 dark:text-cyan-300">The V8 Headset Specs</h3>
          <ul className="space-y-4 m-0 p-0 list-none text-neutral-700 dark:text-neutral-300 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 text-xl mt-1">✓</span> 
              <span><strong>Ergonomics:</strong> Described as "well-balanced and relatively lightweight" compared to clunky consumer products of the era.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 text-xl mt-1">✓</span> 
              <span><strong>Field of Vision (FOV):</strong> Far ahead of its time, offering an immersive visual spread critical for military use.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 text-xl mt-1">✓</span> 
              <span><strong>Market:</strong> Sold primarily to military flight simulators for an eye-watering $50,000.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">02.</span> From 1998 Prototypes to the Apple Vision Pro
        </h2>

        <p>
          A user guide for the V8 published online suggests the model was released in 1998. This aligns perfectly with Ternus's timeline; according to his LinkedIn profile, his only non-Apple job was a four-year stint as an engineer at Virtual Research from 1997 to 2001. A patent filed in 1995 and issued in 1998, during his tenure, describes a similar-looking "virtual display apparatus for use in a virtual reality system."
        </p>

        {/* Image 3: Apple Future Concept */}
        <div className="relative aspect-video w-full my-16 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(6,182,212,0.25)] group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/apple-ceo-john-ternus-virtual-reality-origins-palmer-luckey/apple_vr_future_3.webp"
            alt="Abstract futuristic Apple VR design bridging 90s tech"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          This historical nugget is fascinating given Apple's recent high-profile entry into the spatial computing market. In 2024, Apple debuted the <strong>Vision Pro</strong>. While the $3,500 mixed-reality headset received a lukewarm response due to its price and lack of killer apps, executives like Cook and Ternus have remained relentlessly optimistic about the future of VR.
        </p>

        <p className="text-xl text-center font-medium my-12 bg-neutral-100 dark:bg-neutral-900 py-8 px-6 rounded-3xl">
          "Vision Pro is an extraordinary product. It's like we reached into the future and pulled it into the present."<br/>
          <span className="text-base text-neutral-500 mt-4 block">— John Ternus (Tom's Guide Interview)</span>
        </p>

        <h3 className="text-2xl mt-12 mb-6 text-neutral-900 dark:text-white">A Return to Product-Minded Leadership</h3>
        <p>
          Tim Cook's background has heavily leaned into operations and supply chain management. John Ternus's appointment marks a return to a "product-minded" chief executive—a dynamic not seen since Steve Jobs. Knowing that the incoming CEO of Apple spent his formative engineering years physically building $50,000 VR headsets gives us a clear lens into where Apple's hardware roadmap might be heading next.
        </p>

      </div>

      {/* Tags & Keywords */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <div className="flex flex-wrap gap-2">
          {["Apple CEO", "John Ternus", "Palmer Luckey", "Virtual Research V8", "VR Headset", "Apple Vision Pro", "Tech History", "Oculus", "Silicon Valley", "Engineering"].map((tag, index) => (
            <span key={index} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-cyan-100 dark:hover:bg-cyan-900/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-lg">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-cyan-200 dark:hover:border-cyan-800">
              <h4 className="text-lg font-bold mb-3 text-neutral-800 dark:text-neutral-100">
                {faq.question}
              </h4>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
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
            <span className="w-2 h-6 bg-cyan-500 rounded-full inline-block"></span>
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
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">{post.title}</h3>
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
