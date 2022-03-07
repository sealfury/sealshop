import s from './ProductSlider.module.css'
import { Children, isValidElement, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import classNames from 'classnames'

const ProductSlider: React.FC = ({ children }) => {
  // see keen slider docs for details
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div className={s.root}>
      <div ref={sliderRef} className='keen-slider h-full transition-opacity'>
        <button
          className={classNames(s.leftControl, s.control)}
          onClick={() => instanceRef.current?.prev()}
        />
        <button
          className={classNames(s.rightControl, s.control)}
          onClick={() => instanceRef.current?.next()}
        />
        {Children.map(children, child => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ''
                } keen-slider__slide`,
              },
            }
          }

          return child
        })}
      </div>
    </div>
  )
}

export default ProductSlider
