import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import "./builder/builder"; // ✅ Import custom Builder component registration

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

