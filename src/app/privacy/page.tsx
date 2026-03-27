import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Privacy Policy",
  description: "Our commitment to protecting your data and privacy." 
});

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p>Last Updated: March 27, 2026</p>
        <p>
          At TechVantage, accessible from techvantage.demo, one of our main priorities is the privacy of our visitors. 
          This Privacy Policy document contains types of information that is collected and recorded by TechVantage 
          and how we use it.
        </p>
        <h2>Log Files</h2>
        <p>
          TechVantage follows a standard procedure of using log files. These files log visitors when they visit websites. 
          All hosting companies do this and a part of hosting services' analytics. The information collected by log files 
          include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
          referring/exit pages, and possibly the number of clicks.
        </p>
        <h2>Google DoubleClick DART Cookie</h2>
        <p>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, 
          to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.
        </p>
        <h2>Our Advertising Partners</h2>
        <p>
          Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. 
          Each of our advertising partners has their own Privacy Policy for their policies on user data. 
          For easier access, we hyperlinked to their Privacy Policies below:
        </p>
        <ul>
          <li>Google: https://policies.google.com/technologies/ads</li>
        </ul>
      </div>
    </div>
  );
}
