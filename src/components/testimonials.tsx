import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Enthusiast',
    content:
      'Hungry Hub has completely changed how I order food. The delivery is incredibly fast, and the food always arrives hot and fresh.',
    rating: 5,
    avatar: 'SM',
  },
  {
    name: 'James Rodriguez',
    role: 'Busy Professional',
    content:
      'As someone who works long hours, this is a lifesaver. The app is intuitive, and I can always rely on them for quality meals on time.',
    rating: 5,
    avatar: 'JR',
  },
  {
    name: 'Emily Chen',
    role: 'Food Blogger',
    content:
      "The variety of restaurants is impressive. I've discovered so many hidden gems in my city. The real-time tracking is a game-changer!",
    rating: 5,
    avatar: 'EC',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Loved by thousands
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our community has to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-xl p-6 border border-border">
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
