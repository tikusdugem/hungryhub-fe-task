import { render, screen } from '@testing-library/react'

import { MenuShowcase } from '@/components'

describe('MenuShowcase', () => {
  const products = [
    {
      id: '1',
      img: '/images/food-1.jpg',
      name: 'Sushi Deluxe',
      dsc: 'Fresh salmon, tuna, and seasonal rolls.',
      price: 14.5,
      rate: 4.8,
      country: 'Japan',
    },
    {
      id: '2',
      img: '/images/food-2.jpg',
      name: 'Margherita Pizza',
      dsc: 'Classic pizza with basil and mozzarella.',
      price: 11,
      rate: 4.7,
      country: 'Italy',
    },
  ]

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => products,
    }) as jest.Mock
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('loads and renders menu items from the API', async () => {
    render(<MenuShowcase />)

    expect(screen.getByText('Popular right now')).toBeInTheDocument()
    expect(global.fetch).toHaveBeenCalledWith('/api/products')

    expect(await screen.findByText('Sushi Deluxe')).toBeInTheDocument()
    expect(screen.getByText('$14.5')).toBeInTheDocument()
    expect(screen.getByText('Margherita Pizza')).toBeInTheDocument()
    expect(screen.getByText('$11')).toBeInTheDocument()
    expect(screen.getAllByText('Add')).toHaveLength(2)
  })
})
