import SmoothScrolling from '@/components/layout/SmoothScrolling';
import { ivy_presto, inter } from './fonts/font';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Base Habitation - Let the wild in. Find your Base.',
  description:
    'We produce high-performance, compact homes that let you escape the everyday to a space that is good for you and good for the planet.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${ivy_presto.variable} ${inter.variable} antialiased`}>
        <SmoothScrolling>
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
