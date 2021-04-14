import ProductCard from '@/components/ProductCard'

function ProductListings({ products }) {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      }
    </div>
  )
}
export default ProductListings
