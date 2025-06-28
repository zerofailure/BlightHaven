// app/layout.tsx
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { builder } from '@builder.io/react';
import '@builder.io/widgets';
import type { Metadata } from 'next';

// Initialize Builder.io
builder.init('YOUR_PUBLIC_API_KEY'); // Replace with your Builder.io public API key

export const metadata: Metadata = {
  title: 'BlightHaven',
  description: 'A dark fantasy web MMO experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
