export async function GET() {
  try {
    const response = await fetch(`${process.env.PRODUCTS_API_URL}`)

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json([data[2], data[3], data[4]]) // INFO: Only display images that are available
  } catch (error) {
    console.error(error)
    return new Response('Error fetching products', { status: 500 })
  }
}
