import s from './ProductSwatch.module.css'
import { Check as Selected } from '@components/icons'

type SwatchVariant = 'size' | 'color' | string

interface SwatchProps {
  color?: string
  label?: string
  variant?: SwatchVariant
}

const ProductSwatch: React.FC<SwatchProps> = ({ color, label, variant }) => {
  return (
    <button
      className={s.swatchRoot}
      style={color ? { backgroundColor: color } : {}}
    >
      {/* <span>
        <Selected />
      </span> */}
      {variant.toLowerCase() === 'size' ? label.toLowerCase() : null}
    </button>
  )
}

export default ProductSwatch
