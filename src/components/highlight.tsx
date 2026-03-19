import Image from 'next/image'

export function Highlight() {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm">
            <span className="font-medium">New:</span>
            <span className="text-muted-foreground">Delivery to 30+ cities</span>
            <span className="text-accent font-medium cursor-pointer hover:underline">
              Learn more
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight text-balance mb-6">
            Delicious food delivered to your door
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the best restaurants in your area and get your favorite meals delivered in
            minutes. Fast, fresh, and always satisfying.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button className="rounded-full px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground h-10 has-[>svg]:px-4">
            Order now — it&apos;s free
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-6">
            <span className="font-medium text-foreground">Over 50,000 happy customers</span> trust
            Hungry Hub for their daily meals
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 lg:gap-10">
            <div className="flex flex-col items-center">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">20 min</p>
              <p className="text-sm text-muted-foreground">avg. delivery time</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">customer satisfaction</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">2,000+</p>
              <p className="text-sm text-muted-foreground">restaurant partners</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-2xl lg:text-3xl font-bold text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">app store rating</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-video lg:aspect-21/9">
          <Image
            src="/images/highlight-food.jpg"
            alt="Delicious food spread featuring gourmet dishes"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
