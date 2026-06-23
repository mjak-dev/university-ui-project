import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const vazirmatn = Vazirmatn({ subsets: ['arabic', 'latin'] });

export const metadata: Metadata = {
  title: 'Digi Vila - دیجی ویلا',
  description: 'فروشگاه آنلاین تجهیزات لوکس ویلا و باغ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} bg-gray-50 text-slate-800 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
