import {
  CupSoda,
  Heart,
  Home,
  Package,
  ShoppingBasket,
  Sparkles,
} from 'lucide-react'
import { categories } from '../data/business'

const icons = {
  ShoppingBasket,
  CupSoda,
  Home,
  Sparkles,
  Heart,
  Package,
}

export default function Categories() {
  return (
    <section id="categories" className="section-pad bg-surface">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Categories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Explore Product Categories
          </h2>
          <p className="mt-4 text-base text-brand-950/70">
            Suggested category placeholders for browsing. Edit these when confirmed inventory is
            available.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = icons[category.icon] || Package
            return (
              <article
                key={category.id}
                className={`reveal group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  index % 3 === 1 ? 'reveal-delay-1' : index % 3 === 2 ? 'reveal-delay-2' : ''
                }`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={category.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-800 shadow-md">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-950/60">{category.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
