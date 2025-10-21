'use client'

import Image from "next/image";
import { useState } from 'react';

const restaurantsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mendo Grass Restaurant Microgreens Subscription',
  description: 'Weekly subscription service for fresh organic microgreens for restaurants and food service professionals',
  brand: {
    '@type': 'Brand',
    name: 'Mendo Grass',
  },
  offers: {
    '@type': 'Offer',
    name: 'Microgreens 8oz Weekly (Restaurant)',
    price: '22.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    deliveryMethod: 'https://schema.org/OnSitePickup',
    areaServed: 'Mendocino County, CA'
  }
}

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantsJsonLd) }}
      />
      
      {/* Header Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Restaurant & Food Service Subscriptions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Premium Microgreens Grown-to-Order for Chefs and Culinary Professionals
          </p>
        </div>
      </section>

      {/* Benefits for Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Restaurants Choose Mendo Grass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grown to Order</h3>
              <p className="text-gray-700">
                We text you weekly to confirm your order. No waste, just fresh greens when you need them.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Delivery</h3>
              <p className="text-gray-700">
                Consistent weekly delivery to your restaurant or pickup at local farmers markets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-700">
                Sun-grown, certified organic microgreens with vibrant flavor and nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Subscription Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Restaurant Subscription</h2>
              <p className="text-lg text-gray-600">Professional-grade microgreens for your kitchen</p>
            </div>

            <RestaurantSubscriptionForm />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Simple ordering for busy kitchens
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/micros_multicolor.jpg"
                  alt="Order via text"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order via text</h3>
              <p className="text-gray-700">
                We text you weekly before we grow. Confirm your order or skip - it&apos;s that easy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/greenhouse_purple.jpg"
                  alt="We grow fresh"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We grow fresh</h3>
              <p className="text-gray-700">
                Your greens are grown to order under the California sun, ensuring peak freshness.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/mendograss_tote.jpg"
                  alt="Delivered weekly"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivered weekly</h3>
              <p className="text-gray-700">
                Choose delivery to your restaurant or pickup at one of our local farmers markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pickup & Delivery Options</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Local delivery available in Ukiah, Healdsburg, & Sebastopol, or pickup at farmers markets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Saturday Pickup</h3>
              <p className="text-gray-700">
                Healdsburg Farmers Market<br />
                Santa Rosa Farmers Market<br />
                Ukiah Farmers Market
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sunday Pickup</h3>
              <p className="text-gray-700">
                Sebastopol Farmers Market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Menu?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join leading restaurants in Mendocino and Sonoma counties
          </p>
          <a
            href="#subscription-form"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Subscription
          </a>
        </div>
      </section>
    </div>
  );
}

// Restaurant Subscription Form Component (8oz only)
function RestaurantSubscriptionForm() {
  const [frequency, setFrequency] = useState('weekly');
  const [paymentPlan, setPaymentPlan] = useState('weekly');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const basePrice = 22.50; // 8oz only

  const getSubtotal = () => {
    if (paymentPlan === 'monthly') {
      return basePrice * 4;
    }
    return basePrice;
  };

  return (
    <div id="subscription-form" className="space-y-8">
      {/* Plan Display (8oz only) */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Subscription Plan:</label>
        <div className="border-2 border-green-500 bg-green-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Microgreens 8oz</h3>
            <p className="text-gray-600 mb-2">Perfect for professional kitchens</p>
            <p className="text-green-600 font-bold text-2xl">${basePrice}/week</p>
          </div>
        </div>
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Frequency:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              frequency === 'weekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setFrequency('weekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Weekly</h3>
              <p className="text-sm text-gray-600">Every week</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              frequency === 'biweekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setFrequency('biweekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Bi-weekly</h3>
              <p className="text-sm text-gray-600">Every other week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Plan */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Payment plan:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentPlan === 'weekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setPaymentPlan('weekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Pay Weekly</h3>
              <p className="text-sm text-gray-600">Charged each delivery</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentPlan === 'monthly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setPaymentPlan('monthly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Pay Monthly</h3>
              <p className="text-sm text-gray-600">Charged monthly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup or Delivery */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Pickup or delivery?</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              deliveryMethod === 'delivery' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setDeliveryMethod('delivery')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">🚚 Delivery</h3>
              <p className="text-sm text-gray-600">Ukiah, Healdsburg, Sebastopol</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              deliveryMethod === 'pickup' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setDeliveryMethod('pickup')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">📍 Pickup</h3>
              <p className="text-sm text-gray-600">Farmers markets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtotal and Continue */}
      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-900">Subtotal</span>
          <span className="text-2xl font-bold text-green-600">
            ${getSubtotal().toFixed(2)}
            {paymentPlan === 'monthly' ? '/month' : '/week'}
          </span>
        </div>
        
        <button className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
          Continue to Checkout
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Questions? Contact us at adam@mendograss.com
        </p>
      </div>
    </div>
  );
}
