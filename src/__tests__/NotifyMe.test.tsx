import { fireEvent, render, screen } from '@testing-library/react'

import { NotifyMe } from '../components/notify-me'

describe('NotifyMe', () => {
  let consoleSpy: jest.SpyInstance

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined)
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    }) as jest.Mock
  })

  afterEach(() => {
    consoleSpy.mockRestore()
    jest.resetAllMocks()
  })

  it('sends the email when the user submits the form', () => {
    render(<NotifyMe />)

    const input = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(input, { target: { value: 'demo@hungryhub.com' } })

    fireEvent.click(screen.getByRole('button', { name: /notif me!/i }))

    expect(global.fetch).toHaveBeenCalledWith('/api/notify-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: 'demo@hungryhub.com' }),
    })
  })
})
