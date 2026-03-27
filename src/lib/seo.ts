import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'TechVantage',
  description: 'The premier destination for 2026 tech trends, AI agent deployment, and next-gen hardware guides.',
  url: 'https://techvantage.demo', // Replace with actual domain
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/techvantage',
    github: 'https://github.com/techvantage',
  },
};

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  icons = '/icon.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: 'website',
      siteName: SITE_CONFIG.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@techvantage',
    },
    icons,
    metadataBase: new URL(SITE_CONFIG.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [
      SITE_CONFIG.links.twitter,
      SITE_CONFIG.links.github,
    ],
  };
}

export function generateBlogPostSchema({
  title,
  description,
  date,
  url,
  image,
  author = 'TechVantage Editorial',
}: {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: date,
    url: url,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };
}

export function generateTechnicalArticleSchema({
  title,
  description,
  date,
  url,
  image,
  author = 'TechVantage Editorial',
  dependencies = [],
  proficiencyLevel = 'Intermediate',
}: {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  author?: string;
  dependencies?: string[];
  proficiencyLevel?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description: description,
    image: image,
    datePublished: date,
    url: url,
    author: {
      '@type': 'Person',
      name: author,
    },
    proficiencyLevel: proficiencyLevel,
    dependencies: dependencies.join(', '),
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };
}

export function generateProductReviewSchema({
  title,
  itemReviewed,
  reviewRating,
  author = 'TechVantage',
  pros = [],
  cons = [],
}: {
  title: string;
  itemReviewed: string;
  reviewRating: number;
  author?: string;
  pros?: string[];
  cons?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    headline: title,
    itemReviewed: {
      '@type': 'Thing',
      name: itemReviewed,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    positiveNotes: {
      '@type': 'ItemList',
      itemListElement: pros.map((pro, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: pro,
      })),
    },
    negativeNotes: {
      '@type': 'ItemList',
      itemListElement: cons.map((con, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: con,
      })),
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  image,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    image: image,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      name: step.name,
      itemListElement: [
        {
          '@type': 'HowToDirection',
          text: step.text,
        },
      ],
      url: `${SITE_CONFIG.url}/blog#step${index + 1}`,
      ...(step.image && { image: step.image }),
    })),
  };
}
