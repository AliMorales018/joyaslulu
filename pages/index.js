import StoreHeading from '@/components/StoreHeading'
import ProductListings from '@/components/ProductListings'
import { getAllProducts} from '@/lib/shopify'

function IndexPage({ products }) {

  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />      
    </div>
  )
}
//Se reemplaza getStaticProps por getServerSideProps 
//Original con getAllProductsInCollection() se reemplazó por getAllProducts()

export async function getServerSideProps() {  
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    //revalidate: 60,
  }
}

export default IndexPage
