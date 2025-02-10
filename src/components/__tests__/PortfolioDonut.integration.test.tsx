import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import PortfolioDonut from '../PortfolioDonut'
import { formatCurrency } from '@/lib/utils'

// Mock Recharts with fixed dimensions to avoid warnings
jest.mock('recharts', () => ({
  ResponsiveContainer: ({ children }) => (
    <div data-testid="chart-container" style={{ width: '500px', height: '500px', position: 'relative' }}>
      {children}
    </div>
  ),
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ data }) => (
    <div data-testid="pie">
      {data.map((item: any) => (
        <div key={item.name} data-testid="pie-slice">
          {`${item.name}: ${formatCurrency(item.value)}`}
        </div>
      ))}
    </div>
  ),
  Cell: () => null,
  Tooltip: () => null,
  Legend: () => <div data-testid="chart-legend">Legend</div>,
}))

// Test data
const mockPortfolio = {
  id: '1',
  asOf: new Date().toISOString(),
  positions: [
    { id: 1, asset: 'BTC', quantity: 2.5, price: 40000, asOf: new Date().toISOString() },
    { id: 2, asset: 'ETH', quantity: 10, price: 2200, asOf: new Date().toISOString() },
  ]
}

const mockAssets = [
  { id: '1', name: 'BTC', type: 'crypto' },
  { id: '2', name: 'ETH', type: 'crypto' },
]

// Wrap tests in a container with dimensions
const renderWithContainer = (ui: React.ReactElement) => {
  return render(
    <div style={{ width: '800px', height: '600px' }}>
      {ui}
    </div>
  )
}

describe('PortfolioDonut Integration', () => {
  it('displays portfolio data correctly', async () => {
    renderWithContainer(<PortfolioDonut portfolio={mockPortfolio} assets={mockAssets} />)

    const slices = screen.getAllByTestId('pie-slice')
    expect(slices).toHaveLength(2)
    expect(slices[0]).toHaveTextContent('BTC: £100,000')
    expect(slices[1]).toHaveTextContent('ETH: £22,000')
  })

  it('switches between asset and type views', async () => {
    renderWithContainer(<PortfolioDonut portfolio={mockPortfolio} assets={mockAssets} />)

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'type' } })

    await waitFor(() => {
      const slices = screen.getAllByTestId('pie-slice')
      expect(slices).toHaveLength(1)
      expect(slices[0]).toHaveTextContent('crypto: £122,000')
    })
  })
})
