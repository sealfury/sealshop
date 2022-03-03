import s from './ProductView.module.css'
import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { Container, Button } from '@components/ui'
import { ProductType } from '@common/types/product'
import { ProductSlider, ProductSwatch } from '@components/product'
import { ProductChoices, getVariant } from '../utils'
import { useUIContext } from '@components/ui/context'
import useAddItem from '@framework/cart/use-add-item'
import { useApiProvider } from '@common'

interface ProductViewProps {
  product: ProductType
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [choices, setChoices] = useState<ProductChoices>({})
  const { hooks, fetcher } = useApiProvider()

  const { openSidebar } = useUIContext()
  const addItem = useAddItem()

  const variant = getVariant(product, choices)

  const addToCart = () => {
    try {
      const itemToAdd = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options,
      }

      const output = addItem(itemToAdd)
      alert(JSON.stringify(output))
      openSidebar()
    } catch (err) {
      console.error(err)
    }
  }

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
                  priority
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
                  {option.values.map(value => {
                    // specific size (s, m, l) / color ('black') choice from swatch option
                    const activeChoice =
                      choices[option.displayName.toLowerCase()]
                    return (
                      <ProductSwatch
                        key={`${option.id}-${value.label}`}
                        label={value.label}
                        color={value.hexColor}
                        variant={option.displayName}
                        active={value.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              value.label.toLowerCase(),
                          })
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className='pb-14 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button className={s.button} onClick={addToCart}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
