import s from './UserNav.module.css'
import Link from 'next/link'
import { Bag as Cart, Heart } from '@components/icons'
import { useUIContext } from '@components/ui/context'

const UserNav: React.FC = () => {
  const uiContext = useUIContext()

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={uiContext.setSidebarOpen} />
        </li>
        <li className={s.item}>
          <Link href='/wishlist'>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav
