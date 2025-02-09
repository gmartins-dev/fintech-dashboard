import { TooltipProps } from 'recharts';
import { formatCurrency } from '@/lib/utils';

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-background border rounded-lg shadow-lg p-3 ring-1 ring-border">
      <p className="text-sm font-medium text-foreground mb-1">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} className="text-sm font-semibold text-primary">
          {formatCurrency(Number(entry.value))}
        </p>
      ))}
    </div>
  );
}
