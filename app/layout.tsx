import './globals.css';
import React from 'react';

export const metadata = {
  title: 'SPC - Student Privilege Card',
  description: 'Exclusive campus discounts for verified students in Nellore.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#080808] text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
