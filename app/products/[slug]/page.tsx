// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import ProductInfo from '@/components/ProductInfo'
import ReviewList from '@/components/ReviewList'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id)

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/products" className="hover:text-primary">
                Products
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="border-t pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Customer Reviews
            </h2>
            <ReviewList reviews={reviews} />
          </div>
        )}
      </div>
    </div>
  )
}