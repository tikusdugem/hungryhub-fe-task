'use client'

import { useCallback, useState } from 'react'

type UseNotifyMeState = {
  email: string
  setEmail: (value: string) => void
  sendEmail: () => Promise<void>
  isSubmitting: boolean
  error: string | null
}

export function useNotifyMe(): UseNotifyMeState {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = useCallback(async () => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/notify-me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error(`Error Send Email: ${response.statusText}`)
      }

      await response.json()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Unknown error')
    } finally {
      setIsSubmitting(false)
    }
  }, [email])

  return { email, setEmail, sendEmail, isSubmitting, error }
}
