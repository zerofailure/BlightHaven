'use client';

import { BuilderComponent } from '@builder.io/react';

export function BuilderPage({ content }: { content: any }) {
  return <BuilderComponent model="page" content={content} />;
}
