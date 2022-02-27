import s from './Navbar.module.css'
import Link from 'next/link'
import { Container } from '@components/ui'

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className='flex flex-1 items-center'>
          <Link href='/'>
            <a className={s.navLogo}>~~ S E A L S H O P ~~</a>
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/'>
              <a className={s.navLink}>All Produts</a>
            </Link>
            <Link href='/'>
              <a className={s.navLink}>Clothing</a>
            </Link>
            <Link href='/'>
              <a className={s.navLink}>Accessories</a>
            </Link>
            <Link href='/'>
              <a className={s.navLink}>Artwork</a>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
