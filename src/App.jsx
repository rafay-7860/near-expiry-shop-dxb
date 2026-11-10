import { useEffect, useState } from 'react'
import About from './components/About'
import Categories from './components/Categories'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Loader from './components/Loader'
import Location from './components/Location'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import WhyChooseUs from './components/WhyChooseUs'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [loaderDone, setLoaderDone] = useState(false)

  useReveal(!loading)

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setLoaderDone(true), 1400)
    const removeTimer = window.setTimeout(() => setLoading(false), 2000)
    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  return (
    <>
      {loading && <Loader done={loaderDone} />}
      <div
        className={
          loaderDone ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'
        }
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Categories />
          <ProductGrid />
          <WhyChooseUs />
          <HowItWorks />
          <Location />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
