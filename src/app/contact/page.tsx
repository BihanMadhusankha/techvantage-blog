import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({ 
  title: "Contact Us",
  description: "Get in touch with the TechVantage team for inquiries and feedback." 
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Have a question about a technical guide? or want to pitch a guest post for the 2026 tech series? 
        Reach out to us using the form below.
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-2 border rounded dark:bg-neutral-900 dark:border-neutral-800" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded dark:bg-neutral-900 dark:border-neutral-800" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full p-2 border rounded h-32 dark:bg-neutral-900 dark:border-neutral-800"></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2 text-blue-600 uppercase tracking-wide text-sm">Email Us</h3>
            <p className="text-neutral-600 dark:text-neutral-400">editorial@techvantage.demo</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-blue-600 uppercase tracking-wide text-sm">Office</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              123 Innovation Drive<br />
              Tech City, TC 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
