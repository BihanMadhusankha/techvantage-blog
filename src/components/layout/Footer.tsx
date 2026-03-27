import Link from 'next/link';
import { Code2, Globe, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter mb-4 inline-block">
              TECH<span className="text-blue-600">VANTAGE</span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-xs">
              Navigating the future of technology with in-depth guides, 
              expert insights, and the latest trends for 2026 and beyond.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-neutral-500 hover:text-blue-600 transition-colors">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-blue-600 transition-colors">
                <Code2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li><Link href="/category/software" className="hover:text-blue-600">Software</Link></li>
              <li><Link href="/category/hardware" className="hover:text-blue-600">Hardware</Link></li>
              <li><Link href="/category/ai" className="hover:text-blue-600">Artificial Intelligence</Link></li>
              <li><Link href="/category/tutorials" className="hover:text-blue-600">How-To Guides</Link></li>
            </ul>
          </div>
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
