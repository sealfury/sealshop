import s from './ProductView.module.css'
import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { Container, Button } from '@components/ui'
import { ProductType } from '@common/types/product'
import { ProductSlider, ProductSwatch } from '@components/product'

interface ProductViewProps {
  product: ProductType
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [choices, setChoices] = useState({})
  console.log(choices)

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
            {product.options.map(option => (
              <div key={option.id} className='pb-4'>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map(value => (
                    <ProductSwatch
                      key={`${option.id}-${value.label}`}
                      label={value.label}
                      color={value.hexColor}
                      variant={option.displayName}
                      onClick={() => {
                        setChoices({
                          ...choices,
                          [option.displayName.toLowerCase()]:
                            value.label.toLowerCase(),
                        })
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className={s.button}
              onClick={() => alert('clicking add to cart')}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
