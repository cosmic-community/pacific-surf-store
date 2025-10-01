import { Collection } from '@/types'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const imageUrl = collection.metadata?.featured_image?.imgix_url
  const productsCount = collection.metadata?.products?.length || 0

  return (
    <a
      href={`/collections/${collection.slug}`}
      className="group block bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
    >
      {/* Collection Image */}
      {imageUrl && (
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={`${imageUrl}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={collection.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Collection Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {collection.metadata?.collection_name || collection.title}
        </h3>
        {collection.metadata?.description && (
          <p className="text-gray-600 mb-4 line-clamp-2">
            {collection.metadata.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {productsCount} {productsCount === 1 ? 'product' : 'products'}
          </span>
          <span className="text-primary font-semibold group-hover:underline">
            View Collection →
          </span>
        </div>
      </div>
    </a>
  )
}