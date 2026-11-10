import { CalendarCheck, Leaf, Lightbulb, Tag } from 'lucide-react'
import { features } from '../data/business'

const icons = {
  Tag,
  Lightbulb,
  CalendarCheck,
  Leaf,
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad relative overflow-hidden bg-brand-900">
      <div
        className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-lime-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Smart value with clear information
          </h2>
          <p className="mt-4 text-base text-white/70">
            Built around affordability, transparency, and smarter everyday shopping in Dubai.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[feature.icon] || Leaf
            return (
              <article
                key={feature.id}
                className={`reveal rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/10 ${
                  index % 4 === 1
                    ? 'reveal-delay-1'
                    : index % 4 === 2
                      ? 'reveal-delay-2'
                      : index % 4 === 3
                        ? 'reveal-delay-3'
                        : ''
                }`}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-500 text-brand-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
