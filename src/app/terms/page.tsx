import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Terms of Service",
  description: "Rules and guidelines for using the TechVantage platform." 
});

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <header className="border-b pb-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Terms of <span className="text-blue-600">Service</span>
        </h1>
        <p className="text-neutral-500">Last Updated: March 27, 2026</p>
      </header>

      <div className="prose dark:prose-invert lg:prose-lg max-w-none space-y-8">
        <section className="bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/20">
          <h2 className="text-2xl font-bold mt-0 text-blue-600">Important Disclaimer</h2>
          <p className="mb-0 italic">
            <strong>Educational Purposes Only:</strong> The technical advice, tutorials, and hardware 
            optimization guides provided on TechVantage are for <strong>informational and educational 
            purposes only</strong>. While we strive for accuracy in 2026 tech trends, implementing 
            advanced NPU/GPU modifications or DIY energy storage solutions carries inherent risks. 
            TechVantage and Bihan Madhusankha are not liable for any hardware damage or data loss.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">1. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, TechVantage and/or its licensors own the intellectual property 
            rights for all original content published on this platform. All intellectual property 
            rights are reserved. You may access this from TechVantage for your own personal use 
            subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from TechVantage without proper attribution.</li>
            <li>Sell, rent or sub-license material from TechVantage.</li>
            <li>Reproduce, duplicate or copy material for commercial gain.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">2. User Conduct</h2>
          <p>
            By using TechVantage, you agree to use the site only for lawful purposes. You are 
            prohibited from using the site to engage in any activity that could damage, disable, 
            or impair the website or interfere with any other party's use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">3. Content Reliability</h2>
          <p>
            We do not warrant that the information on this website is complete or accurate; nor 
            do we commit to ensuring that the website remains available or that the material 
            is kept up to date with the latest 2026 hardware iterations.
          </p>
        </section>

        <footer className="pt-8 text-sm text-neutral-400 border-t">
          <p>© 2026 TechVantage by Bihan Madhusankha. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
