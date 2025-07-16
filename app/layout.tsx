'use client';

// Pull in the component registry so it runs on **every** client page load
import '@/app/_builder-registry';

import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider appearance={{ baseTheme: 'dark' }}>
      <html lang="en" className={inter.className}>
        <body className="bg-neutral-900 text-neutral-100 flex min-h-screen">
          {/* Left‑side navigation – hides on <= md */}
          <aside className="hidden md:block w-60 shrink-0 border-r border-neutral-800 p-4">
            {/* <MainNav /> */}
          </aside>

          {/* Center column */}
          <main className="flex-1 flex flex-col">
            {/* Upper dynamic content area */}
            <section className="flex-1 overflow-y-auto">{children}</section>

            {/* Global + battle chat docked to bottom */}
            <footer className="h-40 border-t border-neutral-800">
              {/* <ChatDock /> */}
            </footer>
          </main>

          {/* Right‑side pane for inventory/equipment/spells – hides on <= lg */}
          <aside className="hidden lg:block w-72 shrink-0 border-l border-neutral-800 p-4">
            {/* <InventoryTabs /> */}
          </aside>
        </body>
      </html>
    </ClerkProvider>
  );
}
