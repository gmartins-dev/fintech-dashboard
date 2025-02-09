import { Portfolio, Asset } from '@/types/api';
import { Spinner } from '@/components/ui/spinner';
import { TableSkeleton } from '@/components/skeletons/TableSkeleton';
import { formatCurrency } from '@/lib/utils';
import { BadgeJapaneseYen, BadgeRussianRuble, BadgeSwissFranc, BadgeIndianRupee, BadgeDollarSign, BadgeEuro, BadgeCent, BadgePoundSterling
 } from 'lucide-react';

type Props = {
  portfolio: Portfolio | null;
  assets: Asset[];
  isLoading?: boolean;
};

const getAssetIcon = (asset: string) => {
  switch (asset.toUpperCase()) {
    case 'BTC':
      return <BadgeJapaneseYen className="h-4 w-4 text-primary" />;
    case 'ETH':
      return <BadgeRussianRuble className="h-4 w-4 text-primary" />;
    case 'USD':
      return <BadgeSwissFranc className="h-4 w-4 text-primary" />;
    case 'EUR':
      return <BadgeCent className="h-4 w-4 text-primary" />;
    case 'JPY':
      return <BadgeEuro className="h-4 w-4 text-primary" />;
    case 'RUB':
      return <BadgeDollarSign className="h-4 w-4 text-primary" />;
    case 'CHF':
      return <BadgeSwissFranc className="h-4 w-4 text-primary" />;
    default:
      return <BadgePoundSterling className="h-4 w-4 text-primary" />;
  }
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
          {portfolio.positions.map((position) => {
            const asset = assets.find(a => a.name === position.asset);
            return (
              <tr key={position.id} className="border-b hover:bg-muted/50">
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    {getAssetIcon(position.asset)}
                    {position.asset}
                  </div>
                </td>
                <td className="text-right p-4">{position.quantity}</td>
                <td className="text-right p-4">{formatCurrency(position.price)}</td>
                <td className="text-right p-4">
                  {formatCurrency(position.quantity * position.price)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
