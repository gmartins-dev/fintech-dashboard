import { Portfolio, Asset } from '@/types/api';
import { Spinner } from '@/components/ui/spinner';
import { TableSkeleton } from '@/components/skeletons/TableSkeleton';

type Props = {
  portfolio: Portfolio | null;
  assets: Asset[];
  isLoading?: boolean;
};

export default function PositionsTable({ portfolio, assets, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (!portfolio || !assets?.length) {
    return <TableSkeleton />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Asset</th>
            <th className="text-right p-4">Quantity</th>
            <th className="text-right p-4">Price</th>
            <th className="text-right p-4">Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.positions.map((position) => (
            <tr key={position.id} className="border-b hover:bg-muted/50">
              <td className="p-4">{position.asset}</td>
              <td className="text-right p-4">{position.quantity}</td>
              <td className="text-right p-4">${position.price.toLocaleString()}</td>
              <td className="text-right p-4">
                ${(position.quantity * position.price).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
