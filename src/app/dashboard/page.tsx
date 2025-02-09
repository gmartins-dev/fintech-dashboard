'use client';

import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockData';
import { Asset, Portfolio, Price } from '@/types/api';
import PortfolioDonut from '@/components/PortfolioDonut';
import PositionsTable from '@/components/PositionsTable';
import HistoricalChart from '@/components/HistoricalChart';
import { useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Dashboard() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [prices, setPrices] = useState<Price[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetsData, portfolioData, pricesData] = await Promise.all([
          mockApi.getAssets(),
          mockApi.getPortfolio(),
          mockApi.getPrices(),
        ]);
        setAssets(assetsData);
        setPortfolio(portfolioData);
        setPrices(pricesData);
      } catch (e) {
        setError('Failed to load portfolio data');
      }
    };
    fetchData();
  }, []);

  const handleLogout = async () => {
    await mockApi.logout();
    router.push('/login');
  };

  if (error) {
    return <div className="text-destructive p-4">{error}</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="bg-destructive text-destructive-foreground px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Portfolio Allocation</h2>
            <PortfolioDonut portfolio={portfolio} assets={assets} />
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Historical Performance</h2>
            <HistoricalChart portfolio={portfolio} prices={prices} />
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Positions</h2>
          <PositionsTable portfolio={portfolio} assets={assets} />
        </div>
      </div>
    </div>
  );
}
