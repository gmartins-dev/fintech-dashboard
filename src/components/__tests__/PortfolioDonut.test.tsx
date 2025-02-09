import { render, screen, fireEvent } from '@testing-library/react';
import PortfolioDonut from '../PortfolioDonut';

const mockPortfolio = {
  id: '1',
  asOf: new Date().toISOString(),
  positions: [
    { id: 1, asset: 'BTC', quantity: 2.5, price: 40000, asOf: new Date().toISOString() },
  ]
};

const mockAssets = [
  { id: '1', name: 'BTC', type: 'crypto' }
];

describe('PortfolioDonut', () => {
  it('renders loading state when portfolio is null', () => {
    render(<PortfolioDonut portfolio={null} assets={[]} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('allows switching between asset and type views', () => {
    render(<PortfolioDonut portfolio={mockPortfolio} assets={mockAssets} />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'type' } });
    expect(select).toHaveValue('type');
  });
});
