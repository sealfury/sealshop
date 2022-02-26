import s from './ProductCard.module.css'
import Link from 'next/link'
import { Product } from '@common/types/product'
import Image from 'next/image'

interface CardProps {
  product: Product
}

const placeHolder = '/mr-seal-yo-girl.svg'

const ProductCard: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        <div className={s.productBackground}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>
            {product.price.value} {product.price.currencyCode}
          </span>
        </div>
        {product.images && (
          <Image
            className={s.productImage}
            alt={product.name ?? 'Product Image'}
            src={product.images[0].url ?? placeHolder}
            height={540}
            width={540}
            quality='85'
            layout='responsive'
          />
        )}
      </a>
    </Link>
  )
}

export default ProductCard
