export function Footer() {
  return (
    <footer className="border-t shadow-md bg-card/95">
      <div className="bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="py-4 md:py-6">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-primary/90">
                &copy; {new Date().getFullYear()} Fintech Dashboard. All rights reserved.
              </p>
              <div className="text-sm text-card-foreground/80">
                Built with{' '}
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 hover:underline">
                  Next.js
                </a>
                {' '}and{' '}
                <a href="https://recharts.org" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:text-primary/80 hover:underline">
                  Recharts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
