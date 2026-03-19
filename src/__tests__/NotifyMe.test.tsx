import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { NotifyMe } from '@/components'

describe('NotifyMe', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    }) as jest.Mock
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('sends the email when the user submits the form', async () => {
    render(<NotifyMe />)

    const input = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(input, { target: { value: 'demo@hungryhub.com' } })

    fireEvent.click(screen.getByRole('button', { name: /notif me!/i }))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/notify-me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'demo@hungryhub.com' }),
      })
    })
  })
})
