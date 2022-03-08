import s from './UserNav.module.css'
import Link from 'next/link'
import { Bag as Cart, Heart } from '@components/icons'
import { useUIContext } from '@components/ui/context'
import { useCart } from '@common/cart'

const UserNav: React.FC = () => {
  const { openSidebar } = useUIContext()
  const { data } = useCart()
  debugger

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
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
