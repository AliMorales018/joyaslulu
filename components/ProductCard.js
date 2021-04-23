import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'

function ProductCard({ product }) {
  const handle = product.node.handle
  const title = product.node.title
  const description = product.node.description.substr(0, 80)
  
  const price = product.node.variants.edges[0].node.price

  const imageNode = product.node.images.edges[0].node
//grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
//grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
  return (
    <Link
      href={`/products/${handle}`}
      passHref
    >
      <a className="h-90 w-30 rounded shadow-sm border border-palette-lighter">
        <div className="h-40 border-b-2 border-palette-lighter relative">
          <Image
            src={imageNode.originalSrc}
            alt={imageNode.altText}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-36 relative">
          <div className="font-primary text-palette-primary text-base pt-2 px-4 font-semibold">
            {title} 
            
          </div>
          <div className="text-xs text-gray-600 p-2 font-primary font-light">
            {description}
          </div>
          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price
              currency="S/."
              num={price}
              numSize="text-sm"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
