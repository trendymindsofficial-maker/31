import './globals.css';
import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'SPC - Student Privilege Card',
  description: 'Exclusive campus discounts for verified students in Nellore.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className="bg-[#080808] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
