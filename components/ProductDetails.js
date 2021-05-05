import { useState } from 'react'
import BackToProductButton from '@/components/BackToProductButton'
import ProductInfo from '@/components/ProductInfo'
import ProductForm from '@/components/ProductForm'

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(productData.variants.edges[0].node.price)
  return (
//grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
//grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
//sm-640px //md-768px //lg-1024px  //xl-1280px //2xl-1536px
    <div className="flex flex-col justify-between h-full w-full max-w-xs mx-auto space-y-0 min-h-128 md:w-1/2">
      <BackToProductButton />
      <ProductInfo 
        title={productData.title}
        description={productData.description}
        price={variantPrice}
      />
      <ProductForm 
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges} 
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
      />
    </div>
  )
}

export default ProductDetails
