import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "About Us",
  description: "Learn more about TechVantage and our mission to demystify 2026 tech trends." 
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="space-y-12">
        <header className="border-b pb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            About <span className="text-blue-600">TechVantage</span>
          </h1>
          <p className="text-xl text-neutral-500 dark:text-neutral-400 font-medium">
            Bridging the gap between 2026 AI innovation and practical implementation.
          </p>
        </header>

        <div className="prose dark:prose-invert lg:prose-xl max-w-none">
          <p className="lead">
            Welcome to <strong>TechVantage</strong>, your premier destination for high-authority 
            insights into the 2026 technological frontier. Founded by <strong>Bihan Madhusankha</strong>, 
            a BIT student at the <strong>University of Moratuwa</strong> and the creator behind 
            the <strong>Bihan Tech</strong> YouTube channel, this platform is built on a foundation 
            of technical expertise and a passion for simplifying the complex.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Our Mission</h2>
          <p>
            As we navigate the rapidly evolving landscape of 2026, the complexity of technology 
            can be overwhelming. Our mission is to **simplify 2026 AI trends, NPU hardware, and 
            PC optimization** for tech enthusiasts and professionals alike. We believe that 
            mastering these tools is essential for staying ahead in an AI-native world.
          </p>

          <div className="my-12 p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="mt-0 text-2xl font-bold">What We Specialize In</h3>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span> 
                <span><strong>AI Agent Deployment:</strong> Tactical guides for autonomous systems.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span> 
                <span><strong>NPU Hardware Optimization:</strong> Mastering Intel, AMD, and Qualcomm NPUs.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span> 
                <span><strong>Private AI Workflows:</strong> Running local LLMs for maximum data security.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">✓</span> 
                <span><strong>Next-Gen PC Tuning:</strong> Squeezing every bit of performance from 2026 builds.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Meet the Founder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/20">
            <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shrink-0">
              BM
            </div>
            <div>
              <p className="m-0 text-lg font-bold">Bihan Madhusankha</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">BIT Student, University of Moratuwa | Content Creator, Bihan Tech</p>
              <p className="text-neutral-600 dark:text-neutral-400 italic">
                "TechVantage is more than just a blog; it's a technical lab where I document 
                the future of computing. My goal is to empower the next generation of tech 
                innovators with deep, authoritative knowledge."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
