interface CategoryFilterProps {
  currentCategory?: string
}

const categories = [
  { key: '', label: 'All Products' },
  { key: 'surfboards', label: 'Surfboards' },
  { key: 'wetsuits', label: 'Wetsuits' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'apparel', label: 'Apparel' },
]

export default function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = currentCategory === category.key || (!currentCategory && category.key === '')
          return (
            <a
              key={category.key}
              href={category.key ? `/products?category=${category.key}` : '/products'}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}