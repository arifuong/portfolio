export namespace MetadataRoute {
  export type Sitemap = Array<{
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mohamadarifinhasbi.vercel.app';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
