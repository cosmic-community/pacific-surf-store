export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏄</span>
            <span className="text-xl font-bold text-ocean">
              Pacific Surf Co.
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/products"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Products
            </a>
            <a
              href="/collections"
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Collections
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}