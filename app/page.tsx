import { getProducts, getCollections } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import CollectionCard from '@/components/CollectionCard'

export default async function HomePage() {
  const products = await getProducts()
  const collections = await getCollections()

  // Sort products manually (newest first)
  const sortedProducts = products.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime()
    const dateB = new Date(b.created_at).getTime()
    return dateB - dateA
  })

  // Get featured products (first 6)
  const featuredProducts = sortedProducts.slice(0, 6)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-ocean text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean to-ocean-light opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Pacific Surf Co.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Premium surf gear for riders of all levels. From beginner-friendly boards to professional equipment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/products"
                className="inline-block bg-white text-ocean px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Products
              </a>
              <a
                href="/collections"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                View Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      {collections.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <a
            href="/products"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            View All →
          </a>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Pacific Surf Co.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏄</div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected gear from the world's leading surf brands
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-600">
                Real reviews from verified surfers in our community
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick delivery to get you in the water faster
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}