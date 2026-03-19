import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from '../components/header'

jest.mock('lucide-react', () => ({
  Menu: (props: React.SVGProps<SVGSVGElement>) => React.createElement('svg', props),
  X: (props: React.SVGProps<SVGSVGElement>) => React.createElement('svg', props),
}))

describe('Header', () => {
  it('shows primary navigation links and login CTA', () => {
    render(<Header />)

    expect(screen.getByText('Hungry Hub')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('How it Works')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles the mobile menu when the user clicks the menu button', () => {
    render(<Header />)

    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(screen.getAllByText('Login')).toHaveLength(1)

    fireEvent.click(toggleButton)
    expect(screen.getAllByText('Login')).toHaveLength(2)

    fireEvent.click(toggleButton)
    expect(screen.getAllByText('Login')).toHaveLength(1)
  })
})
