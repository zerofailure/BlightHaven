// components/BuilderPage.tsx
'use client';

import { BuilderComponent, builder } from '@builder.io/react';

// Replace with your public API key from Builder.io
builder.init(b6ace528dbef4807913eeec6d635af5c);

export default function BuilderPage({ content }: { content: any }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
