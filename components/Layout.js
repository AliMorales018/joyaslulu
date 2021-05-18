import { CartProvider } from '@/context/Store'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Wa from '@/components/Wa.js'

function Layout({ children }) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />
        <main>
          {children}
        </main>

        <Footer />
        <Wa />
      </div>
    </CartProvider>
  )
}

export default Layout
