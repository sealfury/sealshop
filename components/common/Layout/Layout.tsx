import s from './Layout.module.css'
import { Footer } from '@components/common'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <main className='fit'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
