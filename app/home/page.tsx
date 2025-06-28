import { builder } from '@builder.io/react';
import BuilderPage from '@/components/BuilderPage';

export const revalidate = 5;

export default async function HomePage() {
  const content = await builder.get('page', {
    url: '/home',
  }).toPromise();

  return <BuilderPage content={content} />;
}
