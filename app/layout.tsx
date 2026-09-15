import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
  description:
    'Full-stack software engineer with 6+ years building large-scale web platforms with React, Next.js and TypeScript. Open to full-time roles.',
  keywords: [
    'developer',
    'portfolio',
    'full-stack',
    'front-end',
    'react',
    'next.js',
    'typescript',
    'web development',
  ],
  authors: [{ name: 'EDGAR_GALVAN' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
    description:
      'Full-stack software engineer with 6+ years building large-scale web platforms with React, Next.js and TypeScript. Open to full-time roles.',
    siteName: 'EDGAR_GALVAN Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDGAR_GALVAN | Full-Stack Developer Portfolio',
    description:
      'Full-stack software engineer with 6+ years building large-scale web platforms with React, Next.js and TypeScript. Open to full-time roles.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-sans min-h-full flex flex-col`}>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
