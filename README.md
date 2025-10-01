# 🏄 Pacific Surf Co. - E-Commerce Store

![App Preview](https://imgix.cosmicjs.com/a5835a70-9edf-11f0-8f3b-cde45452e1fc-photo-1502680390469-be75c86b636f-1759334383732.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce surf store built with Next.js 15 and Cosmic CMS, featuring products, collections, and customer reviews.

## ✨ Features

- 🛍️ Dynamic product catalog with category filtering
- 📦 Curated product collections
- ⭐ Customer reviews with star ratings
- 🎨 Modern, ocean-inspired design
- 📱 Fully responsive layout
- 🖼️ Optimized image loading with imgix
- 🔍 Product detail pages with galleries
- ✅ In-stock indicators and availability tracking
- 🎯 Size and color variant selection
- 💬 Verified purchase badges on reviews

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68dd4f7f71f3904a2a941530&clone_repository=68dd512b71f3904a2a94157a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce surf store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for "Design a content model for an e-commerce surf store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Imgix** - Image optimization and delivery
- **Bun** - Fast package manager and runtime

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with the surf store content model

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pacific-surf-co
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Product[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Single Product with Reviews
```typescript
export async function getProduct(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Product
  } catch (error) {
    if (error.status === 404) {
      return null
    }
    throw error
  }
}
```

### Fetching Collections
```typescript
export async function getCollections() {
  try {
    const response = await cosmic.objects
      .find({ type: 'collections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Collection[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## 🔗 Cosmic CMS Integration

This application uses Cosmic's powerful features:

- **Object Relationships** - Products connected to collections, reviews linked to products
- **Depth Queries** - Fetching nested product data within collections
- **File Metafields** - Product images optimized through imgix
- **Select Dropdowns** - Product categories with predefined options
- **Switch Fields** - In-stock status and verified purchase indicators
- **Check Boxes** - Size and color variant selection

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the button above
2. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
3. Deploy!

### Environment Variables

Make sure to set these in your hosting platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for future CRUD features)

## 📝 License

MIT License - feel free to use this project for your own surf shop!

<!-- README_END -->