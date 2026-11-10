import { business } from '../data/business'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80'

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={ABOUT_IMAGE}
              alt="Modern retail shelves with everyday essential products"
              className="h-full min-h-[320px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="reveal reveal-delay-1 order-1 lg:order-2">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            About Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Welcome to Near Expiry Shop
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-950/75 sm:text-lg">
            {business.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface p-5">
              <p className="font-display text-2xl font-bold text-brand-800">Dubai</p>
              <p className="mt-1 text-sm text-brand-950/65">Based in Dubai Land</p>
            </div>
            <div className="rounded-2xl bg-surface p-5">
              <p className="font-display text-2xl font-bold text-lime-600">Value</p>
              <p className="mt-1 text-sm text-brand-950/65">Smart, affordable shopping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
