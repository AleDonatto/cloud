import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { HeroUIWraper } from './HeroUIWraper';
import { NavbarCom } from './components/NavbarCom';
import { Footer } from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Almacenamiento y Creación de Sitios Web | WebStorage Pro',
    template: '%s | WebStorage Pro',
  },
  description:
    'Diseñamos y alojamos sitios web personalizados, rápidos y optimizados para SEO. Ofrecemos almacenamiento web seguro y desarrollo a medida para empresas y profesionales.',
  keywords: [
    'alojamiento web',
    'hosting web',
    'creación de sitios web',
    'desarrollo web',
    'SEO',
    'diseño web',
    'sitios optimizados',
    'páginas personalizadas',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'WebStorage Pro', url: 'https://cloudprod.netlify.app' }],
  creator: 'WebStorage Pro',
  publisher: 'WebStorage Pro',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://cloudprod.netlify.app',
    siteName: 'WebStorage Pro',
    title: 'Almacenamiento y Creación de Sitios Web',
    description:
      'Desarrollo de sitios web a medida, optimizados para SEO, con hosting rápido y seguro.',
    images: [
      {
        url: 'https://cloudprod.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebStorage Pro - Sitios optimizados para SEO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebStorage Pro | Sitios Web y Hosting Optimizado',
    description:
      'Hosting y desarrollo de sitios web personalizados, rápidos y optimizados para SEO.',
    creator: '@webstoragepro',
    images: ['https://cloudprod.netlify.app/og-image.png'],
  },
  alternates: {
    canonical: 'https://cloudprod.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'Tecnología / Desarrollo Web / SEO / Paginas Web / Hosting',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeroUIWraper>
          <NavbarCom />
          {children}
          <Footer />
        </HeroUIWraper>
      </body>
    </html>
  );
}
