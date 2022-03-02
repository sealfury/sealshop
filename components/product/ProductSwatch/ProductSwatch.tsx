import s from './ProductSwatch.module.css'
import classNames from 'classnames'
import { Check } from '@components/icons'

type SwatchVariant = 'size' | 'color' | string

interface SwatchProps {
  color?: string
  label?: string
  variant?: SwatchVariant
  active?: boolean
  onClick: () => void
}

const ProductSwatch: React.FC<SwatchProps> = ({
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  variant = variant?.toLowerCase()
  label = label?.toLowerCase()

  const rootClass = classNames(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === 'size',
  })

  return (
    <button
      className={rootClass}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === 'size' ? label : null}
    </button>
  )
}

export default ProductSwatch
