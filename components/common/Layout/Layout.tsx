import s from './Layout.module.css'
import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'
import { CartSidebar } from '@components/cart'
import { useUIContext } from '@components/ui/context'
import { ApiProvider } from '@common'

const Layout: React.FC = ({ children }) => {
  const { sidebarOpen, closeSidebar } = useUIContext()

  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className='fit'>{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout
