import { Asset, Portfolio } from '@/types/api';

type Props = {
  portfolio: Portfolio | null;
  assets: Asset[];
};

export default function PositionsTable({ portfolio, assets }: Props) {
  if (!portfolio) return <div>Loading...</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Asset</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {portfolio.positions.map((position) => {
            const asset = assets.find(a => a.name === position.asset);
            const value = position.quantity * position.price;

            return (
              <tr key={position.id}>
                <td className="px-6 py-4 whitespace-nowrap">{position.asset}</td>
                <td className="px-6 py-4 whitespace-nowrap">{asset?.type || 'unknown'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{position.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">${position.price.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">${value.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
