import { render, screen } from '@testing-library/react'

import { Testimonials } from '../components/testimonials'

describe('Testimonials', () => {
  it('renders the testimonials list', () => {
    render(<Testimonials />)

    expect(screen.getByText('Loved by thousands')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })
})
