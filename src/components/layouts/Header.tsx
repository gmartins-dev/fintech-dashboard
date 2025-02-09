import { ThemeToggle } from '../ThemeToggle';
import { Button } from '../ui/button';
import { LogOut, Wallet } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { mockApi } from '@/lib/mockData';
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from '../ui/tooltip';

export function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await mockApi.logout();
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-md bg-card/95">
      <div className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-primary" />
              <a href="/dashboard" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                My Wallet
              </a>
            </div>
            <TooltipProvider>
              <div className="flex items-center gap-4">
                <TooltipRoot>
                  <TooltipTrigger asChild>
                    <div>
                      <ThemeToggle />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </TooltipRoot>

                <TooltipRoot>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleLogout}
                      variant="icon"
                      size="icon"
                    >
                      <LogOut className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </TooltipRoot>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </header>
  );
}
