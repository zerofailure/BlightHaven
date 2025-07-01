'use client';

import { builder, BuilderComponent } from '@builder.io/react';

builder.init('b6ace528dbef4807913eeec6d635af5c');

export default async function Page({ params }) {
  const path = '/' + (params?.page?.join('/') || '');
  const content = await builder
    .get('page', {
      userAttributes: { urlPath: path },
    })
    .toPromise();

  if (!content) return <div>404 - Not Found</div>;

  return <BuilderComponent model="page" content={content} />;
}
