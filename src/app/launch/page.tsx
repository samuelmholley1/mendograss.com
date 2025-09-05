import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Greenhouse Launch Event | Mendo Grass',
  description: 'Join us for the groundbreaking and ribbon cutting ceremony of our new greenhouse facility. An exclusive B2B networking event for food industry professionals.',
  keywords: 'greenhouse launch, ribbon cutting, groundbreaking, B2B networking, microgreens, food industry professionals, chefs, school districts',
};

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/wheatgrass_background.jpg')"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXCLUSIVE LAUNCH EVENT
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Greenhouse Groundbreaking & Ribbon Cutting Reception
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join us for an exclusive networking event as we break ground on our new state-of-the-art greenhouse facility. 
            Connect with industry leaders, sample our premium microgreens, and discover partnership opportunities.
          </p>
          
          {/* Event Details */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 text-gray-900 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-green-700 mb-2">📅 Date & Time</h3>
                <p className="text-gray-700">Monday, October 27, 2025</p>
                <p className="text-gray-700">5:00 PM - 8:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2">📍 Location</h3>
                <p className="text-gray-700">Mendo Grass Greenhouse</p>
                <p className="text-gray-700">Mendocino County, CA</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2">🍷 Refreshments</h3>
                <p className="text-gray-700">Wine, craft beer, and</p>
                <p className="text-gray-700">gourmet hors d&apos;oeuvres</p>
              </div>
              <div>
                <h3 className="font-semibold text-green-700 mb-2">👥 Networking</h3>
                <p className="text-gray-700">Industry professionals</p>
                <p className="text-gray-700">B2B partnership opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Attend */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This exclusive event is designed for food industry professionals interested in premium microgreen partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Executive Chefs</h3>
              <p className="text-gray-600 mb-4">
                Restaurant owners, head chefs, and culinary directors seeking premium microgreens for elevated dishes.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Bring 1-3 colleagues interested in sourcing
              </div>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Food Managers</h3>
              <p className="text-gray-600 mb-4">
                District nutrition directors and school food service managers implementing healthy eating programs.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Bring administrators and nutrition staff
              </div>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food Service Partners</h3>
              <p className="text-gray-600 mb-4">
                Distributors, buyers, and food service professionals exploring new supplier relationships.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Network with potential partners
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Groundbreaking Ceremony</h3>
                    <p className="text-gray-600">Witness the official start of our state-of-the-art greenhouse construction and be part of our growth story.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🥗</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Microgreens Tasting</h3>
                    <p className="text-gray-600">Sample our full range of premium microgreens and learn about their unique flavors and nutritional benefits.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">B2B Partnership Opportunities</h3>
                    <p className="text-gray-600">Discuss wholesale pricing, supply agreements, and custom growing programs tailored to your needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🍷</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Reception</h3>
                    <p className="text-gray-600">Enjoy local wines, craft beers, and gourmet hors d&apos;oeuvres while networking with industry peers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/greenhouse_purple.jpg"
                alt="Mendo Grass greenhouse facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Form */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reserve Your Spot</h2>
            <p className="text-xl text-gray-600">
              Limited capacity - RSVP required for this exclusive industry event
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g., Executive Chef, Food Service Director"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Restaurant/School District/Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry Category *
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="restaurant">Restaurant/Food Service</option>
                  <option value="school">School District/Education</option>
                  <option value="distributor">Food Distribution</option>
                  <option value="other">Other Food Industry</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Additional Guests (0-3)
                </label>
                <select
                  id="guests"
                  name="guests"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="0">Just me (1 person total)</option>
                  <option value="1">+1 guest (2 people total)</option>
                  <option value="2">+2 guests (3 people total)</option>
                  <option value="3">+3 guests (4 people total)</option>
                </select>
              </div>

              <div>
                <label htmlFor="guestNames" className="block text-sm font-medium text-gray-700 mb-2">
                  Guest Names & Titles (if bringing guests)
                </label>
                <textarea
                  id="guestNames"
                  name="guestNames"
                  rows={3}
                  placeholder="Please list names and titles of any guests you're bringing"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                  Microgreens Interests
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 text-green-600" name="interests" value="wholesale" />
                    <span className="text-gray-700">Wholesale purchasing</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 text-green-600" name="interests" value="custom" />
                    <span className="text-gray-700">Custom growing programs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 text-green-600" name="interests" value="education" />
                    <span className="text-gray-700">Educational partnerships</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3 text-green-600" name="interests" value="menu" />
                    <span className="text-gray-700">Menu development consultation</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Any dietary restrictions, accessibility needs, or questions about the event..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  RSVP for October 27th Event
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  You&apos;ll receive a confirmation email with event details and directions.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact & Questions */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About the Event?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help with any questions about the launch event or partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/wholesale"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn About Wholesale
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
