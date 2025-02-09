'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { mockApi } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    console.log('Attempting login with:', { username, password });

    try {
      if (!username || !password) {
        setError('Please enter both username and password');
        setIsLoading(false);
        return;
      }

      const isValid = await mockApi.login(username, password);
      console.log('Login result:', isValid);

      if (isValid) {
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Use demo/demo to login');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Theme toggle in top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Existing login form wrapped in centered container */}
      <div className="min-h-screen grid place-items-center bg-gradient-to-b from-background to-secondary/20">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm space-y-6 p-8 bg-card rounded-lg border shadow-lg"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>
          {error && (
            <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md">
              {error}
            </div>
          )}
          <Input
            ref={usernameRef}
            label="Username"
            name="username"
            type="text"
            placeholder="Enter username"
            autoComplete="username"
            defaultValue=""
            required
          />
          <Input
            ref={passwordRef}
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            defaultValue=""
            required
          />
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            * Use "demo" for both username and password
          </p>
        </form>
      </div>
    </div>
  );
}
