// Root-level middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  // Ensures we don’t interfere with Next.js internals
  matcher: ["/((?!_next|.*\\..*).*)"],
};

