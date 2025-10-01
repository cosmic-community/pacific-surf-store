import { getProducts } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'
import CategoryFilter from '@/components/CategoryFilter'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const allProducts = await getProducts()

  // Filter by category if specified
  const filteredProducts = category
    ? allProducts.filter(
        (product) =>
          product.metadata?.product_category?.key === category
      )
    : allProducts

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600">
            Browse our complete collection of surf gear
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter currentCategory={category} />

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}