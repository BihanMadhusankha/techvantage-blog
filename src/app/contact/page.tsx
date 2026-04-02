import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with the TechVantage team for inquiries and feedback."
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-neutral-500 dark:text-neutral-400">
              Have a complex tech query or want to discuss 2026 NPU benchmarks?
              I'm always open to technical discussions.
            </p>
          </header>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold">Email</p>
                <p className="text-lg font-medium">techvantage@techvantage.blog</p>
              </div>
            </div>

            {/*<div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold">YouTube</p>
                <a href="https://youtube.com/@BihanTech" target="_blank" className="text-lg font-medium hover:text-blue-600 transition-colors">Bihan Tech</a>
              </div>
            </div>*/}

            {/*<div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold">Facebook</p>
                <a href="https://facebook.com/BihanTech" target="_blank" className="text-lg font-medium hover:text-blue-600 transition-colors">Bihan Madhusankha</a>
              </div>
            </div>*/}
          </div>
        </div>

        <div className="bg-neutral-50 dark:bg-neutral-900 p-8 md:p-12 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 uppercase tracking-wider text-neutral-400">Name</label>
                <input
                  type="text"
                  placeholder="Bihan M."
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 uppercase tracking-wider text-neutral-400">Email</label>
                <input
                  type="email"
                  placeholder="bihan@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 uppercase tracking-wider text-neutral-400">Subject</label>
              <input
                type="text"
                placeholder="2026 AI Query"
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1 uppercase tracking-wider text-neutral-400">Message</label>
              <textarea
                placeholder="How do I optimize my NPU for Llama-4?"
                className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium h-40 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-95">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
