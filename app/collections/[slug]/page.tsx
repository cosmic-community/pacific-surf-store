// app/collections/[slug]/page.tsx
import { getCollection } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = await getCollection(slug)

  if (!collection) {
    notFound()
  }

  const products = collection.metadata?.products || []

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
              <a href="/collections" className="hover:text-primary">
                Collections
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900">{collection.title}</li>
          </ol>
        </nav>

        {/* Collection Header */}
        <div className="mb-12">
          {collection.metadata?.featured_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={`${collection.metadata.featured_image.imgix_url}?w=1200&h=400&fit=crop&auto=format,compress`}
                alt={collection.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {collection.metadata?.collection_name || collection.title}
          </h1>
          {collection.metadata?.description && (
            <p className="text-gray-600 text-lg max-w-3xl">
              {collection.metadata.description}
            </p>
          )}
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Products in this Collection
            </h2>
            <ProductGrid products={products} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products in this collection yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}