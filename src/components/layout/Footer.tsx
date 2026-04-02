import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-4 inline-block">
              TECH<span className="text-blue-600">VANTAGE</span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-xs">
              Navigating the future of technology with in-depth guides,
              expert insights, and the latest trends for 2026 and beyond.
            </p>
            {/* Social links — uncomment when profiles are ready
            <div className="flex space-x-4 mt-6">
              <a href="https://youtube.com/@BihanTech" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-neutral-500 hover:text-red-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href="https://facebook.com/BihanTech" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-500 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://twitter.com/techvantage" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            */}
          </div>

          {/* Categories column */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/category/software" className="hover:text-blue-600">Software</Link></li>
              <li><Link href="/category/hardware" className="hover:text-blue-600">Hardware</Link></li>
              <li><Link href="/category/ai" className="hover:text-blue-600">Artificial Intelligence</Link></li>
              <li><Link href="/category/tutorials" className="hover:text-blue-600">How-To Guides</Link></li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        <div className="border-t mt-12 pt-8 text-center text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} TechVantage Blog. Optimized for 2026 Tech Trends.</p>
        </div>
      </div>
    </footer>
  );
}

