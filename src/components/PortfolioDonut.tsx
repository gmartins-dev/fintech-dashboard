import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Asset, Portfolio } from '@/types/api';
import { Spinner } from '@/components/ui/spinner';
import { formatCurrency } from '@/lib/utils';

type Props = {
  portfolio: Portfolio | null;
  assets: Asset[];
  isLoading?: boolean;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function PortfolioDonut({ portfolio, assets, isLoading }: Props) {
  const [viewBy, setViewBy] = useState<'asset' | 'type'>('asset');

  if (isLoading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (!portfolio || !assets) {
    return (
      <div className="bg-card p-6 rounded-lg shadow">
        <div className="animate-pulse rounded-md bg-gradient-to-r from-muted/60 via-muted to-muted/60 relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:animate-[shimmer_1.5s_infinite] after:bg-gradient-to-r after:from-transparent after:via-muted-foreground/10 after:to-transparent h-6 w-1/3 mb-4">
          <span className="sr-only">Loading...</span>
        </div>
        {/* ...rest of loading skeleton... */}
      </div>
    );
  }

  const getData = () => {
    if (viewBy === 'asset') {
      return portfolio.positions.map(pos => ({
        name: pos.asset,
        value: pos.quantity * pos.price
      }));
    }

    const byType = portfolio.positions.reduce((acc, pos) => {
      const asset = assets.find(a => a.name === pos.asset);
      const type = asset?.type || 'unknown';
      acc[type] = (acc[type] || 0) + pos.quantity * pos.price;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(byType).map(([name, value]) => ({ name, value }));
  };

  const data = getData();

  return (
    <div className="h-[400px]" style={{ minHeight: '400px' }}>
      <div className="mb-4">
        <select
          value={viewBy}
          onChange={(e) => setViewBy(e.target.value as 'asset' | 'type')}
          className="bg-background text-foreground border border-input hover:border-primary rounded-md py-2 pl-3 pr-5 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="asset">By Asset</option>
          <option value="type">By Type</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="85%" minHeight={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${name}: ${formatCurrency(value)}`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(Number(value))} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
