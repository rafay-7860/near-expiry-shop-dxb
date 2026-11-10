import { steps } from '../data/business'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-surface">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Three simple steps
          </h2>
          <p className="mt-4 text-base text-brand-950/70">
            Discover products, review key details, then contact us or visit the shop.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`reveal relative rounded-3xl bg-white p-7 ring-1 ring-brand-900/5 ${
                index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''
              }`}
            >
              <span className="font-display text-5xl font-extrabold text-lime-500/90">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/70">{step.description}</p>
              {index < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-brand-800/20 lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
