import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const isLoginPage = request.nextUrl.pathname === '/login';
  const isRootPage = request.nextUrl.pathname === '/';

  // Allow root page access to handle client-side redirect
  if (isRootPage) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!authCookie && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if authenticated and trying to access login
  if (authCookie && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/login'],
};
