import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

export const ivy_presto = localFont({
  src: [
    {
      path: './Ivy_Presto/ivy-presto-thin.otf',
      weight: '300',
    },
    {
      path: './Ivy_Presto/ivy-presto-light.otf',
      weight: '400',
    },
    {
      path: './Ivy_Presto/ivy-presto-headline.otf',
      weight: '500',
    },
    {
      path: './Ivy_Presto/ivy-presto-semi-bold.otf',
      weight: '700',
    },
  ],
  variable: '--font-ivy-presto',
});

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});
