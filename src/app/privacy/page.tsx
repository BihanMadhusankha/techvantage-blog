import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Privacy Policy",
  description: "Our commitment to protecting your data and privacy." 
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <header className="border-b pb-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-blue-600">
          Privacy Policy
        </h1>
        <p className="text-neutral-500">Last Updated: April 2, 2026</p>
      </header>

      <div className="prose dark:prose-invert lg:prose-lg max-w-none space-y-8">
        <section>
          <p>
            At <strong>TechVantage</strong>, accessible from <a href="https://www.techvantage.blog" className="text-blue-600 hover:underline">techvantage.blog</a>, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by TechVantage 
            and how we use it to improve your experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us, such as your name and email address when you contact us or subscribe to our newsletter. 
            We also automatically collect certain technical information when you visit our site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Log Files</h2>
          <p>
            TechVantage follows a standard procedure of using log files. These files log visitors when they visit websites. 
            The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamp, 
            referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable. 
            The purpose is for analyzing trends, administering the site, tracking users' movement, and gathering demographic information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Google AdSense & DoubleClick DART Cookies</h2>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors 
            based upon their visit to our site and other sites on the internet. Visitors may choose to decline the use of DART 
            cookies by visiting the Google ad and content network Privacy Policy at: 
            <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline ml-1">
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Third-Party Privacy Policies</h2>
          <p>
            TechVantage's Privacy Policy does not apply to other advertisers or websites. We advise you to consult the 
            respective Privacy Policies of these third-party ad servers for more detailed information. It may include 
            their practices and instructions about how to opt-out of certain options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul>
            <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
          </ul>
        </section>

        <section className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold mt-0">Consent</h2>
          <p className="mb-0">By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
        </section>
      </div>
    </div>
  );
}
