import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "How to Get the Super Rocket Radar to Face Giovanni in Pokémon GO",
  description: "Learn the new and only way to obtain the Super Rocket Radar and face Team GO Rocket Boss Giovanni in Pokémon GO. Complete the Steeled Resolve GO Pass before the deadline.",
  image: "/blog/pokemon-go-super-rocket-radar-giovanni/giovanni_showdown.webp",
});

export default function PokemonGoGiovanniPage() {
  const faqs = [
    {
      question: "Can new players get the Giovanni Special Research?",
      answer: "No. Even progressing past the introductory 'Troubling Situation' Special Research no longer leads to any new Giovanni Special Research. Taking on the GO Pass is now the one and only way to obtain the Super Rocket Radar."
    },
    {
      question: "How do I get the Super Rocket Radar for free?",
      answer: "You must reach Rank 30 of the GO Pass Basic version before Monday, May 4, at 8:00 p.m. local time by earning points through tasks like winning raids and hatching eggs."
    },
    {
      question: "What is the fastest way to get the Super Rocket Radar?",
      answer: "You can opt to pay for the GO Pass Deluxe version for US$4.99 to instantly unlock a Super Rocket Radar at Rank 1. You can also earn a second one by reaching Rank 30."
    },
    {
      question: "How do I earn points for the GO Pass?",
      answer: "You can earn up to 500 extra points daily by completing tasks such as winning a raid (100 points), hatching an egg (40 points), or catching a Pokémon (5 points). From May 2 to May 4, the daily limit is removed."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "How to Get the Super Rocket Radar to Face Giovanni in Pokémon GO",
    description: "Team GO Rocket battles are changing. Discover the new Steeled Resolve GO Pass requirements to secure your Super Rocket Radar and catch a Shadow Legendary.",
    date: "2026-05-03",
    url: "https://techvantage.blog/blog/pokemon-go-super-rocket-radar-giovanni",
    image: "https://techvantage.blog/blog/pokemon-go-super-rocket-radar-giovanni/giovanni_showdown.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'Software' || post.category === 'Tutorials').slice(0, 3);

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
        <div className="flex flex-wrap items-center gap-3 text-red-600 dark:text-red-400 font-bold uppercase tracking-widest text-xs mb-6">
          <Link href="/category/software" className="hover:underline bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">Gaming</Link>
          <Link href="/category/tutorials" className="hover:underline bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">Mobile</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">May 03, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          How to Get the <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-purple-600">Super Rocket Radar</span> to Face Giovanni in Pokémon GO
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          The iconic Special Research is dead. Niantic has overhauled how trainers hunt down the Team GO Rocket Boss. Here is everything you need to know about the new Steeled Resolve GO Pass.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Gaming & Tech Analyst</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/pokemon-go-super-rocket-radar-giovanni/giovanni_showdown.webp"
          alt="Dramatic cinematic showdown with Team GO Rocket Boss Giovanni"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            META UPDATE
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            Prepare for trouble, and make it double. Facing Giovanni is no longer just a quest line.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-red-600 dark:prose-a:text-red-400 hover:prose-a:text-red-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        <p className="lead text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-red-600 pl-8 mb-12 py-2">
          Team GO Rocket battles are some of the most exciting aspects of Pokémon GO, and the ultimate test in this grind is facing Giovanni. Beating the suave Boss of the villainous group lets you catch a Shadow Legendary, often a new force to be reckoned with in both the PvE and PvP meta.
        </p>

        <p>
          For more than six years, each new GO Rocket rotation would have players looking for the <strong>Super Rocket Radar</strong>, obtained through the completion of the popular Special Research involving battles with Grunts and Leaders like Arlo, Cliff, and Sierra.
        </p>

        <p>
          Now, a huge change has the American player base and trainers worldwide baffled and frustrated: <strong>the Team GO Rocket Special Research IS NO MORE</strong>, even for new players. If you’re wondering what the new method to get the Super Rocket Radar is, here are all the critical details.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">01.</span> Giovanni Super Rocket Radar: How to get?
        </h2>

        {/* Image 2: Radar */}
        <div className="relative w-full aspect-[21/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
          <Image
            src="/blog/pokemon-go-super-rocket-radar-giovanni/super_rocket_radar.webp"
            alt="Glowing Super Rocket Radar emitting red and purple aura"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            Vital Item
          </div>
        </div>

        <p>
          Starting from the Steeled Resolve event on Tuesday, April 28, at 10:00 a.m. local time, players need to progress through the <strong>Steeled Resolve GO Pass</strong> to unlock the Super Rocket Radar. 
        </p>
        
        <p>
          A Super Rocket Radar can still be obtained for free, but you will have to reach <strong>Rank 30 of the GO Pass Basic version</strong> before Monday, May 4, at 8:00 p.m. local time.
        </p>

        <p>
          Alternatively, players can opt to pay for the GO Pass Deluxe version and <strong>instantly get the Super Rocket Radar at Rank 1</strong>.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-red-500">02.</span> Completing GO Pass Basic (Free Version)
        </h2>

        <p>
          Progressing through the various stages of GO Pass Basic to reach Rank 30 is quite the grind. Progression through the Ranks is done by earning points, and you can earn up to 500 extra points daily by completing certain tasks:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900 text-center">
            <div className="text-4xl mb-2">⚔️</div>
            <div className="font-bold text-neutral-900 dark:text-white mb-1">Win a Raid</div>
            <div className="text-red-600 dark:text-red-400 font-black text-xl">100 Points</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-900 text-center">
            <div className="text-4xl mb-2">🥚</div>
            <div className="font-bold text-neutral-900 dark:text-white mb-1">Hatch an Egg</div>
            <div className="text-purple-600 dark:text-purple-400 font-black text-xl">40 Points</div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-900 text-center">
            <div className="text-4xl mb-2">☄️</div>
            <div className="font-bold text-neutral-900 dark:text-white mb-1">Catch a Pokémon</div>
            <div className="text-blue-600 dark:text-blue-400 font-black text-xl">5 Points</div>
          </div>
        </div>

        <div className="my-10 p-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 shadow-inner">
          <h3 className="mt-0 mb-2 text-lg font-bold text-yellow-800 dark:text-yellow-300 flex items-center gap-2">
            ⚠️ Important Weekend Bonus
          </h3>
          <p className="text-neutral-700 dark:text-neutral-300 font-medium m-0">
            From Saturday, May 2, at 12:00 a.m. to Monday, May 4, at 7:59 p.m. local time, <strong>there is no daily limit</strong> for how many points you can collect. This is your prime window to grind if you haven't reached Rank 30 yet!
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-purple-500">03.</span> Completing GO Pass Deluxe (Paid Version)
        </h2>

        {/* Image 3: Shadow Legendary */}
        <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(168,85,247,0.25)] group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/pokemon-go-super-rocket-radar-giovanni/shadow_legendary.webp"
            alt="Shadow Legendary Pokémon hovering in AR mode"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          For those who want to skip the grind or maximize their Shadow Legendary encounters, Niantic offers premium tiers:
        </p>

        <ul>
          <li><strong>GO Pass Deluxe ($4.99 USD):</strong> Upgrades you to the paid version offering more rewards and quicker progression. You instantly get a Super Rocket Radar at Rank 1.</li>
          <li><strong>GO Pass Deluxe + 6 Ranks ($6.99 USD):</strong> Automatically grants enough points to hit Rank 7 right out of the gate.</li>
        </ul>

        <p>
          Because the paid version grants an instant radar at Rank 1, <strong>and</strong> you can still earn the free Super Rocket Radar at Rank 30, players who upgrade via the Pokémon GO Web Store can effectively secure <strong>two Super Rocket Radars</strong> during this rotation.
        </p>

        <h3 className="text-2xl mt-12 mb-6 text-neutral-900 dark:text-white">Can New Players Still Get the Giovanni Special Research?</h3>
        <p>
          <strong>No.</strong>
        </p>
        <p>
          Even progressing past the introductory 'Troubling Situation' Special Research, which historically paved the way to the latest Giovanni quest (such as "Precious Pals Taken Over"), no longer triggers a new Special Research.
        </p>
        <p>
          As such, taking on the GO Pass is now the <strong>one and only way</strong> to obtain the Super Rocket Radar and face Giovanni. Make sure you plan your play sessions accordingly before the Steeled Resolve event concludes!
        </p>

      </div>

      {/* Tags & Keywords */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["Pokémon GO", "Giovanni", "Super Rocket Radar", "Team GO Rocket", "Shadow Legendary", "GO Pass Basic", "GO Pass Deluxe", "Steeled Resolve Event", "Niantic", "Mobile Gaming USA", "Pokémon GO Guide", "PvP Meta"].map((tag, index) => (
            <span key={index} className="px-4 py-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-red-100 dark:hover:bg-red-900/50 hover:text-red-700 dark:hover:text-red-300 transition-colors cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 shadow-lg border border-neutral-200 dark:border-neutral-800">
        <h2 className="mt-0 text-3xl font-black tracking-tight mb-10 text-neutral-900 dark:text-white flex items-center gap-4">
          <span className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 text-lg">💡</span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm transition-all hover:shadow-md hover:border-red-200 dark:hover:border-red-800">
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
            <span className="w-2 h-6 bg-red-500 rounded-full inline-block"></span>
            More Tech & Gaming News
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
                  <h3 className="text-lg font-bold mb-3 text-neutral-900 dark:text-neutral-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-tight">{post.title}</h3>
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
