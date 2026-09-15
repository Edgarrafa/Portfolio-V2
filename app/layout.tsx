import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Set NEXT_PUBLIC_SITE_URL to the production domain; Vercel's production URL and localhost are fallbacks
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

const siteTitle = 'EDGAR_GALVAN | Full-Stack Developer Portfolio';
const siteDescription =
  'Full-stack software engineer with 6+ years building large-scale web platforms with React, Next.js and TypeScript. Open to full-time roles.';

const socialImage = {
  url: '/cyberpunk-avatar.jpeg',
  width: 512,
  height: 512,
  alt: 'Edgar Galvan - Full-Stack Software Engineer',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | EDGAR_GALVAN',
  },
  description: siteDescription,
  applicationName: 'EDGAR_GALVAN Portfolio',
  keywords: [
    'Edgar Galvan',
    'software engineer',
    'full-stack developer',
    'front-end developer',
    'portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'Node.js',
    'GraphQL',
    'Tailwind CSS',
    'web development',
  ],
  authors: [{ name: 'Edgar Galvan', url: 'https://github.com/Edgarrafa' }],
  creator: 'Edgar Galvan',
  publisher: 'Edgar Galvan',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Edgar',
    lastName: 'Galvan',
    username: 'Edgarrafa',
    locale: 'en_US',
    url: '/',
    title: siteTitle,
    description: siteDescription,
    siteName: 'EDGAR_GALVAN Portfolio',
    images: [socialImage],
  },
  twitter: {
    // The avatar is square, so the compact card fits it better than summary_large_image
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}>
        {/* Skip to Content Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Scanlines Overlay */}
        <div className="scanlines" aria-hidden="true" />

        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
