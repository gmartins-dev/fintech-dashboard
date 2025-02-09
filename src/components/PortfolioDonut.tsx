import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Asset, Portfolio } from '@/types/api';

type Props = {
  portfolio: Portfolio | null;
  assets: Asset[];
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function PortfolioDonut({ portfolio, assets }: Props) {
  const [viewBy, setViewBy] = useState<'asset' | 'type'>('asset');

  if (!portfolio || !assets.length) {
    return <div>Loading...</div>;
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
    <div className="h-[400px]">
      <div className="mb-4">
        <select
          value={viewBy}
          onChange={(e) => setViewBy(e.target.value as 'asset' | 'type')}
          className="p-2 border rounded"
        >
          <option value="asset">By Asset</option>
          <option value="type">By Type</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
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
            label={({ name, value }) => `${name}: $${value.toLocaleString()}`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
