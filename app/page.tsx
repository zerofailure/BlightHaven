'use client';

import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

builder.init('b6ace528dbef4807913eeec6d635af5c');

export default function CatchAllRenderer() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: window.location.pathname })
      .toPromise()
      .then((res) => setContent(res));
  }, []);

  if (!content) return <div>Loading...</div>;

  return <BuilderComponent model="page" content={content} />;
}
