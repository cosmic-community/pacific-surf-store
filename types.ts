// Base Cosmic object interface
interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products'
  thumbnail?: string
  metadata: {
    product_name: string
    description: string
    price: number
    product_images?: {
      url: string
      imgix_url: string
    }[]
    sizes_available?: string[] | null
    colors_available?: string[] | null
    in_stock: boolean
    product_category: {
      key: string
      value: string
    }
  }
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections'
  metadata: {
    collection_name: string
    description?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    products?: Product[]
  }
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews'
  metadata: {
    customer_name: string
    rating: string
    review_title: string
    review_text: string
    product: Product | string
    verified_purchase: boolean
  }
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products'
}

export function isCollection(obj: CosmicObject): obj is Collection {
  return obj.type === 'collections'
}

export function isReview(obj: CosmicObject): obj is Review {
  return obj.type === 'reviews'
}