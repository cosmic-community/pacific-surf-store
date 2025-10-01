import { Product } from '@/types'

interface ProductInfoProps {
  product: Product
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const inStock = product.metadata?.in_stock ?? true
  const sizes = product.metadata?.sizes_available
  const colors = product.metadata?.colors_available
  const category = product.metadata?.product_category?.value

  return (
    <div className="space-y-6">
      {/* Category */}
      {category && (
        <div>
          <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      )}

      {/* Title and Price */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {product.metadata?.product_name || product.title}
        </h1>
        <p className="text-4xl font-bold text-ocean">
          ${product.metadata?.price}
        </p>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            inStock ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
        <span className={inStock ? 'text-green-700' : 'text-red-700'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Sizes */}
      {sizes && sizes.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Available Sizes
          </h3>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <div
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Colors */}
      {colors && colors.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Available Colors
          </h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium"
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      {product.metadata?.description && (
        <div className="prose prose-sm max-w-none">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Description
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: product.metadata.description }}
          />
        </div>
      )}
    </div>
  )
}