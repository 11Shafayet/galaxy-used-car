import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Galaxy Used Car',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
