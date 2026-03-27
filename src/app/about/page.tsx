import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "About Us",
  description: "Learn more about TechVantage and our mission to demystify 2026 tech trends." 
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About TechVantage</h1>
      <div className="prose dark:prose-invert lg:prose-xl">
        <p>
          Founded in 2026, <strong>TechVantage</strong> was created with a single mission: 
          to provide the most comprehensive, accessible, and forward-looking technical guides 
          for the rapidly evolving technological landscape.
        </p>
        <h2>Our Mission</h2>
        <p>
          We believe that technology should empower everyone. As we enter the era of Agentic AI, 
          Quantum Cloud 3.0, and sustainable hardware, the gap between cutting-edge innovation 
          and everyday implementation is wider than ever. We are here to bridge that gap.
        </p>
        <h2>What We Cover</h2>
        <ul>
          <li><strong>Artificial Intelligence:</strong> Deep dives into autonomous agents and multimodal LLMs.</li>
          <li><strong>Software Infrastructure:</strong> Navigating Cloud 3.0 and AI-native development.</li>
          <li><strong>Sustainable Hardware:</strong> Exploring sodium-ion batteries and green computing.</li>
          <li><strong>Practical Tutorials:</strong> Tactical "How-To" guides for the modern developer and enthusiast.</li>
        </ul>
      </div>
    </div>
  );
}
