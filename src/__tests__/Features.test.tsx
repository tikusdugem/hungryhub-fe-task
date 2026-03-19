import { render, screen } from '@testing-library/react'

import { Features } from '../components/features'

describe('Features', () => {
  it('renders the section heading and feature items', () => {
    render(<Features />)

    expect(screen.getByText('Why choose Hungry Hub?')).toBeInTheDocument()

    const titles = ['Lightning Fast', 'Curated Selection', 'Live Tracking', 'Secure Checkout']
    titles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
