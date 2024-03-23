import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import SignInModal from '@/components/modal/SignInModal';
import AuthProvider from '@/Context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Galaxy Used Car',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
          <SignInModal />
        </AuthProvider>
      </body>
    </html>
  );
}
