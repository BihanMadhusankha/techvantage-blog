import { POSTS } from '@/lib/posts';
import { 
  constructMetadata, 
  generateBlogPostSchema, 
  generateTechnicalArticleSchema, 
  generateFAQSchema,
  generateHowToSchema
} from '@/lib/seo';
import { notFound } from 'next/navigation';
import { AdPlaceholder } from '@/components/ads/AdPlaceholder';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) return constructMetadata({ title: 'Post Not Found' });

  return constructMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
  });
}

// Simple markdown-to-html converter for the 2,000-word guide
function formatContent(content: string) {
  return content
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6 uppercase tracking-tighter">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-12 mb-6 border-b pb-2">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-8 mb-4">$1</u>')
    .replace(/^\- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^\> (.*$)/gm, '<blockquote class="border-l-4 border-blue-600 pl-4 py-2 my-6 italic bg-neutral-50 dark:bg-neutral-900">$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code class="bg-neutral-100 dark:bg-neutral-800 px-1 rounded">$1</code>')
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0)
    .map(p => p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<block') || p.startsWith('<div') || p.startsWith('<figure') || p.startsWith('<img') || p.startsWith('<table') || p.startsWith('<ul') ? p : `<p class="mb-4 leading-relaxed">${p}</p>`)
    .join('\n');
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  // Define FAQs for schema and UI
  const faqs = [
    { 
      question: `Is running a local LLM better than using ChatGPT?`, 
      answer: `In 2026, **local AI is superior for privacy and latency**, while ChatGPT maintains an edge in massive-scale broad reasoning. For personal data and coding, local wins.` 
    },
    { 
      question: `Do I need an internet connection to use Ollama or LM Studio?`, 
      answer: `**No internet connection is required** once the models are downloaded. This is the cornerstone of "Private AI."` 
    },
    { 
      question: `Can I run local AI on a laptop without a dedicated GPU?`, 
      answer: `**Yes**, thanks to **NPU acceleration** in 2026 AI PCs. Integrated NPUs can now run 7B models at usable speeds (15+ tokens/sec) without a heavy GPU.` 
    },
    { 
      question: `What is the minimum RAM requirement for 7B or 14B models in 2026?`, 
      answer: `For **7B models, 32GB LPDDR5X** is the sweet spot. For **14B+ models, 64GB** is highly recommended to avoid swapping.` 
    },
    { 
      question: `Does running local AI damage my hardware?`, 
      answer: `**No**, modern AI PCs are designed for sustained inference workloads, though they do generate significant heat.` 
    }
  ];

  const schemas: any[] = [
    generateBlogPostSchema({
      title: post.title,
      description: post.description,
      date: post.date,
      url: `https://techvantage.demo/blog/${post.slug}`,
      image: post.image,
      author: post.author,
    }),
    generateTechnicalArticleSchema({
      title: post.title,
      description: post.description,
      date: post.date,
      url: `https://techvantage.demo/blog/${post.slug}`,
      image: post.image,
      dependencies: ['Windows 11/12', 'NPU Acceleration', '32GB+ RAM'],
    }),
    generateFAQSchema(faqs)
  ];

  // Add HowTo schema specifically for the tutorial post
  if (post.slug.includes('setup-run-local-llms')) {
    schemas.push(generateHowToSchema({
      name: post.title,
      description: post.description,
      image: post.image,
      steps: [
        { name: 'Hardware Audit', text: 'Verify you have 32GB+ RAM and a 45+ TOPS NPU.' },
        { name: 'Install LM Studio', text: 'Download the 2026 AI PC optimized version.' },
        { name: 'Configure NPU', text: 'Select QNN or OpenVINO acceleration in settings.' },
        { name: 'Run Inference', text: 'Load a Llama-4-mini GGUF model and start chatting.' }
      ]
    }));
  }

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-4xl">
      {schemas.map((schema, i) => (
        <script
          key={i}
          id={`json-ld-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">
          <Link href={`/category/${post.category.toLowerCase()}`} className="hover:underline">
            {post.category}
          </Link>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold text-blue-600">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold">{post.author}</div>
            <div className="text-xs text-neutral-500">Chief Solutions Architect</div>
          </div>
        </div>
      </header>

      <div className="relative aspect-[21/9] w-full mb-12 overflow-hidden rounded-xl bg-neutral-100 shadow-xl">
        <Image 
          src={`${post.image.split('?')[0]}?auto=format&fit=crop&q=75&w=1600`} 
          alt={post.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <div className="prose dark:prose-invert lg:prose-xl max-w-none">
        {/* Render content with a simple formatter to handle the long guides */}
        <div 
          className="content-body"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} 
        />

        <AdPlaceholder type="content" description="In-Post Advertisement" />

        {/* Dynamic Verdict Section */}
        <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">Technical Verdict (2026 Edition)</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Key Advantages
            </h4>
            <ul className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>**Hyper-Latency**: Sub-10ms response times.</li>
              <li>**Infinite Privacy**: Zero external API calls.</li>
              <li>**Future-Proof**: Supports unified memory architectures.</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
            <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" /> Current Bottlenecks
            </h4>
            <ul className="text-sm space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>High initial disk space (100GB+ for libraries).</li>
              <li>Thermal throttling on thin-and-light NPU laptops.</li>
            </ul>
          </div>
        </div>

        {/* Dynamic FAQ Section */}
        <div className="my-16 p-8 md:p-12 border rounded-3xl bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border-neutral-200 dark:border-neutral-800">
          <h2 className="mt-0 tracking-tight">Expert FAQ: Local AI Mastery</h2>
          <div className="space-y-8 mt-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b last:border-0 pb-6 last:pb-0 border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xl font-bold mb-3 flex gap-3 text-blue-600">
                  <span className="opacity-30">Q{i+1}:</span> {faq.question}
                </h4>
                <p 
                  className="text-neutral-600 dark:text-neutral-400 leading-relaxed pl-10" 
                  dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t">
        <h3 className="text-2xl font-bold mb-8">Related 2026 Strategy Guides</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {POSTS.filter(p => p.id !== post.id).slice(0, 2).map((recommended) => (
            <Link key={recommended.id} href={`/blog/${recommended.slug}`} className="group relative">
              <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-neutral-100 shadow-md">
                <Image 
                  src={recommended.image} 
                  alt={recommended.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors leading-snug">
                {recommended.title}
              </h4>
            </Link>
          ))}
        </div>
      </footer>
    </article>
  );
}
