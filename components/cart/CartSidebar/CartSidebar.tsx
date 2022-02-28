import Link from 'next/link'
import classNames from 'classnames'
import { Bag as CartIcon, Cross as CloseIcon } from '@components/icons'
import { useUIContext } from '@components/ui/context'

const CartSidebar: React.FC = () => {
  const isEmpty = true
  const { closeSidebar } = useUIContext()

  const rootClass = classNames('h-full flex flex-col', {
    'bg-secondary text-secondary': isEmpty,
  })

  return (
    <div className={rootClass}>
      <header className='px-4 pt-6 pb-4 sm:px-6'>
        <div className='flex items-start justify-between space-x-3'>
          <div className='h-7 flex items-center'>
            <button
              className='hover:text-gray-500 transition ease-in-out duration-150'
              onClick={closeSidebar}
            >
              <CloseIcon className='h-6 w-6' />
            </button>
          </div>
        </div>
      </header>

      {isEmpty ? (
        <div className='flex-1 px4 flex flex-col justify-center items-center'>
          <span className='border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary'>
            <CartIcon className='absolute' />
          </span>
          <h2 className='pt-6 text-2xl font-bold tracking-wide text-center'>
            Your Cart Is Empty
          </h2>
          <p className='text-accents-3 px-10 text-center pt-2'>
            Chocolate cake lollipop lemon drops pastry croissant bear claw
            jujubes jujube
          </p>
        </div>
      ) : (
        <>
          <div className='px-4 sm:px-6 flex-1'>
            <h2 className='pt-1 pb-4 text-2xl leading-7 font-bold text-base tracking-wide inline-block'>
              My Cart
            </h2>
            <ul className='py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-accents-3 border-t border-accents-3'>
              Cart Items Will Eventually Go Here
            </ul>
          </div>
          <div className='flex-shrink-0 px-4 py-5 sm:px6'>
            <div className='border-t border-accents-3'>
              <ul className='py-3'>
                <li className='flex justify-between py-1'>
                  <span>Subtotal:</span>
                  <span>$20 (placeholder)</span>
                </li>
                <li className='flex justify-between py-1'>
                  <span>VAT:</span>
                  <span>Calculated At Checkout</span>
                </li>
                <li className='flex justify-between py-1'>
                  <span>Estimated Shipping:</span>
                  <span>FREE SHIPPING</span>
                </li>
              </ul>
              <div className='flex justify-between border-t border-accents-3 py-3 font-bold mb-10'>
                <span>Total</span>
                <span>$120 (placeholder)</span>
              </div>
            </div>
            <button
              onClick={() => {
                alert('Temp Going To Checkout Alert')
              }}
            >
              Proceed To Checkout!
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default CartSidebar
