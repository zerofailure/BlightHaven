// Root-level middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  // This ensures only app routes are matched, not static files or API routes
  matcher: ["/((?!_next|.*\\..*).*)"],
};
