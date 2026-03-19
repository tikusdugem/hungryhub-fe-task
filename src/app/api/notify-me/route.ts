export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const response = await fetch(`${process.env.N8N_WEBHOOK_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error(`Error Notify: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return new Response('Error Notify', { status: 500 })
  }
}
