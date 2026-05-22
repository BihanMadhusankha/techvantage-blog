# 🚀 TechVantage Blog

[![Next.js Version](https://img.shields.io/badge/Next.js-16.2.1--canary-blue?logo=nextdotjs&logoColor=white&color=black)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.4-blue?logo=react&logoColor=white&color=61DAFB)](https://react.dev/)
[![Tailwind CSS Version](https://img.shields.io/badge/Tailwind_CSS-v4.0.0-blue?logo=tailwindcss&logoColor=white&color=38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#)

**TechVantage** is a premium, high-performance, and SEO-optimized technology blog engineered with **Next.js 16 (App Router + Turbopack)**, **React 19**, and **Tailwind CSS v4**. Featuring state-of-the-art web design aesthetics, dark mode integration, comprehensive multilingual capability, and a fully automated secure deployment mechanism, TechVantage serves as a professional platform for modern software guides, AI trends, and hardware reviews.

---

## ✨ Key Features

### 🎨 Premium UI/UX Aesthetics
*   **Rich Design System**: Harominous gradients, HSL-tailored colors, and premium dark/light mode integration using `next-themes`.
*   **Dynamic Interactions**: Fluid hover micro-animations, bouncing pulse effects, and interactive elements to captivate tech professionals.
*   **Fully Responsive**: Meticulously designed for perfect mobile-first layout scaling across all device viewports.

### ⚡ Blazing Fast Static Site Generation (SSG)
*   **Static HTML Export**: Optimized for maximum speed and security via Next.js `output: 'export'`.
*   **Image Optimization**: Lazy-loaded, correctly sized responsive WebP image configurations optimized to achieve excellent Google Lighthouse scores.

### 🔍 Advanced SEO & Semantic HTML
*   **Descriptive Metadatas**: Unique title tags, social graph sharing images (OpenGraph), and structured heading hierarchy per page.
*   **Structured JSON-LD Schemas**: Automated dynamic injection of SEO schemas:
    *   `OrganizationSchema` for global branding.
    *   `BlogPostSchema` for all regular articles.
    *   `TechnicalArticleSchema` for programming/software engineering articles.
    *   `FAQSchema` for automated Google rich search results.
    *   `HowToSchema` for structured tutorial steps.

### 🌐 Multilingual & Localized Support
*   **Noto Sans Core Integration**: Preloaded Google Fonts to render beautiful typography for English, Sinhala (සිංහල), Tamil (தமிழ்), Japanese (日本語), Korean (한국어), and Traditional Chinese.
*   **Smart Google Translate**: Seamless lazy-loaded integration for global reach without impacting initial page speed.

### 🤖 CI/CD FTPS Pipeline (Hostinger Deploy)
*   **GitHub Actions Deployment**: Automatic code checking, production building, and secure FTP transfer via TLS (FTPS) utilizing `SamKirkland/FTP-Deploy-Action` directly to the Hostinger production server `/public_html` root on every push to the `main` branch.

### 📊 Built-in monetization
*   **Strategic Ad Layouts**: Specialized responsive `AdPlaceholder` components for headers, sidebars, and in-feed blocks to easily integrate with Google AdSense or affiliate banners.

---

## 📂 Project Directory Structure

```
├── .github/workflows/     # CI/CD pipelines (Hostinger FTPS deployment)
├── public/                # Static assets (images, icons, robots.txt, sitemap)
│   ├── blog/              # WebP media assets for blog posts
│   └── hero/              # Hero background banners and illustrations
├── scripts/               # Image conversion and development utility scripts
├── src/
│   ├── app/               # Next.js App Router Pages (Pages, Layouts, CSS)
│   │   ├── blog/          # Static customized article routes
│   │   ├── category/      # Dynamic category filter routes
│   │   ├── globals.css    # Core Tailwind CSS v4 styling rules
│   │   └── page.tsx       # Homepage Blog feed & dynamic listing
│   ├── components/        # Reusable UI Components
│   │   ├── ads/           # Monetization Ad Components
│   │   ├── home/          # Hero, Sidebar, and grid structures
│   │   └── layout/        # Navbar, Footer, and Navigation
│   └── lib/               # Shared utilities, post database, and SEO helpers
├── tsconfig.json          # TypeScript compiler configuration
├── next.config.ts         # Next.js server configuration
└── package.json           # Dependency declarations and scripts
```

---

## 🛠️ Development & Script Guide

### Command Scripts

Install local dependencies first:
```bash
npm install
```

| Command | Action |
| :--- | :--- |
| `npm run dev` | Spin up local development server with real-time Turbopack compilation |
| `npm run build` | Compile code, run TypeScript checks, and export statically optimized build to `/out/` |
| `npm run start` | Spin up a production Node.js server (applicable for dynamic hosts) |
| `npm run lint` | Run ESLint static analysis to verify code health and catch syntax issues |

---

## 🔧 Script Utilities (`scripts/`)

To keep the root workspace clean and maintain professional standards, all auxiliary scripts are organized in the `/scripts` directory. These Python and JavaScript utilities can be run as follows:

*   **Image WebP Conversion**: Run Python or Node utilities to scale, crop, and convert raw images to optimized WebP format before uploading to `public/blog/` (e.g., `python scripts/convert_mythos_images.py`).
*   **Content Preparation**: Convert markdown drafts into formatted `Post` objects.
*   **Deployment Assistance**: Custom scripts to assist in verifying static outputs prior to FTPS sync.

---

## 🔒 License & Copyright

Designed & developed with ❤️ by **Bihan Madhusankha**. All rights reserved. Built as a premium proprietary technology platform.
