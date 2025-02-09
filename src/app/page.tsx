'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check authentication and redirect
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      if (isAuthenticated) {
        router.replace('/dashboard');
      } else {
        router.replace('/login');
      }
    };

    // Small delay to prevent any potential hydration issues
    const timeoutId = setTimeout(checkAuth, 100);
    return () => clearTimeout(timeoutId);
  }, [router]);

  // Show a minimal loading state
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}
