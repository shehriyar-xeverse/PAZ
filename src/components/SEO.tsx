import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schemaType?: 'veterinary' | 'breadcrumbs' | 'faq' | 'general';
  schemaData?: Record<string, any>;
}

export default function SEO({ title, description, schemaType, schemaData }: SEOProps) {
  useEffect(() => {
    // Update Browser title
    document.title = title;

    // Update descriptive meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Twitter Card Title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);

    // Twitter Card Description
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', description);

    // Inject structured schema.org JSON-LD data
    const elementId = `seo-schema-${schemaType || 'general'}`;
    let scriptElement = document.getElementById(elementId) as HTMLScriptElement | null;
    
    if (scriptElement) {
      scriptElement.remove();
    }

    if (schemaData) {
      scriptElement = document.createElement('script');
      scriptElement.id = elementId;
      scriptElement.type = 'application/ld+json';
      scriptElement.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        ...schemaData,
      });
      document.head.appendChild(scriptElement);
    }

    return () => {
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [title, description, schemaType, schemaData]);

  return null;
}
