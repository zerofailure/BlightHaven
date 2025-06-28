'use client'

import { BuilderComponent, useIsPreviewing } from 'react'

interface Props {
  content: any
}

export function BuilderPage({ content }: Props) {
  const isPreviewing = useIsPreviewing();

  if (!content && !isPreviewing) {
    return <div>Content not found</div>;
  }

  return <BuilderComponent model="page" content={content} />;
}
