import s from './Layout.module.css'
import { Footer, Navbar } from '@components/common'
import { Sidebar } from '@components/ui'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar>Child Placeholder</Sidebar>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
