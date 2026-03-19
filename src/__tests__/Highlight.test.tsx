import { render, screen } from '@testing-library/react'

import { Highlight } from '../components/highlight'

describe('Highlight', () => {
  it('renders headline, CTA, stats, and hero image', () => {
    render(<Highlight />)

    expect(screen.getByText('Delicious food delivered to your door')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /order now/i })).toBeInTheDocument()

    expect(screen.getByText('20 min')).toBeInTheDocument()
    expect(screen.getByText('customer satisfaction')).toBeInTheDocument()
    expect(screen.getByText('2,000+')).toBeInTheDocument()

    expect(
      screen.getByAltText('Delicious food spread featuring gourmet dishes'),
    ).toBeInTheDocument()
  })
})
