import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Terms of Service",
  description: "Rules and guidelines for using the TechVantage platform." 
});

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert">
        <p>Welcome to TechVantage.</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use TechVantage if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h2>License</h2>
        <p>Unless otherwise stated, TechVantage and/or its licensors own the intellectual property rights for all material on TechVantage. All intellectual property rights are reserved.</p>
        <h2>User Comments</h2>
        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. TechVantage does not filter, edit, publish or review Comments prior to their presence on the website.</p>
        <h2>Hyperlinking to our Content</h2>
        <p>The following organizations may link to our Website without prior written approval:</p>
        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
        </ul>
      </div>
    </div>
  );
}
