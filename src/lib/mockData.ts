import { Asset, Portfolio, Price } from '@/types/api';
import Cookies from 'js-cookie';

const mockAssets: Asset[] = [
  { id: '1', name: 'BTC', type: 'crypto' },
  { id: '2', name: 'ETH', type: 'crypto' },
  { id: '3', name: 'AAPL', type: 'stock' },
  { id: '4', name: 'GOOGL', type: 'stock' },
  { id: '5', name: 'USD', type: 'fiat' },
];

const mockPortfolio: Portfolio = {
  id: '1',
  asOf: new Date().toISOString(),
  positions: [
    { id: 1, asset: 'BTC', quantity: 2.5, price: 40000, asOf: new Date().toISOString() },
    { id: 2, asset: 'ETH', quantity: 10, price: 2200, asOf: new Date().toISOString() },
    { id: 3, asset: 'AAPL', quantity: 50, price: 180, asOf: new Date().toISOString() },
    { id: 4, asset: 'GOOGL', quantity: 20, price: 140, asOf: new Date().toISOString() },
  ],
};

export const mockApi = {
  getAssets: async (): Promise<Asset[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockAssets), 500);
    });
  },

  getPrices: async (assets?: string[], asOf?: string): Promise<Price[]> => {
    const mockPrices: Price[] = mockAssets.map(asset => ({
      id: asset.id,
      asset: asset.name,
      price: Math.random() * 1000
    }));

    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPrices), 500);
    });
  },

  getPortfolio: async (asOf?: string): Promise<Portfolio> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPortfolio), 500);
    });
  },

  login: async (username: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = username.toLowerCase() === 'demo' && password === 'demo';

        if (isValid) {
          localStorage.setItem('isAuthenticated', 'true');
          document.cookie = 'auth=true; path=/; max-age=86400'; // set 24 hours cookie duration

        }

        resolve(isValid);
      }, 500);
    });
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('isAuthenticated');
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};
