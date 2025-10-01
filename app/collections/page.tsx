import { getCollections } from '@/lib/cosmic'
import CollectionCard from '@/components/CollectionCard'

export default async function CollectionsPage() {
  const collections = await getCollections()

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Collections
          </h1>
          <p className="text-gray-600 text-lg">
            Curated selections of surf gear for every skill level and condition
          </p>
        </div>

        {/* Collections Grid */}
        {collections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No collections available at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}