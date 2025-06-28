import { clerkMiddleware } from '@clerk/nextjs/server';
import { authMiddleware } from '@clerk/nextjs';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/admin(.*)',
  ],
};
