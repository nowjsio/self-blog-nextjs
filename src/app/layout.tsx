import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'nowjsio 블로그',
  description: 'nowjsio 블로그 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`flex flex-col justify-center items-center ${inter.className} min-h-screen mx-10`}>
        <header className="flex-initial w-full flex justify-between pt-2 items-center">
          <p className="text-3xl">nowjsio 의 블로그</p>
          <section className="mr-10">
            <Link className="ml-5" href="/">
              main
            </Link>
            <Link className="ml-5" href="/posts">
              posts
            </Link>
            <Link className="ml-5" href="/contact">
              contact
            </Link>
            <Link className="ml-5" href="/about">
              about
            </Link>
          </section>
        </header>
        <section className="flex-auto w-full">{children}</section>
        <footer className="flex-initial w-full mt-auto bg-black text-white text-center">
          <p>nowjsio blogs | All Right Reserved</p>
        </footer>
      </body>
    </html>
  );
}
