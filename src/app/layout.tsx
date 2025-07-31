import type { Metadata } from 'next';
import { Raleway, Petrona } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

const petrona = Petrona({
  variable: '--font-petrona',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Givinity Foundation',
  description: 'Givinity Foundation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${petrona.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
