import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300','400','600','700','800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Go Locally — See the city like a local',
  description: 'Mood-aware plans, one-tap bookings, and local AI characters guiding you like a true insider.',
  metadataBase: new URL('https://golocally.vercel.app'),
  openGraph: {
    title: 'Go Locally — See the city like a local',
    description: 'Mood-aware plans, one-tap bookings, and local AI characters guiding you like a true insider.',
    url: 'https://golocally.vercel.app',
    siteName: 'Go Locally',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Go Locally Landing Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Locally — See the city like a local',
    description: 'Mood-aware plans, one-tap bookings, and local AI characters guiding you like a true insider.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
