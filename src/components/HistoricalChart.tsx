import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Portfolio, Price } from '@/types/api';
import { Spinner } from '@/components/ui/spinner';
import { CardSkeleton } from './skeletons/CardSkeleton';
import { ChartTooltip } from './ChartTooltip';
import { formatCurrency } from '@/lib/utils';

type Props = {
  portfolio: Portfolio | null;
  prices: Price[];
  isLoading?: boolean;
};

export default function HistoricalChart({ portfolio, prices, isLoading }: Props) {
  const [timeRange, setTimeRange] = useState('1M');

  if (isLoading) {
    return (
      <div className="h-[400px] flex items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (!portfolio || !prices?.length) {
    return <CardSkeleton />;
  }

  // Mock historical data - in real app, this would come from the API
  const data = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toLocaleDateString(),
      value: Math.random() * 100000 + 50000
    };
  });

  return (
    <div className="h-[400px]">
      <div className="mb-4 relative">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-background text-foreground border border-input hover:border-primary rounded-md px-3 py-2 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="1W">1 Week</option>
          <option value="1M">1 Month</option>
          <option value="3M">3 Months</option>
          <option value="1Y">1 Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            className="opacity-20"
            stroke="currentColor"
          />
          <XAxis
            dataKey="date"
            stroke="currentColor"
            className="text-muted-foreground text-xs"
          />
          <YAxis
            tickFormatter={(value) => formatCurrency(value)}
            width={80}
            stroke="currentColor"
            className="text-muted-foreground text-xs"
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
          />
          <Line
            type="monotone"
            dataKey="value"
            className="text-primary dark:text-primary"
            stroke="currentColor"
            dot={false}
            strokeWidth={2}
            name='Portfolio Value'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
