import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Blighthaven",
  description: "Blighthaven MMO Shell",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header style={{ padding: '1rem', backgroundColor: '#1e293b', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
            <SignedOut>
              <SignInButton /> <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
