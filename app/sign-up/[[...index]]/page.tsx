// BlightHaven Alpha Deployment - Sign-Up Page

// Ensure this file is located at: app/sign-up/[[...index]]/page.tsx

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}

