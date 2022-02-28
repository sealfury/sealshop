import s from './UserNav.module.css'
import Link from 'next/link'
import { Bag as Cart, Heart } from '@components/icons'

const UserNav: React.FC = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart />
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
