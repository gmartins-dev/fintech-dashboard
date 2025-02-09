'use client';

import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockData';
import { Asset, Portfolio, Price } from '@/types/api';
import PortfolioDonut from '@/components/PortfolioDonut';
import PositionsTable from '@/components/PositionsTable';
import HistoricalChart from '@/components/HistoricalChart';
import { AppLayout } from '@/components/layouts/AppLayout';

export default function Dashboard() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [prices, setPrices] = useState<Price[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [assetsData, portfolioData, pricesData] = await Promise.all([
          mockApi.getAssets(),
          mockApi.getPortfolio(),
          mockApi.getPrices(),
        ]);
        setAssets(assetsData);
        setPortfolio(portfolioData);
        setPrices(pricesData);
      } catch (error) {
        console.error('Error loading data:', error);
        setError('Failed to load portfolio data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <AppLayout>
        <div className="text-destructive p-4">{error}</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="flex items-center gap-2 my-4">
        <h1 className="text-3xl font-bold text-foreground">Portfolio Overview</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-card-foreground">Portfolio Allocation</h2>
          <PortfolioDonut portfolio={portfolio} assets={assets} isLoading={isLoading} />
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4 text-card-foreground">Historical Performance</h2>
          <HistoricalChart portfolio={portfolio} prices={prices} isLoading={isLoading} />
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Positions</h2>
        <PositionsTable portfolio={portfolio} assets={assets} isLoading={isLoading} />
      </div>
    </AppLayout>
  );
}
