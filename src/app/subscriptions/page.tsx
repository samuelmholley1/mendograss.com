import Image from "next/image";

export default function Subscriptions() {
  return (
    <div className="min-h-screen py-16">
      {/* Header Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Subscribe to access weekly, grown-to-order microgreens & wheatgrass
          </h1>
          <a
            href="https://www.gofarmhand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
          >
            Select Subscription
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Sun-grown to order for weekly pickup or delivery
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/select-size.png"
                  alt="Select a size"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select a size</h3>
              <p className="text-gray-700">
                Choose from two sizes of microgreens (perfect for 2 - 4 people) or a flat tray of wheatgrass for your weekly juicing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/subscribe.png"
                  alt="Subscribe"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h3>
              <p className="text-gray-700">
                Select your pickup or delivery address and enter payment once. We&apos;ll store it securely so you can order easily via SMS each week.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/images/skip.png"
                  alt="Skip when needed"
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skip when needed</h3>
              <p className="text-gray-700">
                We&apos;ll send you a text weekly before we grow – add on items or skip any week, for any reason, at no charge.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.gofarmhand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              Select Subscription
            </a>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pickup & Delivery</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Choose between local delivery (Ukiah, Healdsburg, & Sebastopol) or convenient pickup at your favorite farmers markets.
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

      {/* Subscription Plans Section */}
      <section id="subscriptions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Subscription Plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Subscription #1 - Microgreens 5oz */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <Image
                  src="/images/sub1.jpg"
                  alt="Microgreens 5oz tray"
                  width={400}
                  height={250}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Subscription #1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Microgreens - 5oz</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">$17.50/WEEK</p>
                
                <div className="text-left text-gray-700 space-y-2 mb-6">
                  <p>• A weekly order of our 5 oz microgreens.</p>
                  <p>• Combinations can include pea shoots, radish, sunflower, and buckwheat.</p>
                  <p>• Sized for 2 people.</p>
                  <p>• Skip any week at no charge.</p>
                </div>
                
                <a
                  href="https://www.gofarmhand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Subscription #2 - Microgreens 8oz */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <Image
                  src="/images/sub2.jpg"
                  alt="Microgreens 8oz tray"
                  width={400}
                  height={250}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Subscription #2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Microgreens - 8oz</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">$22.50/WEEK</p>
                
                <div className="text-left text-gray-700 space-y-2 mb-6">
                  <p>• A weekly order of our 8 oz microgreens.</p>
                  <p>• Combinations can include pea shoots, radish, sunflower, and buckwheat.</p>
                  <p>• Sized for 4 people.</p>
                  <p>• Skip any week at no charge.</p>
                </div>
                
                <a
                  href="https://www.gofarmhand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Subscribe
                </a>
              </div>
            </div>

            {/* Subscription #3 - Wheatgrass Live Tray */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-6">
                <Image
                  src="/images/sub3.jpg"
                  alt="Wheatgrass live tray"
                  width={400}
                  height={250}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  Subscription #3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Wheatgrass - Live Tray</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">$20/WEEK</p>
                
                <div className="text-left text-gray-700 space-y-2 mb-6">
                  <p>• A weekly order of a live tray of wheatgrass so you can harvest it fresh at home!</p>
                  <p>• Sized for 4 people.</p>
                  <p>• Skip any week at no charge.</p>
                </div>
                
                <a
                  href="https://www.gofarmhand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Weekly add-ons</h2>
          <p className="text-lg text-gray-700">
            Enhance your weekly subscription with extra greens, pantry staples, and merch
          </p>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Get your greens</h2>
          <p className="text-xl text-green-100 mb-8">
            Join today for a fresh and flexible way to enjoy your weekly greens.
          </p>
          <a
            href="https://www.gofarmhand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Select Subscription
          </a>
        </div>
      </section>
    </div>
  );
}
