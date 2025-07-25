// SEO utilities untuk optimasi meta tags dan structured data
import { SITE_CONFIG } from './constants.js';

export function generateMetaTags({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}) {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullDescription = description || SITE_CONFIG.description;
  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;
  const fullImage = image ? `${SITE_CONFIG.url}${image}` : `${SITE_CONFIG.url}/hero-laser.webp`;
  const fullKeywords = keywords ? `${keywords}, ${SITE_CONFIG.keywords}` : SITE_CONFIG.keywords;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    canonical: fullUrl,
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      image: fullImage,
      type: type,
      siteName: SITE_CONFIG.name,
      locale: 'id_ID',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { author })
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      image: fullImage,
      site: '@lasercutpro',
      creator: '@lasercutpro'
    },
    jsonLd: generateJsonLd({ title: fullTitle, description: fullDescription, url: fullUrl, image: fullImage, type })
  };
}

export function generateJsonLd({ title, description, url, image, type = 'website' }) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo-company.webp`,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: '40123',
      addressCountry: 'ID'
    },
    openingHours: 'Mo-Sa 08:00-17:00',
    sameAs: Object.values(SITE_CONFIG.socialMedia),
    areaServed: [
      'Bandung',
      'Bekasi', 
      'Bogor',
      'Depok',
      'Cimahi',
      'Sukabumi',
      'Jawa Barat'
    ],
    serviceType: [
      'Laser Cutting',
      'CNC Router',
      'Laser Fiber',
      'Laser CO2',
      'Galvo Engraving'
    ]
  };

  if (type === 'service') {
    return {
      ...baseSchema,
      '@type': 'Service',
      name: title,
      description: description,
      url: url,
      image: image,
      provider: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url
      },
      areaServed: baseSchema.areaServed,
      serviceType: baseSchema.serviceType
    };
  }

  if (type === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      image: image,
      author: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_CONFIG.url}/logo-company.webp`
        }
      }
    };
  }

  return baseSchema;
}

export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.url}${crumb.url}`
    }))
  };
}

export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateReviewSchema(reviews) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: review.content
    }))
  };
}

export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email
    },
    areaServed: [
      'Bandung',
      'Bekasi',
      'Bogor', 
      'Depok',
      'Cimahi',
      'Sukabumi',
      'Jawa Barat'
    ],
    offers: {
      '@type': 'Offer',
      description: service.price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock'
    }
  };
}

export function generateProductSchema(material) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: material.name,
    description: material.description,
    image: `${SITE_CONFIG.url}${material.image}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name
    },
    manufacturer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR'
    }
  };
}

// Utility untuk generate sitemap
export function generateSitemapUrls() {
  const baseUrls = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.7, changefreq: 'weekly' }
  ];

  const serviceUrls = [
    '/jasa-cnc-router',
    '/jasa-laser-fiber', 
    '/jasa-laser-co2',
    '/jasa-galvo-engraving'
  ].map(url => ({ url, priority: 0.9, changefreq: 'monthly' }));

  const materialUrls = [
    '/material-acp',
    '/material-pvc',
    '/material-metal',
    '/material-acrylic'
  ].map(url => ({ url, priority: 0.8, changefreq: 'monthly' }));

  return [...baseUrls, ...serviceUrls, ...materialUrls];
}

// Utility untuk robots.txt
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_CONFIG.url}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_astro/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /jasa-*
Allow: /material-*
Allow: /blog*
Allow: /about
Allow: /contact`;
}

