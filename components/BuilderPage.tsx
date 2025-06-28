// components/BuilderPage.tsx
'use client';

import { BuilderComponent, builder } from '@builder.io/react';

builder.init('b6ace528dbef4807913eeec6d635af5c'); // replace with your actual key

export function BuilderPage({ model = 'page' }: { model?: string }) {
  return <BuilderComponent model={model} />;
}
