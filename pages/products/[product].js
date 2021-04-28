import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'

function ProductPage({ productData }) {  
  if (!productData) return null
  return (
    <div className="min-h-screen py-1  sm:pt-2">
      <ProductSection productData={productData} />
    </div>
  )
}
//py-12 sm:pt-20 arriba
export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {    
    const product = String(slug.node.handle)
    
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)  
 
  return {
    props: {
      productData,
    },
    revalidate: 1,
  }
}

export default ProductPage
