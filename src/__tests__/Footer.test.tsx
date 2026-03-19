import { render, screen } from '@testing-library/react'

import { Footer } from '@/components'

describe('Footer', () => {
  it('renders navigation groups and current year', () => {
    render(<Footer />)

    expect(screen.getByText('Hungry Hub')).toBeInTheDocument()
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()

    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
