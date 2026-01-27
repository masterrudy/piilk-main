import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PIILK - Nothing after. Period.',
  description: 'Clean protein, no compromise.',
  icons: {
    icon: '/Piilk_icon.png',
  },
  openGraph: {
    title: 'PIILK - Nothing after. Period.',
    description: 'Clean protein, no compromise.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
