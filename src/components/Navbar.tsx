'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/logo.svg"
                alt="Mendo Grass logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#findus"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Find Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <Link
                href="/subscriptions"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Subscriptions
              </Link>
              <a
                href="https://www.gofarmhand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Newsletter
              </a>
              <a
                href="https://www.gofarmhand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Wholesale
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="#about"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#findus"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Find Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <Link
                href="/subscriptions"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Subscriptions
              </Link>
              <a
                href="https://www.gofarmhand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Newsletter
              </a>
              <a
                href="https://www.gofarmhand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Wholesale
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
