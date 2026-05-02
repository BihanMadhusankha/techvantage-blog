import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, generateBlogPostSchema, generateFAQSchema } from "@/lib/seo";
import { POSTS } from '@/lib/posts';

export const metadata = constructMetadata({
  title: "Google COSMO: The Accidental Leak of Android's Next-Gen AI Assistant",
  description: "Google briefly leaked 'COSMO', an experimental AI assistant powered by Gemini Nano on the Play Store. Here is everything we know about its offline capabilities, browser automation, and deep research skills.",
  image: "/blog/google-cosmo-ai-assistant-app/cosmo_app_hero.webp",
});

export default function GoogleCosmoAIPage() {
  const faqs = [
    {
      question: "What is Google COSMO?",
      answer: "COSMO is an experimental AI assistant application for Android devices developed by Google Research. It was accidentally published to the Google Play Store before being quickly removed."
    },
    {
      question: "Does COSMO work offline?",
      answer: "Yes, COSMO utilizes a hybrid fulfillment model. It can leverage an on-device local Gemini Nano model for offline tasks and privacy-centric processes, while seamlessly falling back to server-side processing for more complex queries."
    },
    {
      question: "What skills or features does the COSMO app have?",
      answer: "The leaked version showcased capabilities including 'List Tracker', 'Document Writer', 'Calendar Event Suggester', a 'Browser Agent' using Mariner, 'Deep Research', and automatic 'Conversation Summaries'."
    },
    {
      question: "Can I download Google COSMO right now?",
      answer: "Currently, no. The 1.13 GB app was removed from the Play Store shortly after its accidental release. It remains a test bed for Google Research rather than a finalized consumer product."
    }
  ];

  const blogSchema = generateBlogPostSchema({
    title: "Google's Secret 'COSMO' AI Assistant Briefly Leaks on the Play Store",
    description: "An in-depth look at Google COSMO, the experimental Gemini Nano-powered AI assistant that accidentally went live on the Play Store, revealing advanced on-device capabilities like deep research and browser automation.",
    date: "2026-05-02",
    url: "https://techvantage.blog/blog/google-cosmo-ai-assistant-app",
    image: "https://techvantage.blog/blog/google-cosmo-ai-assistant-app/cosmo_app_hero.webp",
    author: "Bihan Madhusankha",
  });

  const relatedPosts = POSTS.filter(post => post.category === 'AI' || post.category === 'Software').slice(0, 3);

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
          <Link href="/category/ai" className="hover:underline bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 rounded-full">AI Assistant</Link>
          <Link href="/category/software" className="hover:underline bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-neutral-600 dark:text-neutral-400">Android OS</Link>
          <span className="text-neutral-400">•</span>
          <span className="text-neutral-500">May 02, 2026</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight text-neutral-900 dark:text-white">
          Google's Accidental Leak: The <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">COSMO AI Assistant</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl font-medium leading-relaxed">
          For a brief window yesterday, Google published an experimental 1.13 GB AI app called "COSMO" on the Play Store. Powered by a local Gemini Nano model, it reveals Google's ambitious roadmap for autonomous, on-device intelligence.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-neutral-100 dark:border-neutral-800 py-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white shadow-lg text-xl ring-2 ring-white dark:ring-neutral-900">
            BM
          </div>
          <div>
            <div className="text-base font-bold text-neutral-900 dark:text-white">Bihan Madhusankha</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">AI & Mobile Ecosystem Analyst</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full mb-16 overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 group">
        <Image
          src="/blog/google-cosmo-ai-assistant-app/cosmo_app_hero.webp"
          alt="Futuristic smartphone displaying the leaked Google COSMO AI assistant interface"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            PLAY STORE LEAK
          </div>
          <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl">
            A fleeting glimpse into Google Research's com.google.research.air.cosmo package.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none prose-headings:font-black prose-a:text-cyan-600 dark:prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-img:rounded-3xl font-sans">

        <p className="lead text-2xl text-neutral-800 dark:text-neutral-200 font-medium italic border-l-4 border-cyan-500 pl-8 mb-12 py-2">
          "COSMO brings the power of artificial intelligence directly onto your device. From organizing your day to answering complex questions, COSMO works behind the scenes to simplify your life." — Official Play Store Listing
        </p>

        <p>
          It is rare for Google to make a deployment mistake of this magnitude, but yesterday, the tech giant accidentally pushed a highly experimental internal application directly to its main Google Play Store account. The app, dubbed <strong>COSMO</strong>, gives us an unprecedented look into what the future of the <a href="https://blog.google/technology/ai/" target="_blank" rel="noopener noreferrer">Google AI</a> ecosystem will look like on Android.
        </p>

        <p>
          Although the application has since been pulled, sharp-eyed tech enthusiasts managed to download the hefty <strong>1.13 GB package</strong> (com.google.research.air.cosmo). The massive file size isn't bloated code—it's the footprint of a fully integrated, localized version of the <strong>Gemini Nano</strong> model.
        </p>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-blue-500">01.</span> The Hybrid Fulfillment Engine
        </h2>

        {/* Image 2: Gemini Nano Local AI Chip */}
        <div className="relative w-full aspect-[21/9] my-14 overflow-hidden rounded-[2.5rem] shadow-xl group border border-neutral-200 dark:border-neutral-800 bg-neutral-900">
          <Image
            src="/blog/google-cosmo-ai-assistant-app/cosmo_gemini_nano.webp"
            alt="Conceptual visualization of Google Gemini Nano AI running locally on a mobile device chip"
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out opacity-90"
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold tracking-widest uppercase shadow-lg border border-white/10">
            On-Device Processing
          </div>
        </div>

        <p>
          According to the app's settings page, COSMO operates using a sophisticated "Fulfillment Model" menu that offers three distinct operational modes. This architecture is crucial for understanding how <Link href="/blog/claude-4-6-vs-gemini-3-1-comparison">Google's broader AI strategy</Link> is shifting towards privacy and edge computing.
        </p>
        
        <ul>
          <li><strong>Hybrid (PI when online, Nano offline):</strong> The default state. It relies on the localized Gemini Nano app for immediate, offline tasks, but seamlessly hands off processing to Google's massive server-side models (PI) when deep computational power is required.</li>
          <li><strong>Nano Only:</strong> A strict offline mode forcing the device to rely purely on the local 1.13 GB Gemini Nano model, guaranteeing absolute data privacy.</li>
          <li><strong>PI Only:</strong> A cloud-only mode acting like a traditional server-bound assistant.</li>
        </ul>

        <p>
          The fact that Google is testing a "Nano Only" mode proves they are taking the <a href="/blog/setup-run-local-llms-windows-2026-npu-gpu">local AI computing trend</a> very seriously, offering a stark contrast to cloud-reliant competitors.
        </p>

        <div className="my-12 p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900 shadow-inner">
          <h3 className="mt-0 mb-4 text-xl font-bold text-blue-800 dark:text-blue-300">An Experimental "Test Bed" Interface</h3>
          <p className="text-neutral-700 dark:text-neutral-300 font-medium m-0 leading-relaxed">
            Upon installation, users are greeted by a surprisingly spartan, bare-bones chat interface. It asks for extensive system permissions right out of the gate. This lack of polish confirms that COSMO is not a consumer-ready replacement for Google Assistant or the Gemini App, but rather an internal testing ground for Google Research to refine advanced agentic behaviors.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 text-neutral-900 dark:text-white flex items-center gap-3">
          <span className="text-cyan-500">02.</span> The 'Skills': An Agentic Arsenal
        </h2>

        {/* Image 3: COSMO Skills Showcase */}
        <div className="relative aspect-[16/9] w-full my-16 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(6,182,212,0.25)] group border border-neutral-200 dark:border-neutral-800">
          <Image
            src="/blog/google-cosmo-ai-assistant-app/cosmo_ai_skills.webp"
            alt="Holographic interface showing multiple AI capabilities like Document Writer and Deep Research above a smartphone"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1.5s]"
          />
        </div>

        <p>
          The most fascinating revelation from the leak is the explicit list of "Skills" programmed into COSMO. These capabilities hint at a deeply context-aware AI that actively monitors your screen and communications to offer preemptive assistance.
        </p>

        <p>The core capabilities built into the COSMO prototype include:</p>

        <ul>
          <li><strong>Deep Research:</strong> If you discuss a complicated topic requiring multiple sources, COSMO will offer to compile a full, multi-source research report on your behalf.</li>
          <li><strong>Browser Agent:</strong> A capability to automate web tasks using "Mariner," presumably an internal Google web-scraping and action-taking framework.</li>
          <li><strong>Calendar Event Suggester:</strong> The AI actively parses conversations. If you agree on a time with a contact, it immediately prompts you to schedule it.</li>
          <li><strong>Quick Photo Lookup:</strong> Mentions of a specific photo in a chat will prompt the AI to find it in your gallery seamlessly, preventing context-switching.</li>
          <li><strong>Conversation Summary:</strong> Automatically generates summaries of recently ended conversations when you switch contexts.</li>
          <li><strong>Recall & Context:</strong> Abilities labeled "People Understanding" and "Event Understanding" suggest the AI builds a localized graph of your relationships and activities.</li>
        </ul>

        <h3 className="text-2xl mt-12 mb-6 text-neutral-900 dark:text-white">Why This Matters for the USA Audience</h3>
        <p>
          For American consumers who are increasingly balancing privacy concerns with the desire for cutting-edge productivity, COSMO represents the holy grail. By leveraging the local Gemini Nano model for tasks like "Conversation Summary" and "Quick Photo Lookup," Google is ensuring that highly sensitive personal data never leaves the device. 
        </p>
        
        <p>
          While we may not see the app "COSMO" officially launch on the Play Store, there is zero doubt that the "Skills" tested within this leaked package will serve as the foundation for the next major Android OS update.
        </p>

      </div>

      {/* Tags & Keywords */}
      <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
        <h4 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">Related Keywords</h4>
        <div className="flex flex-wrap gap-2">
          {["Google COSMO", "Gemini Nano", "AI Assistant", "Android AI", "Google Research", "Play Store Leak", "On-Device AI", "Machine Learning USA", "Deep Research AI", "Tech News", "Mobile Technology", "Smartphone AI"].map((tag, index) => (
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
