export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ocean text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pacific Surf Co.</h3>
            <p className="text-blue-200">
              Your trusted source for premium surf gear and equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-blue-200 hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="/collections" className="text-blue-200 hover:text-white">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-blue-200">
              Questions? Get in touch with our team.
            </p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {currentYear} Pacific Surf Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}