import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import BuilderRegistryClient from "../components/BuilderRegistryClient";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <BuilderRegistryClient />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
