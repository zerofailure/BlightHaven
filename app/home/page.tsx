'use client';
import { UserButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <UserButton />
      </div>
      <p>Welcome to the authenticated area of BlightHaven.</p>
    </div>
  );
}