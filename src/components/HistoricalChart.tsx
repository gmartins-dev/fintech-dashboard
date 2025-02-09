import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Portfolio, Price } from '@/types/api';

type Props = {
  portfolio: Portfolio | null;
  prices: Price[];
};

export default function HistoricalChart({ portfolio, prices }: Props) {
  const [timeRange, setTimeRange] = useState('1M');

  if (!portfolio) return <div>Loading...</div>;

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
      <div className="mb-4">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="1W">1 Week</option>
          <option value="1M">1 Month</option>
          <option value="3M">3 Months</option>
          <option value="1Y">1 Year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
