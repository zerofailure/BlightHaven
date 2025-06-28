import { builder } from '@builder.io/react';
import { BuilderPage } from '@/components/BuilderPage';

export const revalidate = 5;

export default async function Page() {
  const content = await builder
    .get('page', { userAttributes: { urlPath: '/home' } })
    .toPromise();

  return <BuilderPage content={content} />;
}
