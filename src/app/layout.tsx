import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo";
import { GoogleFonts } from "@/components/layout/GoogleFonts";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload LCP hero image — critical for mobile performance */}
        <link
          rel="preload"
          as="image"
          href="/hero/tech_hero_banner.webp"
          type="image/webp"
        />
        {/* Google Analytics — deferred, non-blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-THT96WD1M5"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-THT96WD1M5');
          `}
        </Script>
        {/* Non-render-blocking font load via client component */}
        <GoogleFonts />
        {/* Google Translate — fully deferred, loads after page is interactive */}
        <Script id="google-translate-init" strategy="lazyOnload">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />
        {/* Ad network — loads after page is interactive */}
        <Script
          src="https://quge5.com/88/tag.min.js"
          data-zone="245213"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        {/* Ad network 2 — inline dynamic script injector */}
        <Script id="ad-al5sm" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='11087285',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }} />
        {/* Ad network 3 — 5gvci zone 11087289 */}
        <Script
          src="https://5gvci.com/act/files/tag.min.js?z=11087289"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        {/* Ad network 4 — nap5k zone 11087291 */}
        <Script id="ad-nap5k" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='11087291',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }} />
        {/* Ad network 5 — omg10 direct link 11087294 */}
        <Script
          src="https://omg10.com/4/11087294"
          strategy="afterInteractive"
        />
        {/* Ad network 6 — n6wxm vignette zone 11087292 */}
        <Script id="ad-n6wxm" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='11087292',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
        }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}