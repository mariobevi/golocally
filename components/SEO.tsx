'use client';

import Head from 'next/head';

export function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Go Locally",
    "url": "https://golocally.ai",
    "description": "AI-powered travel companion with mood-aware plans and local characters.",
    "publisher": {
      "@type": "Organization",
      "name": "Go Locally",
      "logo": {
        "@type": "ImageObject",
        "url": "https://golocally.ai/logo.png"
      }
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
