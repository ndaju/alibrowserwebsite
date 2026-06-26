import { Fraunces, JetBrains_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaperGrain from '@/components/PaperGrain';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'AliBrowser — A browser that doesn’t watch you. Yet.',
  description:
    'AliBrowser is built by AliOne — a small company that always listens to its community, and always will be. Privacy-first, Firefox-based, started 2026.',
  applicationName: 'AliBrowser',
  authors: [{ name: 'Ali' }, { name: 'AliOne' }],
  creator: 'AliOne',
  publisher: 'AliOne',
  keywords: ['browser', 'privacy', 'firefox', 'gecko', 'alibrowser', 'alione', 'open source', 'community'],
  metadataBase: new URL('https://alibrowser.dev'),
  openGraph: {
    title: 'AliBrowser — A browser that doesn’t watch you.',
    description:
      'Built by AliOne · started 2026 · privacy-first, Firefox-based, MIT-licensed. AliOne always listens to its community, and always will be.',
    type: 'website',
    siteName: 'AliBrowser (by AliOne)',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AliBrowser — by AliOne',
    description: 'A browser that doesn’t watch you. Yet. Built by AliOne — a company that always listens to its community, and always will be.',
  },
  icons: {
    icon: '/favicon.png',      // 32×32, resized from logo.png
    shortcut: '/favicon.png',
    apple: '/icon-192.png',
  },
};

export const viewport = {
  themeColor: '#F3ECDC',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const fontVars = `${fraunces.variable} ${jetbrains.variable} ${GeistSans.variable}`;
  return (
    <html lang="en" className={fontVars}>
      <body className={GeistSans.className}>
        <PaperGrain />
        <div className="page-frame" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
