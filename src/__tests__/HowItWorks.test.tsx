import { render, screen } from '@testing-library/react'

import { HowItWorks } from '@/components'

describe('HowItWorks', () => {
  it('renders the steps with titles', () => {
    render(<HowItWorks />)

    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByText('Browse & Discover')).toBeInTheDocument()
    expect(screen.getByText('Order & Pay')).toBeInTheDocument()
    expect(screen.getByText('Track & Enjoy')).toBeInTheDocument()
  })
})
