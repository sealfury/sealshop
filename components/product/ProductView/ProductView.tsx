import s from './ProductView.module.css'
import Image from 'next/image'
import classNames from 'classnames'
import { Container } from '@components/ui'
import { ProductType } from '@common/types/product'
import { ProductSlider } from '@components/product'

interface ProductViewProps {
  product: ProductType
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  return (
    <Container>
      <div className={classNames(s.root, 'fit', 'mb-5')}>
        <div className={classNames(s.productDisplay, 'fit')}>
          <div className={s.nameContainer}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value} {` `} {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map(img => (
              <div key={img.url} className={s.imageContainer}>
                <Image
                  className={s.image}
                  src={img.url}
                  alt={img.alt}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            <div className='pb-4'>
              <h2 className='uppercase font-medium'>Color</h2>
              <div className='flex flex-row py-4'>
                ... Variant Options To Be Added Later ...
              </div>
            </div>
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <button
              className={s.addButton}
              onClick={() => {}}
              aria-label='Add To Cart'
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
