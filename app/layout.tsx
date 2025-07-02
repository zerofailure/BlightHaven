// app/layout.tsx
import "./builder/builder"; // 👈 Ensure Builder custom components are registered
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
