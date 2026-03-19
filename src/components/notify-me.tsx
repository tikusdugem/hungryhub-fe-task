import { useState } from 'react'

export function NotifyMe() {
  const [email, setEmail] = useState<string>('')

  const sendEmail = async () => {
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

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section className="py-20 lg:py-32 bg-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 tracking-tight text-balance">
          Ready to satisfy your cravings?
        </h2>
        <p className="text-lg sm:text-xl text-background/70 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join over 50,000 happy customers who trust Hungry Hub for their daily food delivery needs.
        </p>
        {/* TODO: Validate email input */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            className="border border-background/30 rounded-md px-4 py-2 text-background placeholder:text-background/50"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className="border border-background/30 rounded-md px-4 py-2 text-background bg-gray-600 hover:bg-gray-500 cursor-pointer"
            onClick={sendEmail}
          >
            Notif Me!
          </button>
        </div>
        <p className="text-background/50 text-sm mt-8">
          Use code <span className="font-medium text-background/70">HUNGRY20</span> for 20% off your
          first order
        </p>
      </div>
    </section>
  )
}
