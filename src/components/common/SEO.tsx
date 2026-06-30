import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

/** Centralized SEO/meta tag manager so every "page"/section can override defaults if needed. */
export default function SEO({ title, description }: SEOProps) {
  const finalTitle = title ?? 'Pravinkumar S | Senior Frontend Technical Lead & React Consultant (UAE)';
  const finalDescription =
    description ??
    'Pravinkumar S is a Frontend Technical Lead with 10+ years building enterprise React, TypeScript & banking applications. Available for freelance, contract & remote engagements.';

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
    </Helmet>
  );
}
