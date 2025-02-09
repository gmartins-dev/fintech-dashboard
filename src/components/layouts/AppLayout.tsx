import { Header } from './Header';
import { Footer } from './Footer';

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
