import s from './ProductSlider.module.css'
import { Children, isValidElement, cloneElement } from 'react'

const ProductSlider: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className='keen-slider h-full transition-opacity'>
        {Children.map(children, child => {
          if (isValidElement(child)) {
            // return {
            //   ...child,
            //   props: {
            //     ...child.props,
            //     className: 'keen-slider__slide',
            //   },
            // }
            return cloneElement(child, { className: 'keen-slider__slide' })
          }

          return child
        })}
      </div>
    </div>
  )
}

export default ProductSlider
