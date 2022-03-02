import s from './ProductSlider.module.css'
import { Children, isValidElement, cloneElement } from 'react'
import { useKeenSlider } from 'keen-slider/react'

const ProductSlider: React.FC = ({ children }) => {
  // see keen slider docs for details
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log(`changing to `)
    },
  })

  return (
    <div className={s.root}>
      <div
        ref={sliderRef as any}
        className='keen-slider h-full transition-opacity'
      >
        {Children.map(children, child => {
          if (isValidElement(child)) {
            // return {
            //   ...child,
            //   props: {
            //     ...child.props,
            //     className: 'keen-slider__slide',
            //   },
            // }
            return cloneElement(child, {
              className: `${
                child.props.className ? `${child.props.className}` : ''
              } keen-slider__slide`,
            })
          }

          return child
        })}
      </div>
    </div>
  )
}

export default ProductSlider
