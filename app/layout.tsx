import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from '@/app/components/nav';
import Toast from '@/app/toast';
import { Suspense } from 'react';
import { SessionProvider } from 'next-auth/react';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        {/* <Suspense> */}
          <Nav />
        {/* </Suspense> */}
          {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
