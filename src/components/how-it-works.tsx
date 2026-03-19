const steps = [
  {
    step: "1",
    title: "Browse & Discover",
    description: "Explore thousands of restaurants and cuisines. Filter by dietary preferences, ratings, and delivery time to find your perfect meal.",
  },
  {
    step: "2",
    title: "Order & Pay",
    description: "Select your favorite dishes, customize your order, and checkout securely with multiple payment options available.",
  },
  {
    step: "3",
    title: "Track & Enjoy",
    description: "Watch your order in real-time as it's prepared and delivered straight to your door, hot and fresh.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three simple steps to your favorite food. It&apos;s that easy.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-xl p-8 border border-border h-full">
                <span className="text-6xl lg:text-7xl font-bold text-border/80 block mb-4">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
