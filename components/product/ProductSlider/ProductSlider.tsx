import s from './ProductSlider.module.css'

const ProductSlider: React.FC = ({ children }) => {
  return (
    <div className={s.root}>
      <div className='h-full transition-opacity'>{children}</div>
    </div>
  )
}

export default ProductSlider
