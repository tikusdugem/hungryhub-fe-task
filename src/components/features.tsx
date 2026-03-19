import { features } from '@/constants'

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight text-balance">
              Why choose Hungry Hub?
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re not just another food delivery app. We&apos;re your gateway to the best
              culinary experiences in your city, delivered with care and precision.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-8 hover:bg-secondary/50 transition-colors">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
