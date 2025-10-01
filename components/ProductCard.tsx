import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.metadata?.product_images?.[0]?.imgix_url || product.thumbnail
  const category = product.metadata?.product_category?.value || 'Product'
  const inStock = product.metadata?.in_stock ?? true

  return (
    <a
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {imageUrl && (
          <img
            src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-900">
              Out of Stock
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.metadata?.product_name || product.title}
        </h3>
        <p className="text-2xl font-bold text-ocean">
          ${product.metadata?.price}
        </p>
      </div>
    </a>
  )
}