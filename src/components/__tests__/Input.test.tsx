import { render, screen } from '@testing-library/react'
import { Input } from '../ui/input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Username" />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
  })

  it('displays error message', () => {
    render(<Input label="Username" error="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('applies error styles when error is present', () => {
    render(<Input error="Error" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-destructive')
  })
})
