// BlightHaven Alpha Deployment - Sign-In Page Fix

// Ensure this file is located at: app/sign-in/[[...index]]/page.tsx

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
