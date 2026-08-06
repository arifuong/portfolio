export namespace MetadataRoute {
  export type Robots = {
    rules:
      | {
          userAgent?: string | string[];
          allow?: string | string[];
          disallow?: string | string[];
          crawlDelay?: number;
        }
      | Array<{
          userAgent?: string | string[];
          allow?: string | string[];
          disallow?: string | string[];
          crawlDelay?: number;
        }>;
    sitemap?: string | string[];
    host?: string;
  };
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mohamadarifinhasbi.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_astro/', '/js/protection.js'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
