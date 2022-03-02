import s from './ProductSwatch.module.css'
import { Check as Selected } from '@components/icons'

type SwatchVariant = 'size' | 'color' | string

interface SwatchProps {
  color?: string
  label?: string
  variant?: SwatchVariant
  onClick: () => void
}

const ProductSwatch: React.FC<SwatchProps> = ({
  color,
  label,
  variant,
  ...rest
}) => {
  return (
    <button
      className={s.swatchRoot}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {/* <span>
        <Selected />
      </span> */}
      {variant.toLowerCase() === 'size' ? label.toLowerCase() : null}
    </button>
  )
}

export default ProductSwatch
