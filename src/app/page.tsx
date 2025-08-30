'use client'

import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [formStatus, setFormStatus] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('success')
    setTimeout(() => setFormStatus(''), 3000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        ></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Growing organic green goodness under the California sun
          </h1>
          <Link 
            href="/subscriptions"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Shop
          </Link>
        </div>
      </section>

      {/* 9x Nutrients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            9x the nutrients
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Up to nine times the nutrients and potent health benefits compared to mature greens.
          </p>
        </div>
      </section>

      {/* Sun-grown Description */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sun-grown-to-order microgreens & wheatgrass
          </h2>
          <p className="text-lg text-gray-700 italic">
            Delivering weekly to homes, workplaces, juice bars, health food stores, restaurants, and fitness centers.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Microgreens */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/images/microgreens.jpg"
                  alt="Microgreens"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Microgreens</h3>
              <p className="text-gray-700">
                Sun-grown, living greens. Combinations can include pea shoots, radish, sunflower, and buckwheat.
              </p>
            </div>

            {/* Wheatgrass */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/images/wheatgrass.jpg"
                  alt="Wheatgrass"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheatgrass</h3>
              <p className="text-gray-700">
                Sold in live trays for extra immunity boosting benefits. Harvest it fresh for your juicing pleasure!
              </p>
            </div>

            {/* PeaSto */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src="/images/peasto.jpg"
                  alt="PeaSto"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PeaSto</h3>
              <p className="text-gray-700">
                Our uber-nutritious take on pesto featuring our pea shoots. Available to add-on to any subscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Organic Banner */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certified organic, from seed to soil
          </h2>
          <p className="text-xl text-green-100">
            Rain-watered and sustainably grown year-round.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Empowering health through sustainable superfoods
              </h2>
              <h3 className="text-2xl text-green-600 font-semibold mb-6 italic">
                Grass Rooted in Ukiah, California
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Mendo Grass, where we are on a mission to provide sustainable and organic superfoods to our community. Founded by Adam, Amanda, and our daughter, Arden, our family&apos;s journey began at the Solar Living Institute, where we discovered the incredible healing powers of wheatgrass. Inspired by its impact on a friend&apos;s health, we set out to create a farm dedicated to growing wheatgrass and microgreens.
                </p>
                
                <p>
                  Today, Mendo Grass thrives in the scenic valleys of southern Mendocino County, surrounded by oak woodlands and organic vineyards. Our commitment to sustainability is unwavering. We utilize renewable energy, harness the sun, and nourish our crops with rainwater. We exclusively use organic seeds and soil, ensuring the highest quality produce.
                </p>
                
                <p>
                  With love for the land and the food we grow, we provide fresh, nutrient-rich wheatgrass and microgreens to Mendocino and Sonoma counties. Our goal is simple: to bring immunity-boosting foods to your table and add a touch of sunshine to your life. Find us at your favorite local farmers market, or shop online to join us on this sustainable journey towards a healthier, happier future—one microgreen at a time.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/images/about.jpg"
                alt="Our family farm"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section id="newsletter" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get recipes and updates every month
          </h2>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Success/Error Messages */}
          {formStatus === 'success' && (
            <p className="mt-4 text-green-600 font-medium">
              Thank you! Your submission has been received!
            </p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-red-600 font-medium">
              Oops! Something went wrong while submitting the form.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
