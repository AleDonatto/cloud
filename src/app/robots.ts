import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // todo el sitio accesible
      },
    ],
    sitemap: 'https://cloudprod.netlify.app/sitemap.xml', //sitemap location
  };
}
